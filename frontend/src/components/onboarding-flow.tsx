'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Globe, Target, TrendingUp, X } from 'lucide-react'

interface Language {
  code: string
  name: string
  flag: string
}

interface UserLanguage extends Language {
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'native'
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
]

const PROFICIENCY_LEVELS = [
  { value: 'beginner', label: 'Beginner', description: 'Just starting out' },
  { value: 'intermediate', label: 'Intermediate', description: 'Can have conversations' },
  { value: 'advanced', label: 'Advanced', description: 'Fluent speaker' },
  { value: 'native', label: 'Native', description: 'Native speaker' },
] as const

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [knownLanguages, setKnownLanguages] = useState<UserLanguage[]>([])
  const [flippedLanguage, setFlippedLanguage] = useState<string | null>(null)
  const [languagesToLearn, setLanguagesToLearn] = useState<Language[]>([])
  const [wantsToImprove, setWantsToImprove] = useState<boolean | null>(null)

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleSelectProficiency = (
    language: Language,
    proficiency: UserLanguage['proficiency'],
  ) => {
    const newLanguage: UserLanguage = {
      ...language,
      proficiency,
    }
    setKnownLanguages([...knownLanguages, newLanguage])
    setFlippedLanguage(null) // Reset flipped state
  }

  const handleRemoveKnownLanguage = (languageCode: string) => {
    setKnownLanguages(knownLanguages.filter((lang) => lang.code !== languageCode))
  }

  const handleLanguageCardClick = (language: Language) => {
    setFlippedLanguage(flippedLanguage === language.code ? null : language.code)
  }

  const handleCancelProficiency = () => {
    setFlippedLanguage(null)
  }

  const handleToggleLanguageToLearn = (language: Language) => {
    const isSelected = languagesToLearn.some((lang) => lang.code === language.code)
    if (isSelected) {
      setLanguagesToLearn(languagesToLearn.filter((lang) => lang.code !== language.code))
    } else {
      setLanguagesToLearn([...languagesToLearn, language])
    }
  }

  const availableLanguages = LANGUAGES.filter(
    (lang) => !knownLanguages.some((known) => known.code === lang.code),
  )

  const canProceedStep1 = knownLanguages.length > 0
  const canProceedStep2 = languagesToLearn.length > 0
  const canProceedStep3 = wantsToImprove !== null

  const renderStep1 = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <Globe className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-balance">
          What languages do you already know?
        </CardTitle>
        <CardDescription className="text-lg text-pretty">
          Tell us about your current language skills so we can personalize your learning experience.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Select a language you know</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {availableLanguages.map((language) => (
              <div key={language.code} className="relative h-24 perspective-1000">
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                    flippedLanguage === language.code ? 'rotate-y-180' : ''
                  }`}
                >
                  <div className="absolute inset-0 backface-hidden">
                    <Button
                      variant="outline"
                      className="w-full h-full flex flex-col items-center justify-center gap-2 hover:bg-primary/5 bg-transparent"
                      onClick={() => handleLanguageCardClick(language)}
                    >
                      <span className="text-2xl">{language.flag}</span>
                      <span className="text-sm">{language.name}</span>
                    </Button>
                  </div>

                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <Card className="w-full h-full border-primary/20 bg-primary/5">
                      <CardContent className="p-2 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium">{language.name}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 hover:bg-destructive/10"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleCancelProficiency()
                            }}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          {PROFICIENCY_LEVELS.map((level) => (
                            <Button
                              key={level.value}
                              variant="ghost"
                              size="sm"
                              className="h-auto p-1 text-xs hover:bg-primary/10"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleSelectProficiency(language, level.value)
                              }}
                            >
                              {level.label}
                            </Button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {knownLanguages.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Your languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {knownLanguages.map((language) => (
                <Card key={language.code} className="relative border-primary/20 bg-primary/5">
                  <CardContent className="p-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-1 right-1 h-6 w-6 p-0 hover:bg-destructive/10"
                      onClick={() => handleRemoveKnownLanguage(language.code)}
                    >
                      <X className="h-3 w-3 text-destructive" />
                    </Button>
                    <div className="flex flex-col items-center gap-2 pt-2">
                      <span className="text-xl">{language.flag}</span>
                      <div className="text-center">
                        <div className="text-sm font-medium">{language.name}</div>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {PROFICIENCY_LEVELS.find((p) => p.value === language.proficiency)?.label}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )

  const renderStep2 = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <Target className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-balance">
          What languages would you like to learn?
        </CardTitle>
        <CardDescription className="text-lg text-pretty">
          Choose the languages you&apos;re excited to start learning. You can always add more later!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {availableLanguages.map((language) => {
            const isSelected = languagesToLearn.some((lang) => lang.code === language.code)
            return (
              <Button
                key={language.code}
                variant={isSelected ? 'default' : 'outline'}
                className="h-auto p-4 flex flex-col items-center gap-2 relative"
                onClick={() => handleToggleLanguageToLearn(language)}
              >
                {isSelected && (
                  <CheckCircle className="absolute top-2 right-2 h-4 w-4 text-primary-foreground" />
                )}
                <span className="text-2xl">{language.flag}</span>
                <span className="text-sm">{language.name}</span>
              </Button>
            )
          })}
        </div>

        {languagesToLearn.length > 0 && (
          <div className="mt-6 p-4 bg-card rounded-lg">
            <h3 className="font-semibold mb-2">Selected languages to learn:</h3>
            <div className="flex flex-wrap gap-2">
              {languagesToLearn.map((language) => (
                <Badge key={language.code} variant="default" className="text-sm">
                  {language.flag} {language.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )

  const renderStep3 = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <TrendingUp className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-balance">
          Want to improve your existing languages?
        </CardTitle>
        <CardDescription className="text-lg text-pretty">
          We can help you get even better at the languages you already know.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <Button
              variant={wantsToImprove === true ? 'default' : 'outline'}
              className="h-auto p-6 flex flex-col items-center gap-3"
              onClick={() => setWantsToImprove(true)}
            >
              <CheckCircle className="h-8 w-8" />
              <div className="text-center">
                <div className="font-semibold">Yes, help me improve!</div>
                <div className="text-sm text-muted-foreground">
                  I want to get better at languages I already know
                </div>
              </div>
            </Button>

            <Button
              variant={wantsToImprove === false ? 'default' : 'outline'}
              className="h-auto p-6 flex flex-col items-center gap-3"
              onClick={() => setWantsToImprove(false)}
            >
              <Target className="h-8 w-8" />
              <div className="text-center">
                <div className="font-semibold">Focus on new languages</div>
                <div className="text-sm text-muted-foreground">
                  I want to focus only on learning new languages
                </div>
              </div>
            </Button>
          </div>

          {knownLanguages.length > 0 && (
            <div className="mt-6 p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Your current languages:</h3>
              <div className="flex flex-wrap gap-2">
                {knownLanguages.map((language) => (
                  <Badge key={language.code} variant="secondary" className="text-sm">
                    {language.flag} {language.name} (
                    {PROFICIENCY_LEVELS.find((p) => p.value === language.proficiency)?.label})
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )

  const renderStep4 = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-balance">
          Perfect! You&apos;re all set up!
        </CardTitle>
        <CardDescription className="text-lg text-pretty">
          Here&apos;s a summary of your language learning journey.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Languages you know ({knownLanguages.length})
          </h3>
          <div className="grid gap-2">
            {knownLanguages.map((language) => (
              <div key={language.code} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                <span className="text-xl">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                <Badge variant="secondary">
                  {PROFICIENCY_LEVELS.find((p) => p.value === language.proficiency)?.label}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Languages to learn ({languagesToLearn.length})
          </h3>
          <div className="grid gap-2">
            {languagesToLearn.map((language) => (
              <div key={language.code} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                <span className="text-xl">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                <Badge variant="outline">New language</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Improvement preference
          </h3>
          <div className="p-3 bg-card rounded-lg">
            <span className="font-medium">
              {wantsToImprove
                ? '✅ Also wants to improve existing languages'
                : '🎯 Focus only on learning new languages'}
            </span>
          </div>
        </div>

        <Button className="w-full" size="lg">
          Start Learning Journey
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(progress)}% complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="mb-8">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>

        {currentStep < 4 && (
          <div className="flex justify-between max-w-2xl mx-auto">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={
                (currentStep === 1 && !canProceedStep1) ||
                (currentStep === 2 && !canProceedStep2) ||
                (currentStep === 3 && !canProceedStep3)
              }
            >
              {currentStep === 3 ? 'Finish Setup' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
