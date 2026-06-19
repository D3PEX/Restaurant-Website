import { notFound } from "next/navigation";
import { CalendarDays, UserRound } from "lucide-react";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Статья не найдена" };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-24">
      <header className="relative min-h-[64vh] overflow-hidden px-4 py-28 text-white md:px-6">
        <Image src={post.coverImage} alt={post.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Блог</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-6xl">{post.title}</h1>
          <div className="mt-7 flex flex-wrap gap-5 text-white/82">
            <span className="inline-flex items-center gap-2">
              <UserRound className="h-5 w-5" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              {post.date}
            </span>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        {post.content.map((paragraph) => (
          <p key={paragraph} className="mb-7 text-lg leading-9 text-ink/72">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
