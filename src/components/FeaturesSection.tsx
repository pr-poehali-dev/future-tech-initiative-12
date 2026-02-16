import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function FeaturesSection() {
  const features = [
    {
      icon: "Gamepad2",
      title: "Игровой формат",
      description: "Задания в виде квестов и мини-игр. Ребёнок учится, даже не замечая этого — как в любимой игре.",
    },
    {
      icon: "BarChart3",
      title: "Отчёты для родителей",
      description: "Видите прогресс ребёнка в реальном времени: оценки, слабые места и рекомендации по улучшению.",
    },
    {
      icon: "GraduationCap",
      title: "По школьной программе",
      description: "Все темы соответствуют ФГОС для 1–4 классов. Программа дополняет школу, а не заменяет её.",
    },
    {
      icon: "Brain",
      title: "Адаптивная сложность",
      description: "Система подстраивается под уровень ученика: если легко — усложняет, если трудно — помогает разобраться.",
    },
    {
      icon: "Star",
      title: "Мотивация и награды",
      description: "Звёздочки, значки и уровни за каждое достижение. Ребёнок сам хочет заниматься каждый день.",
    },
    {
      icon: "Clock",
      title: "15 минут в день",
      description: "Короткие ежедневные занятия, которые легко встроить в расписание — без перегрузки и усталости.",
    },
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32" id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-balance font-display">
          Почему дети любят Буквоёжку
        </h2>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
          Современный подход к изучению русского языка — увлекательно, эффективно и без слёз над учебниками.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={feature.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
