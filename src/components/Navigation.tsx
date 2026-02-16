import { ShinyButton } from "@/components/ui/shiny-button"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-bold font-display flex items-center gap-2">
              <Icon name="BookOpen" size={24} className="text-primary" />
              Буквоёжка
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Преимущества
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Тарифы
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                О программе
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShinyButton variant="secondary" className="hidden sm:inline-flex">
              Войти
            </ShinyButton>
            <ShinyButton>Попробовать</ShinyButton>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
