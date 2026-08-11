import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-32 text-center">
      <p className="font-mono text-[12px] uppercase tracking-wider text-ink-faint">404</p>
      <h1 className="mt-3 text-2xl font-medium text-ink">This coordinate doesn't exist.</h1>
      <p className="mt-2 text-[13.5px] text-ink-dim">The page you're looking for has moved or was never here.</p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </div>
  );
}
