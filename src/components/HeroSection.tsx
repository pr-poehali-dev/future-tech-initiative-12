import { ShinyButton } from "@/components/ui/shiny-button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(34 197 94 / 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(34 197 94 / 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 font-display">
            Русский язык — легко и увлекательно для вашего ребёнка
          </h1>

          <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed max-w-xl">
            Развивающая программа для учеников 1–4 классов. Интерактивные задания, игровой подход и видимый прогресс —
            ребёнок полюбит русский язык и станет грамотнее за первые недели занятий.
          </p>

          <ShinyButton className="text-base px-8" onClick={() => navigate("/task")}>
            Начать бесплатно
            <ArrowRight className="ml-2 h-4 w-4" />
          </ShinyButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="space-y-4">
            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-muted-foreground">Ученик</span>
              <div className="bg-card border border-border rounded-2xl px-6 py-4 max-w-md shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">😊</span>
                  </div>
                  <p className="text-sm text-foreground">Как правильно: «жи-ши» пишу с буквой «и»?</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-muted-foreground">Буквоёжка</span>
              <div className="bg-primary text-primary-foreground rounded-2xl px-6 py-4 max-w-md shadow-sm">
                <p className="text-sm">Верно! Молодец! 🌟 Ты заработал 10 звёздочек за правильный ответ</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-muted-foreground">Буквоёжка</span>
              <div className="bg-card border border-border rounded-2xl px-6 py-4 max-w-md shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">📝</span>
                  </div>
                  <p className="text-sm text-foreground">Следующее задание: вставь пропущенную букву — «ч_шка»</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-muted-foreground">Ученик</span>
              <div className="bg-card border border-border rounded-2xl px-6 py-4 max-w-md shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✍️</span>
                  </div>
                  <p className="text-sm text-foreground">Чашка! Это легко! 😄</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}