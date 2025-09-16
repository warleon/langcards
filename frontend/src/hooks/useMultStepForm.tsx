import { ReactElement, useState } from 'react'

export function useMultistepForm(stages: ReactElement[], initialStep: number = 0) {
  const [currentStepIndex, setCurrentStepIndex] = useState(initialStep)

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= stages.length) return i
      return i + 1
    })
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  return {
    step: currentStepIndex,
    stage: stages[currentStepIndex],
    stages,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === stages.length - 1,
    goTo,
    next,
    back,
  }
}
