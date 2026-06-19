import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 pt-24">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">404</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold">Страница не найдена</h1>
        <p className="mt-5 leading-7 text-ink/68">
          Похоже, этот столик уже занят. Вернитесь на главную или откройте меню.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="rounded-full bg-ink px-6 py-3 font-semibold text-white">
            На главную
          </Link>
          <Link href="/menu" className="rounded-full border border-ink/15 px-6 py-3 font-semibold">
            Открыть меню
          </Link>
        </div>
      </div>
    </section>
  );
}
