import { useEffect, useState, useCallback } from "react";
import { ExternalLink, Wallet, RefreshCw } from "lucide-react";
import { TOKEN_CONFIG } from "@/data/token";

/**
 * Meridian Dashboard — a fully client-side, read-only page.
 *
 * IMPORTANT — what this page does NOT do:
 * - It never asks for or handles a private key or seed phrase.
 * - It never initiates a token purchase, sale, or transfer.
 * - It never asks for or stores any personal/government ID.
 * - "Connect Wallet" here only requests READ access (the standard
 *   eth_requestAccounts permission) to display the connected address's
 *   own public balances — the same read-only permission any block
 *   explorer effectively has once you tell it an address.
 *
 * All data below is fetched live from BNB Smart Chain via a public RPC
 * endpoint at render time — nothing here is hardcoded or cached.
 */

const BSC_RPC = "https://bsc-dataseed.binance.org/";
const MRDN_ADDRESS = "0xd4025a390a0b2a606f24Ea33A902D10D978715F2";
const STAKING_ADDRESS = "0xE4679e407A4967f7182E87C1bc25Dcc786c3D3eb";
const VESTING_ADDRESS = "0xCb89849805B44A9D8Ee11B5D40cd6962d4fF93f7";

const ERC20_ABI = [
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)",
];
const STAKING_ABI = [
  "function totalStaked() view returns (uint256)",
  "function rewardPoolBalance() view returns (uint256)",
  "function stakedBalanceOf(address) view returns (uint256)",
  "function earned(address) view returns (uint256)",
];
const VESTING_ABI = [
  "function totalAllocation() view returns (uint256)",
  "function totalReleased() view returns (uint256)",
  "function releasable() view returns (uint256)",
  "function vestedAmount() view returns (uint256)",
];

function formatMRDN(raw, decimals = 18) {
  if (raw === null || raw === undefined) return "—";
  const value = Number(raw) / 10 ** decimals;
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function StatCard({ label, value, sub, href }) {
  return (
    <div className="rounded-lg border border-surface-border bg-surface/50 p-5">
      <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{label}</p>
      <p className="mt-2 text-2xl font-medium text-ink">{value}</p>
      {sub && <p className="mt-1 text-[12px] text-ink-dim">{sub}</p>}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-[11px] text-line hover:underline"
        >
          Verify on BscScan <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [ethersLib, setEthersLib] = useState(null);
  const [chainData, setChainData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [account, setAccount] = useState(null);
  const [accountData, setAccountData] = useState(null);
  const [connecting, setConnecting] = useState(false);

  // Load ethers.js from CDN at runtime (avoids adding a heavy dependency
  // to the main site bundle just for this one page).
  useEffect(() => {
    if (window.ethers) {
      setEthersLib(window.ethers);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.4/ethers.umd.min.js";
    script.async = true;
    script.onload = () => setEthersLib(window.ethers);
    script.onerror = () => setError("Could not load on-chain library. Please refresh.");
    document.body.appendChild(script);
  }, []);

  const fetchChainData = useCallback(async (ethers) => {
    setLoading(true);
    setError(null);
    try {
      const provider = new ethers.JsonRpcProvider(BSC_RPC);
      const token = new ethers.Contract(MRDN_ADDRESS, ERC20_ABI, provider);
      const staking = new ethers.Contract(STAKING_ADDRESS, STAKING_ABI, provider);
      const vesting = new ethers.Contract(VESTING_ADDRESS, VESTING_ABI, provider);

      const [totalSupply, totalStaked, rewardPoolBalance, totalAllocation, totalReleased, releasable] =
        await Promise.all([
          token.totalSupply(),
          staking.totalStaked(),
          staking.rewardPoolBalance(),
          vesting.totalAllocation(),
          vesting.totalReleased(),
          vesting.releasable(),
        ]);

      setChainData({
        totalSupply,
        totalStaked,
        rewardPoolBalance,
        totalAllocation,
        totalReleased,
        releasable,
        fetchedAt: new Date(),
      });
    } catch (e) {
      setError("Could not reach BNB Smart Chain right now. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (ethersLib) fetchChainData(ethersLib);
  }, [ethersLib, fetchChainData]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError("No wallet extension detected. Install MetaMask or a similar wallet to use this feature.");
      return;
    }
    if (!ethersLib) return;
    setConnecting(true);
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const addr = accounts[0];
      setAccount(addr);

      const provider = new ethersLib.JsonRpcProvider(BSC_RPC);
      const token = new ethersLib.Contract(MRDN_ADDRESS, ERC20_ABI, provider);
      const staking = new ethersLib.Contract(STAKING_ADDRESS, STAKING_ABI, provider);

      const [balance, staked, earned] = await Promise.all([
        token.balanceOf(addr),
        staking.stakedBalanceOf(addr),
        staking.earned(addr),
      ]);
      setAccountData({ balance, staked, earned });
    } catch (e) {
      setError("Wallet connection was cancelled or failed.");
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Live Data</p>
        <div className="mt-2 flex items-center justify-between">
          <h1 className="text-3xl font-medium text-ink">Dashboard</h1>
          <button
            onClick={() => ethersLib && fetchChainData(ethersLib)}
            className="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-3 py-2 text-[12px] text-ink-dim hover:text-ink"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Refresh
          </button>
        </div>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-dim">
          Every figure on this page is read directly from BNB Smart Chain at load time —
          nothing here is hardcoded. Click "Verify on BscScan" on any card to confirm it
          yourself, independently of this website.
        </p>

        {error && (
          <div className="mt-6 rounded-md border border-amber-600/40 bg-amber-500/10 p-4 text-[13px] text-amber-200">
            {error}
          </div>
        )}

        {loading && !chainData && (
          <p className="mt-10 text-[13px] text-ink-faint">Loading live on-chain data…</p>
        )}

        {chainData && (
          <>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <StatCard
                label="MRDN Total Supply"
                value={formatMRDN(chainData.totalSupply)}
                href={`https://bscscan.com/token/${MRDN_ADDRESS}`}
              />
              <StatCard
                label="Total Staked"
                value={formatMRDN(chainData.totalStaked)}
                sub="MRDN currently locked in the staking contract"
                href={`https://bscscan.com/address/${STAKING_ADDRESS}`}
              />
              <StatCard
                label="Reward Pool Balance"
                value={formatMRDN(chainData.rewardPoolBalance)}
                sub="Available to pay stakers"
                href={`https://bscscan.com/address/${STAKING_ADDRESS}`}
              />
              <StatCard
                label="Vesting Contract"
                value={`${formatMRDN(chainData.totalReleased)} released`}
                sub={`of ${formatMRDN(chainData.totalAllocation)} total allocation`}
                href={`https://bscscan.com/address/${VESTING_ADDRESS}`}
              />
            </div>
            <p className="mt-3 text-[11px] text-ink-faint">
              Last fetched: {chainData.fetchedAt.toLocaleTimeString()}
            </p>
          </>
        )}

        <div className="mt-14 rounded-lg border border-surface-border bg-surface/50 p-6">
          <h2 className="text-lg font-medium text-ink">Check Your Own Balance</h2>
          <p className="mt-2 text-[13px] text-ink-dim">
            Connect your wallet to view your own MRDN balance and staking position. This only
            requests read access to your public address — it never asks for your seed phrase,
            and it never initiates any transaction.
          </p>

          {!account ? (
            <button
              onClick={connectWallet}
              disabled={connecting || !ethersLib}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-line px-4 py-2.5 text-[13px] font-semibold text-base-deep disabled:opacity-50"
            >
              <Wallet className="h-4 w-4" />
              {connecting ? "Connecting…" : "Connect Wallet (view-only)"}
            </button>
          ) : (
            <div className="mt-4">
              <p className="font-mono text-[12px] text-ink-faint">{account}</p>
              {accountData && (
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div>
                    <p className="text-[11px] text-ink-faint">MRDN Balance</p>
                    <p className="text-lg text-ink">{formatMRDN(accountData.balance)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-ink-faint">Staked</p>
                    <p className="text-lg text-ink">{formatMRDN(accountData.staked)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-ink-faint">Earned (unclaimed)</p>
                    <p className="text-lg text-ink">{formatMRDN(accountData.earned)}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/staking"
            className="inline-flex items-center gap-2 rounded-md border border-surface-border px-4 py-2.5 text-[13px] text-ink-dim hover:text-ink"
          >
            Go to Staking
          </a>
          <a
            href="/security"
            className="inline-flex items-center gap-2 rounded-md border border-surface-border px-4 py-2.5 text-[13px] text-ink-dim hover:text-ink"
          >
            Security Status
          </a>
        </div>

        <p className="mt-10 text-[11px] text-ink-faint">
          This dashboard does not buy, sell, transfer, or custody any token on your behalf.
          {TOKEN_CONFIG?.symbol ? ` ${TOKEN_CONFIG.symbol}` : ""} is not currently listed for
          public trading — see the Security and Roadmap pages for current, honest status.
        </p>
      </div>
    </div>
  );
}
