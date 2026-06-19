"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z.string().min(7, "Укажите телефон"),
  email: z.string().email("Укажите корректный email"),
  guests: z.coerce.number().min(1, "Минимум 1 гость").max(12, "Для групп больше 12 гостей позвоните нам"),
  date: z.string().min(1, "Выберите дату"),
  time: z.string().min(1, "Выберите время"),
  comment: z.string().max(500, "Комментарий слишком длинный").optional()
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const fieldClass =
  "h-14 w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3 outline-none transition focus:border-terracotta";

export function ReservationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: 2
    }
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 550));
    setIsSubmitted(true);
    reset({ guests: 2 });
  };

  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft md:p-8">
      {isSubmitted ? (
        <div className="mb-6 rounded-3xl border border-olive/25 bg-olive/10 p-5 text-olive">
          <p className="flex items-center gap-3 font-semibold">
            <CheckCircle2 className="h-6 w-6" />
            Заявка успешно отправлена
          </p>
          <p className="mt-2 text-sm text-ink/62">Мы имитировали отправку через локальное состояние формы.</p>
        </div>
      ) : null}

      <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Имя" error={errors.name?.message}>
            <input {...register("name")} className={fieldClass} placeholder="Анна" />
          </Field>
          <Field label="Телефон" error={errors.phone?.message}>
            <input {...register("phone")} className={fieldClass} placeholder="+43 660 123 45 67" />
          </Field>
        </div>

        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" className={fieldClass} placeholder="name@example.com" />
        </Field>

        <div className="grid gap-5 md:grid-cols-3">
          <Field label="Гости" error={errors.guests?.message}>
            <input {...register("guests")} type="number" min="1" max="12" className={fieldClass} />
          </Field>
          <Field label="Дата" error={errors.date?.message}>
            <input {...register("date")} type="date" className={fieldClass} />
          </Field>
          <Field label="Время" error={errors.time?.message}>
            <input {...register("time")} type="time" className={fieldClass} />
          </Field>
        </div>

        <Field label="Комментарий" error={errors.comment?.message}>
          <textarea
            {...register("comment")}
            rows={5}
            className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3 outline-none transition focus:border-terracotta"
            placeholder="Повод, пожелания по столику или аллергии"
          />
        </Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-terracotta px-7 py-4 font-semibold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Отправляем..." : "Отправить бронирование"}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink/75">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm font-semibold text-terracotta">{error}</span> : null}
    </label>
  );
}
