import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Для какого возраста подходит программа?",
    answer:
      "Буквоёжка создана для учеников 1–4 классов (6–10 лет). Задания подбираются автоматически в зависимости от класса и уровня ребёнка.",
  },
  {
    question: "Сколько времени нужно заниматься в день?",
    answer:
      "Рекомендуемая продолжительность — 15 минут в день. Этого достаточно для заметного прогресса без перегрузки. Ребёнок может заниматься и дольше, если хочет.",
  },
  {
    question: "Соответствует ли программа школьной программе?",
    answer:
      "Да, все задания разработаны в соответствии с ФГОС для начальной школы. Программа дополняет школьные уроки и помогает закрепить пройденный материал.",
  },
  {
    question: "Можно ли заниматься с телефона или планшета?",
    answer:
      "Да, Буквоёжка работает на любом устройстве: компьютер, планшет, телефон. Нужен только интернет и браузер. Устанавливать ничего не нужно.",
  },
  {
    question: "Как я увижу прогресс ребёнка?",
    answer:
      "В личном кабинете родителя есть подробные отчёты: какие темы освоены, где есть пробелы, сколько заданий выполнено. Еженедельно приходит сводка на email.",
  },
  {
    question: "Можно ли отменить подписку?",
    answer:
      "Конечно, подписку можно отменить в любой момент без штрафов. Пробный период полностью бесплатный и не требует привязки карты.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-12"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">FAQ</div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center">
            Частые вопросы
          </h2>
          <p className="text-center mt-5 text-muted-foreground">Всё, что хотят знать родители перед стартом.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
