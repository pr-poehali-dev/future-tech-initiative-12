import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ShinyButton } from "@/components/ui/shiny-button"

const pricingTiers = [
  {
    name: "Пробный",
    price: "0 ₽",
    period: "",
    description: "Попробуйте бесплатно — 7 дней полного доступа без ограничений",
    features: [
      "Все задания на 7 дней",
      "1 профиль ребёнка",
      "Отчёты для родителей",
      "Любой класс (1–4)",
      "Без привязки карты",
    ],
    cta: "Начать бесплатно",
    popular: false,
  },
  {
    name: "Стандарт",
    price: "490 ₽",
    period: "/мес",
    description: "Полный доступ ко всей программе для одного ребёнка",
    features: [
      "Все задания без ограничений",
      "1 профиль ребёнка",
      "Еженедельные отчёты",
      "Адаптивная сложность",
      "Система мотивации",
      "Подготовка к ВПР",
      "Поддержка в чате",
    ],
    cta: "Выбрать тариф",
    popular: true,
  },
  {
    name: "Семейный",
    price: "790 ₽",
    period: "/мес",
    description: "Для семей с несколькими детьми — до 3 профилей учеников",
    features: [
      "Все задания без ограничений",
      "До 3 профилей детей",
      "Индивидуальный прогресс",
      "Расширенная аналитика",
      "Рекомендации педагога",
      "Подготовка к ВПР",
      "Приоритетная поддержка",
      "Семейные задания",
    ],
    cta: "Выбрать тариф",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Доступные тарифы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Качественное образование не должно быть дорогим. Начните с бесплатного периода.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative p-8 h-full flex flex-col ${
                  tier.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground ml-2">{tier.period}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <ShinyButton className="w-full justify-center">{tier.cta}</ShinyButton>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
