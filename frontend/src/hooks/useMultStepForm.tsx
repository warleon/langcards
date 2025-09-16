//import React, { useCallback, useMemo, useState } from 'react'
//
//type StageType<
//  D extends object = object,
//  T extends { onUpdate: (data: D) => void } = { onUpdate: (data: D) => void },
//> = React.FC<T>
//interface Props<Stages extends StageType<object, any>[]> {
//  stages: Stages
//  onSubmit: (data: Partial<AccumulateData<Stages>>) => void
//  defaultValues?: Partial<AccumulateData<Stages>>
//}
//type ExtractData<T> = T extends StageType<infer D, any> ? D : never
//type AccumulateData<T extends readonly unknown[]> = T extends [infer Head, ...infer Tail]
//  ? ExtractData<Head> & AccumulateData<Tail>
//  : object
//
//export const useMultiStepForm = <T extends StageType<object, any>[]>({
//  stages,
//  onSubmit,
//  defaultValues,
//}: Props<T>) => {
//  const [data, setData] = useState<Partial<AccumulateData<T>>>(defaultValues ?? {})
//  const [currentStepIndex, setCurrentStepIndex] = useState(0)
//  const update = useCallback((d: Partial<AccumulateData<T>>) => {
//    setData((c) => ({ ...c, ...d }))
//  }, [])
//  const steps = useMemo(() => {
//    return stages.map((S, i) => <S key={i} onUpdate={update}></S>)
//  }, [stages, update])
//  const isFirstStep = useMemo(() => currentStepIndex === 0, [currentStepIndex])
//  const isLastStep = useMemo(
//    () => currentStepIndex === steps.length - 1,
//    [currentStepIndex, steps.length],
//  )
//  const step = useMemo(() => steps[currentStepIndex], [currentStepIndex, steps])
//  const finish = useCallback(() => {
//    if (!isLastStep) return
//    onSubmit(data)
//  }, [data, isLastStep, onSubmit])
//
//  function next() {
//    setCurrentStepIndex((i) => {
//      if (i >= steps.length - 1) return i
//      return i + 1
//    })
//  }
//
//  function back() {
//    setCurrentStepIndex((i) => {
//      if (i <= 0) return i
//      return i - 1
//    })
//  }
//
//  function goTo(index: number) {
//    setCurrentStepIndex(index)
//  }
//
//  return {
//    currentStepIndex,
//    steps,
//    isFirstStep,
//    isLastStep,
//    goTo,
//    next,
//    back,
//    finish,
//    data,
//    step,
//  }
//}
//

import { ReactElement, useState } from 'react'

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function next() {
    setCurrentStepIndex((i) => {
      console.log(`from ${i} go to next step`)
      if (i >= steps.length - 1) return i
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
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  }
}
