export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 pt-24">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-ink/10 border-t-terracotta" />
        <p className="mt-6 font-semibold text-ink/70">Загружаем атмосферу Aurora Bistro...</p>
      </div>
    </div>
  );
}
