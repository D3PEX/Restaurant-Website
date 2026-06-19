import { Award, Clock, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";

const gallery = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
];

const benefits = [
  { icon: Leaf, title: "Сезонные продукты", text: "Меню обновляется вместе с лучшими локальными ингредиентами." },
  { icon: Sparkles, title: "Авторская подача", text: "Каждое блюдо продумано шефом как маленькая история." },
  { icon: Clock, title: "Уют без спешки", text: "Идеальный темп сервиса для деловых встреч и вечерних ужинов." },
  { icon: Award, title: "Премиальный опыт", text: "Винная карта, десерты и сервис собраны в цельное впечатление." }
];

const testimonials = [
  {
    name: "Мария К.",
    text: "Очень красивая подача, спокойная атмосфера и безупречные десерты. Вернемся еще."
  },
  {
    name: "Алексей В.",
    text: "Лучшее место для ужина после рабочей недели. Меню небольшое, но каждое блюдо точное."
  },
  {
    name: "Наталья С.",
    text: "Бронировали столик на годовщину. Команда сделала вечер теплым и очень личным."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden px-4 pt-28 text-white md:px-6">
        <Image
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=85"
          alt="Интерьер ресторана Aurora Bistro"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
        <div className="relative mx-auto flex min-h-[76vh] max-w-7xl flex-col justify-center">
          <p className="reveal mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold">
            Авторская кухня
          </p>
          <h1 className="reveal reveal-delay-1 max-w-4xl font-serif text-5xl font-semibold leading-tight md:text-7xl">
            Aurora Bistro
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/88 md:text-2xl">
            Вечера с сезонным меню, мягким светом и блюдами, ради которых хочется замедлиться.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/menu" className="rounded-full bg-gold px-7 py-4 text-center font-semibold text-ink transition hover:bg-white">
              Посмотреть меню
            </Link>
            <Link
              href="/reservation"
              className="rounded-full border border-white/70 px-7 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Забронировать столик
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="reveal overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80"
              alt="Шеф готовит блюдо"
              width={1000}
              height={720}
              className="h-[520px] w-full object-cover"
            />
          </div>
          <div className="reveal reveal-delay-1">
            <SectionHeading eyebrow="О нас" title="Ресторан для внимательных ужинов" />
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Aurora Bistro соединяет современную европейскую кухню, локальные продукты и камерную атмосферу. Мы
              готовим меню вокруг сезона, выбираем чистые вкусы и оставляем достаточно пространства для разговора.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["12 лет опыта", "48 вин", "5 сезонов меню"].map((item) => (
                <div key={item} className="rounded-2xl border border-ink/10 bg-white/70 p-5">
                  <p className="font-semibold text-terracotta">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/70 px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Преимущества" title="Почему гости выбирают нас" centered />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="reveal rounded-3xl border border-ink/10 bg-cream p-7 shadow-sm"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <benefit.icon className="h-9 w-9 text-terracotta" />
                <h3 className="mt-5 text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Галерея" title="Атмосфера Aurora Bistro" centered />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {gallery.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt={`Фотография ресторана ${index + 1}`}
                width={900}
                height={720}
                className="reveal h-80 w-full rounded-3xl object-cover shadow-soft md:even:mt-10"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Отзывы" title="Что говорят гости" centered dark />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="rounded-3xl border border-white/10 bg-white/8 p-7">
                <p className="leading-8 text-white/78">&ldquo;{review.text}&rdquo;</p>
                <p className="mt-6 font-semibold text-gold">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Блог" title="Истории кухни" centered />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-terracotta px-6 py-14 text-center text-white shadow-soft md:px-16">
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">Забронируйте лучший столик вечера</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/82">
            Оставьте заявку, и мы подготовим стол, который подойдет под ваш повод и настроение.
          </p>
          <Link href="/reservation" className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-cream">
            Забронировать столик
          </Link>
        </div>
      </section>
    </>
  );
}
