import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Блог",
  description: "Статьи Aurora Bistro о сезонной кухне, винах и ресторанной культуре."
};

export default function BlogPage() {
  return (
    <section className="section pt-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Блог" title="Заметки из кухни и зала" centered />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
