import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menuItems } from "@/data/menu";

export const metadata = {
  title: "Меню",
  description: "Меню Aurora Bistro: закуски, салаты, основные блюда, десерты и напитки."
};

export default function MenuPage() {
  return (
    <section className="section pt-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Меню" title="Сезонные блюда Aurora Bistro" centered />
        <p className="mx-auto mt-5 max-w-2xl text-center leading-7 text-ink/68">
          Выберите категорию или найдите блюдо по названию, составу и настроению.
        </p>
        <MenuExplorer items={menuItems} />
      </div>
    </section>
  );
}
