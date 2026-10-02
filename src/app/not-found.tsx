// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center selection:bg-amber-400/30 text-zinc-50 font-sans">
      <h1 className="text-6xl font-bold text-amber-400">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Stránka sa nenašla</h2>
      <p className="mt-2 text-zinc-400 max-w-md">
        Adresa, ktorú hľadáte, neexistuje alebo bola presunutá.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-amber-400/10 px-5 py-2.5 text-sm font-medium text-amber-300 border border-amber-400/20 transition-colors hover:bg-amber-400/20"
      >
        Späť na hlavnú stránku
      </Link>
    </main>
  );
}
