import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  centered?: boolean;
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, centered = false, dark = false }: SectionHeadingProps) {
  return (
    <div className={clsx(centered && "text-center")}>
      <p className={clsx("text-sm font-semibold uppercase tracking-[0.3em]", dark ? "text-gold" : "text-terracotta")}>
        {eyebrow}
      </p>
      <h2 className={clsx("mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl", dark ? "text-white" : "text-ink")}>
        {title}
      </h2>
    </div>
  );
}
