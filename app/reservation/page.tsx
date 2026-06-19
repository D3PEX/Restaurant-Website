import Image from "next/image";
import { ReservationForm } from "@/components/reservation/ReservationForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Бронирование",
  description: "Забронируйте столик в Aurora Bistro онлайн."
};

export default function ReservationPage() {
  return (
    <section className="section pt-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Бронирование" title="Подготовим вечер для вас" />
          <p className="mt-6 text-lg leading-8 text-ink/70">
            Заполните форму, и мы имитируем успешную отправку заявки. Для настоящего проекта сюда легко подключить CRM,
            email-уведомления или базу данных.
          </p>
          <div className="mt-8 overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1000&q=80"
              alt="Сервированный стол ресторана"
              width={1000}
              height={720}
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
        <ReservationForm />
      </div>
    </section>
  );
}
