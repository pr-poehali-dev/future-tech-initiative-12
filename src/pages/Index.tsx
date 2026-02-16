import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { SocialProof } from "@/components/SocialProof"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { FeaturesSlideshowSection } from "@/components/FeaturesSlideshowSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <HowItWorksSection />
        <FeaturesSlideshowSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Буквоёжка</h3>
              <p className="text-sm text-muted-foreground">
                Развивающая программа по русскому языку для учеников начальной школы.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Преимущества
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Методика
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Родителям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    О программе
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Отзывы
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Конфиденциальность
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Оферта
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            &copy; 2026 Буквоёжка. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}