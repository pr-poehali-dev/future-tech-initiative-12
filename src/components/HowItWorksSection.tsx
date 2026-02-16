import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function HowItWorksSection() {
  const steps = [
    {
      icon: "UserPlus",
      title: "Зарегистрируйтесь",
      description:
        "Создайте аккаунт за 1 минуту. Укажите класс ребёнка — и программа автоматически подберёт подходящие задания по уровню.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Профиль ученика</p>
                    <p className="text-sm text-muted-foreground">2 класс</p>
                  </div>
                </div>
                <span className="text-2xl">📚</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Уровень</span>
                  <span className="text-sm font-medium text-primary">Начинающий грамотей</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Звёздочки</span>
                  <span className="text-sm font-medium">⭐ 0</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      icon: "Pencil",
      title: "Ребёнок занимается",
      description:
        "Каждый день — новые задания: вставить букву, собрать слово, найти ошибку. Всё в формате игры с персонажем-помощником.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="Pencil" size={20} className="text-primary" />
                  <span className="text-sm font-semibold">Задание дня</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-500">
                  <Icon name="Timer" size={12} />
                  <span>5 мин</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">Правописание «жи-ши»</p>
                    <p className="text-xs text-muted-foreground">5 из 5 правильно</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">Собери слово из букв</p>
                    <p className="text-xs text-muted-foreground">3 из 3 собрано</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-primary/10">
                <p className="text-xs text-muted-foreground">
                  Заработано сегодня: <span className="text-primary font-semibold">⭐ 25 звёздочек</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      icon: "TrendingUp",
      title: "Видите результат",
      description:
        "Отслеживайте прогресс в личном кабинете. Еженедельные отчёты покажут, какие темы освоены, а что стоит повторить.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="BarChart3" size={20} className="text-primary" />
                  <span className="text-sm font-semibold">Прогресс за месяц</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-500">
                  <Icon name="ArrowUpRight" size={12} />
                  <span>+32%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Орфография</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-primary rounded-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Пунктуация</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-primary rounded-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Развитие речи</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-primary rounded-full" />
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-primary/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Заданий выполнено</p>
                  <p className="text-lg font-bold text-primary">247</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Дней подряд</p>
                  <p className="text-lg font-bold text-primary">18</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Как это работает</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Три простых шага — и ваш ребёнок уже учится с удовольствием
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-6">{step.visual}</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={step.icon} size={20} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary">Шаг {index + 1}</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
