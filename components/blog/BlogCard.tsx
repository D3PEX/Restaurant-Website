import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="reveal overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/blog/${post.slug}`} aria-label={`Открыть статью ${post.title}`}>
        <Image src={post.image} alt={post.title} width={900} height={640} className="h-64 w-full object-cover" />
        <div className="p-6">
          <p className="flex items-center gap-2 text-sm font-semibold text-terracotta">
            <CalendarDays className="h-4 w-4" />
            {post.date}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight">{post.title}</h3>
          <p className="mt-4 leading-7 text-ink/65">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
