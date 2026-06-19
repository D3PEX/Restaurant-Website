"use client";

import Link from "next/link";

export default function ErrorPage({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 pt-24">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">Ошибка</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold">Что-то пошло не так</h1>
        <p className="mt-5 leading-7 text-ink/68">Попробуйте обновить страницу или вернуться на главную.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={reset} className="rounded-full bg-ink px-6 py-3 font-semibold text-white">
            Повторить
          </button>
          <Link href="/" className="rounded-full border border-ink/15 px-6 py-3 font-semibold">
            На главную
          </Link>
        </div>
      </div>
    </section>
  );
}
