"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { clsx } from "clsx";
import type { MenuCategory, MenuItem } from "@/data/menu";

const categories: Array<MenuCategory | "Все"> = ["Все", "Закуски", "Салаты", "Основные блюда", "Десерты", "Напитки"];

type MenuExplorerProps = {
  items: MenuItem[];
};

export function MenuExplorer({ items }: MenuExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<MenuCategory | "Все">("Все");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesCategory = category === "Все" || item.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, items, query]);

  return (
    <div className="mt-12">
      <div className="grid gap-4 rounded-[2rem] border border-ink/10 bg-white/75 p-4 shadow-sm lg:grid-cols-[1fr_auto]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/42" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск по меню"
            className="h-14 w-full rounded-full border border-ink/10 bg-cream pl-12 pr-5 outline-none transition focus:border-terracotta"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={clsx(
                "rounded-full px-4 py-3 text-sm font-semibold transition",
                category === item ? "bg-ink text-white" : "bg-cream text-ink/68 hover:bg-gold/20"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <article key={item.id} className="reveal overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
            <Image src={item.image} alt={item.name} width={900} height={640} className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-terracotta">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{item.name}</h3>
                </div>
                <p className="rounded-full bg-gold/15 px-4 py-2 font-semibold text-terracotta">{item.price}</p>
              </div>
              <p className="mt-4 leading-7 text-ink/65">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-ink/10 bg-white p-10 text-center">
          <p className="font-semibold">Ничего не найдено</p>
          <p className="mt-2 text-ink/60">Попробуйте изменить категорию или поисковый запрос.</p>
        </div>
      ) : null}
    </div>
  );
}
