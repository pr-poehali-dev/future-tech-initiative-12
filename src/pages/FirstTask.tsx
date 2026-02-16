import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"

interface WordItem {
  word: string
  hasError: boolean
  correct: string
}

const rounds: WordItem[][] = [
  [
    { word: "Машына", hasError: true, correct: "Машина" },
    { word: "Зима", hasError: false, correct: "Зима" },
    { word: "Щюка", hasError: true, correct: "Щука" },
    { word: "Чашка", hasError: false, correct: "Чашка" },
    { word: "Жыраф", hasError: true, correct: "Жираф" },
    { word: "Роща", hasError: false, correct: "Роща" },
  ],
  [
    { word: "Чяйник", hasError: true, correct: "Чайник" },
    { word: "Лыжи", hasError: false, correct: "Лыжи" },
    { word: "Щявель", hasError: true, correct: "Щавель" },
    { word: "Пружина", hasError: false, correct: "Пружина" },
    { word: "Чюдо", hasError: true, correct: "Чудо" },
    { word: "Шишка", hasError: false, correct: "Шишка" },
  ],
  [
    { word: "Карандаш", hasError: false, correct: "Карандаш" },
    { word: "Малыш", hasError: false, correct: "Малыш" },
    { word: "Чящя", hasError: true, correct: "Чаща" },
    { word: "Снежынка", hasError: true, correct: "Снежинка" },
    { word: "Удача", hasError: false, correct: "Удача" },
    { word: "Шыло", hasError: true, correct: "Шило" },
  ],
]

export default function FirstTask() {
  const navigate = useNavigate()
  const [currentRound, setCurrentRound] = useState(0)
  const [selected, setSelected] = useState<Record<number, boolean>>({})
  const [showResult, setShowResult] = useState(false)
  const [stars, setStars] = useState(0)
  const [finished, setFinished] = useState(false)

  const words = rounds[currentRound]

  const handleWordClick = useCallback(
    (index: number) => {
      if (showResult) return
      setSelected((prev) => {
        const next = { ...prev }
        if (next[index]) {
          delete next[index]
        } else {
          next[index] = true
        }
        return next
      })
    },
    [showResult]
  )

  const handleCheck = () => {
    setShowResult(true)
    let correct = 0
    words.forEach((w, i) => {
      const isSelected = !!selected[i]
      if (w.hasError && isSelected) correct++
      if (!w.hasError && !isSelected) correct++
    })
    const earned = Math.round((correct / words.length) * 10)
    setStars((prev) => prev + earned)
  }

  const handleNext = () => {
    if (currentRound < rounds.length - 1) {
      setCurrentRound((prev) => prev + 1)
      setSelected({})
      setShowResult(false)
    } else {
      setFinished(true)
    }
  }

  const getWordState = (index: number) => {
    if (!showResult) {
      return selected[index] ? "selected" : "default"
    }
    const w = words[index]
    const isSelected = !!selected[index]
    if (w.hasError && isSelected) return "correct"
    if (!w.hasError && !isSelected) return "correct"
    if (w.hasError && !isSelected) return "missed"
    return "wrong"
  }

  const stateStyles: Record<string, string> = {
    default: "bg-card border-border hover:border-primary/50 hover:shadow-md cursor-pointer",
    selected: "bg-primary/10 border-primary shadow-md cursor-pointer ring-2 ring-primary/30",
    correct: "bg-green-50 border-green-400 dark:bg-green-950/30",
    wrong: "bg-red-50 border-red-400 dark:bg-red-950/30",
    missed: "bg-amber-50 border-amber-400 dark:bg-amber-950/30",
  }

  if (finished) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Card className="max-w-md w-full p-8 text-center">
            <motion.div
              initial={{ rotate: -10, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <h2 className="text-3xl font-bold font-display mb-2">Отлично!</h2>
            <p className="text-muted-foreground mb-6">
              Ты прошёл первое задание и заработал
            </p>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary mb-8">
              <Icon name="Star" size={28} className="text-amber-400 fill-amber-400" />
              {stars} звёздочек
            </div>
            <div className="space-y-3">
              <Button onClick={() => navigate("/")} variant="outline" className="w-full">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                На главную
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              <span className="text-sm">На главную</span>
            </button>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Icon name="Star" size={18} className="text-amber-400 fill-amber-400" />
              <span>{stars}</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-2xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Задание {currentRound + 1} из {rounds.length}
          </span>
          <div className="flex gap-1.5">
            {rounds.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i < currentRound
                    ? "w-8 bg-primary"
                    : i === currentRound
                      ? "w-8 bg-primary/60"
                      : "w-2 bg-muted-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="p-6 sm:p-8 mb-6">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📝</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-display mb-1">
                  Найди ошибки в словах
                </h1>
                <p className="text-muted-foreground text-sm">
                  Нажми на слова, в которых есть ошибка. Потом проверь себя!
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentRound}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {words.map((w, i) => {
                  const state = getWordState(i)
                  return (
                    <motion.button
                      key={`${currentRound}-${i}`}
                      onClick={() => handleWordClick(i)}
                      whileHover={!showResult ? { scale: 1.03 } : {}}
                      whileTap={!showResult ? { scale: 0.97 } : {}}
                      className={`relative p-4 rounded-xl border-2 text-center transition-all duration-200 ${stateStyles[state]}`}
                    >
                      <span className="text-lg font-semibold font-display">{w.word}</span>
                      {showResult && state === "correct" && w.hasError && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-green-600 dark:text-green-400 mt-1"
                        >
                          → {w.correct}
                        </motion.div>
                      )}
                      {showResult && state === "missed" && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-amber-600 dark:text-amber-400 mt-1"
                        >
                          → {w.correct}
                        </motion.div>
                      )}
                      {showResult && state === "wrong" && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-red-600 dark:text-red-400 mt-1"
                        >
                          Ошибки нет
                        </motion.div>
                      )}
                      {showResult && state === "correct" && !w.hasError && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute -top-1.5 -right-1.5"
                        >
                          <Icon name="CheckCircle2" size={18} className="text-green-500" />
                        </motion.div>
                      )}
                      {showResult && state === "correct" && w.hasError && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute -top-1.5 -right-1.5"
                        >
                          <Icon name="CheckCircle2" size={18} className="text-green-500" />
                        </motion.div>
                      )}
                    </motion.button>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </Card>

          <div className="flex justify-center">
            {!showResult ? (
              <Button
                size="lg"
                onClick={handleCheck}
                disabled={Object.keys(selected).length === 0}
                className="px-8"
              >
                <Icon name="CheckCircle2" size={18} className="mr-2" />
                Проверить
              </Button>
            ) : (
              <Button size="lg" onClick={handleNext} className="px-8">
                {currentRound < rounds.length - 1 ? (
                  <>
                    Дальше
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </>
                ) : (
                  <>
                    Завершить
                    <Icon name="Star" size={18} className="ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
