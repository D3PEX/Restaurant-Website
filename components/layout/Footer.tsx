import { Facebook, Instagram, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-14 text-white md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-serif text-3xl font-semibold">
            Aurora Bistro
          </Link>
          <p className="mt-4 max-w-md leading-7 text-white/65">
            Современная авторская кухня, сезонные продукты и мягкая атмосфера для важных вечеров.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Контакты</h3>
          <div className="mt-4 space-y-3 text-white/70">
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              Vienna, Ringstrasse 18
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              +43 660 123 45 67
            </p>
            <p className="flex items-center gap-3">
              <Send className="h-5 w-5" />
              hello@aurorabistro.example
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Социальные сети</h3>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com" aria-label="Instagram" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-8 text-sm text-white/45">© 2026 Aurora Bistro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
