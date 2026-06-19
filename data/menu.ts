export type MenuCategory = "Закуски" | "Салаты" | "Основные блюда" | "Десерты" | "Напитки";

export type MenuItem = {
  id: number;
  category: MenuCategory;
  name: string;
  description: string;
  price: string;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    category: "Закуски",
    name: "Тартар из говядины",
    description: "Мраморная говядина, каперсы, шалот, горчичный крем и хрустящий хлеб.",
    price: "18 €",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    category: "Закуски",
    name: "Брускетта с томатами",
    description: "Томаты черри, базилик, оливковое масло и выдержанный бальзамик.",
    price: "11 €",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    category: "Салаты",
    name: "Салат с бурратой",
    description: "Буррата, печеный перец, руккола, песто из фисташки и лимонная цедра.",
    price: "16 €",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    category: "Салаты",
    name: "Зеленый салат с авокадо",
    description: "Листья салата, авокадо, огурец, семечки и легкий цитрусовый соус.",
    price: "14 €",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    category: "Основные блюда",
    name: "Утиная грудка",
    description: "Утка medium, крем из сельдерея, ягодный соус и сезонные овощи.",
    price: "29 €",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    category: "Основные блюда",
    name: "Паста с трюфелем",
    description: "Домашняя паста, сливочный соус, пармезан и свежий черный трюфель.",
    price: "24 €",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    category: "Десерты",
    name: "Шоколадный фондан",
    description: "Теплый шоколадный кекс с жидким центром и ванильным мороженым.",
    price: "10 €",
    image: "https://images.unsplash.com/photo-1617305855058-336d24456869?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    category: "Десерты",
    name: "Лимонный тарт",
    description: "Песочная основа, лимонный крем, меренга и цедра лайма.",
    price: "9 €",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 9,
    category: "Напитки",
    name: "Домашний лимонад",
    description: "Лимон, мята, сезонные ягоды и газированная вода.",
    price: "6 €",
    image: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10,
    category: "Напитки",
    name: "Авторский кофе",
    description: "Эспрессо, сливочная текстура, карамельная нота и щепотка соли.",
    price: "5 €",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
  }
];
