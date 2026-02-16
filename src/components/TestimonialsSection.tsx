import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Дочка сама просит «позаниматься в Буквоёжке» после школы. За два месяца подтянула орфографию — учительница хвалит!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Ольга Смирнова",
    role: "Мама ученицы 2 класса",
  },
  {
    text: "Сын раньше ненавидел диктанты. Сейчас ошибок стало в три раза меньше. Программа реально работает.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Алексей Козлов",
    role: "Папа ученика 3 класса",
  },
  {
    text: "Как педагог начальных классов, рекомендую Буквоёжку родителям. Задания грамотно составлены и соответствуют ФГОС.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Елена Васильева",
    role: "Учитель начальных классов",
  },
  {
    text: "Нравится, что занятие занимает всего 15 минут. Ребёнок не устаёт, а результат видно уже через пару недель.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Мария Новикова",
    role: "Мама ученика 1 класса",
  },
  {
    text: "Купили подписку на год. Отличная система мотивации — внук собирает звёздочки и значки, а заодно учится грамотно писать.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Галина Петровна",
    role: "Бабушка ученика 2 класса",
  },
  {
    text: "Очень удобные отчёты для родителей. Сразу вижу, какие темы нужно повторить. Не нужно нанимать репетитора!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Дмитрий Белов",
    role: "Папа ученицы 4 класса",
  },
  {
    text: "Ребёнок занимается с планшета, я спокойно готовлю ужин. Задания безопасные, без рекламы и отвлечений.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Анна Морозова",
    role: "Мама ученика 1 класса",
  },
  {
    text: "Подготовились к ВПР без стресса. Дочка написала на отлично! Спасибо за системный подход.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Игорь Волков",
    role: "Папа ученицы 4 класса",
  },
  {
    text: "Использую как дополнение к урокам. Дети с удовольствием выполняют задания — для них это игра, а не домашка.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Татьяна Соколова",
    role: "Учитель начальных классов",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">Отзывы</div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center">
            Что говорят родители
          </h2>
          <p className="text-center mt-5 text-muted-foreground">Реальные истории наших учеников и их семей.</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
