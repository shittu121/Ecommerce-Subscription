"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { LucideIcon } from "lucide-react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export interface Testimonial {
  id: number
  name: string
  role: string
  company?: string
  content: string
  rating: number
  avatar: string
}

export interface Feature {
  text: string
}

export interface Benefit {
  text: string
  icon: LucideIcon
}

export interface PricingOption {
  monthly: string
  annual: string
  originalMonthly?: string
  originalAnnual?: string
}

export interface PlanData {
  // Header content
  badge?: {
    text: string
  }
  title: string
  subtitle: string

  // Pricing info
  price: PricingOption

  // Benefits
  benefits: Benefit[]

  // Features
  features: Feature[]
  featuresIcon: LucideIcon
  featuresTitle?: string
  featuresBadge?: {
    icon: LucideIcon
    text: string
  }

  // Buttons
  primaryButton: {
    text: string
    icon: LucideIcon
    href?: string
    onClick?: () => void
    chevronIcon?: LucideIcon
  }
  secondaryButton?: {
    text: string
    icon: LucideIcon
    href?: string
    onClick?: () => void
  }

  // Testimonials
  testimonials: Testimonial[]

  includes?: {
    img: string
    text: string
    className: string
  }[]

  extra?: {
    extratitle: string
    extradescription: string
  }[]
}

export interface EnhancedPricingCardProps {
  // Plans data
  plans: PlanData[] // Array of plans (Pro, Premium, etc.)
  defaultPlanIndex?: number // Which plan to show by default (0 = Pro, 1 = Premium)
  
  // Pricing toggle
  showAnnualDiscount?: boolean
  annualDiscountText?: string
  annualDiscountBadgeClassName?: string
  
  // Testimonials
  testimonialRotationSpeed?: number // in milliseconds

  // Animation
  animationEnabled?: boolean

  // Additional styling
  className?: string
  cardClassName?: string
  maxWidth?: string
}

export function EnhancedPricingCard({
  plans,
  defaultPlanIndex = 0,
  showAnnualDiscount = true,
  annualDiscountText = "Save 20%",
  annualDiscountBadgeClassName,
  testimonialRotationSpeed = 5000,
  animationEnabled = true,
  className,
  cardClassName,
  maxWidth = "max-w-4xl",
}: EnhancedPricingCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [isAnnual, setIsAnnual] = useState(false)
  const [currentPlanIndex, setCurrentPlanIndex] = useState(defaultPlanIndex)

  const currentPlan = plans[currentPlanIndex]

  // Auto-rotate testimonials
  useEffect(() => {
    if (currentPlan.testimonials.length <= 1) return

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % currentPlan.testimonials.length)
    }, testimonialRotationSpeed)

    return () => clearInterval(interval)
  }, [currentPlan.testimonials.length, testimonialRotationSpeed])

  // Reset testimonial index when plan changes
  useEffect(() => {
    setCurrentTestimonialIndex(0)
  }, [currentPlanIndex])

  const nextPlan = () => {
    setCurrentPlanIndex((prev) => (prev + 1) % plans.length)
  }

  const prevPlan = () => {
    setCurrentPlanIndex((prev) => (prev - 1 + plans.length) % plans.length)
  }

  const getCurrentPrice = () => {
    return isAnnual ? currentPlan.price.annual : currentPlan.price.monthly
  }

  const getOriginalPrice = () => {
    return isAnnual ? currentPlan.price.originalAnnual : currentPlan.price.originalMonthly
  }


  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className || ""}`}>
      <div className={`container relative z-10 mx-auto ${maxWidth}`}>
        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4 p-1 bg-muted rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              {showAnnualDiscount && (
                <Badge 
                  variant="outline" 
                  className={`text-xs border-green-400/30 text-green-500 ${annualDiscountBadgeClassName || ""}`}
                >
                  {annualDiscountText}
                </Badge>
              )}
            </button>
          </div>
        </div>

        {animationEnabled ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <PricingCardContent
              plan={currentPlan}
              currentPrice={getCurrentPrice()}
              originalPrice={getOriginalPrice()}
              isAnnual={isAnnual}
              currentTestimonialIndex={currentTestimonialIndex}
              isInView={isInView}
              animationEnabled={animationEnabled}
              cardClassName={cardClassName}
              setCurrentTestimonialIndex={setCurrentTestimonialIndex}
              plans={plans}
              currentPlanIndex={currentPlanIndex}
              nextPlan={nextPlan}
              prevPlan={prevPlan}
            />
          </motion.div>
        ) : (
          <PricingCardContent
            plan={currentPlan}
            currentPrice={getCurrentPrice()}
            originalPrice={getOriginalPrice()}
            isAnnual={isAnnual}
            currentTestimonialIndex={currentTestimonialIndex}
            isInView={isInView}
            animationEnabled={animationEnabled}
            cardClassName={cardClassName}
            setCurrentTestimonialIndex={setCurrentTestimonialIndex}
            plans={plans}
            currentPlanIndex={currentPlanIndex}
            nextPlan={nextPlan}
            prevPlan={prevPlan}
          />
        )}
      </div>
    </div>
  )
}

interface PricingCardContentProps {
  plan: PlanData
  currentPrice: string
  originalPrice?: string
  isAnnual: boolean
  currentTestimonialIndex: number
  isInView: boolean
  animationEnabled: boolean
  cardClassName?: string
  setCurrentTestimonialIndex: (index: number) => void
  plans: PlanData[]
  currentPlanIndex: number
  nextPlan: () => void
  prevPlan: () => void
}

function PricingCardContent({
  plan,
  currentPrice,
  originalPrice,
  isAnnual,
  currentTestimonialIndex,
  isInView,
  animationEnabled,
  cardClassName,
  setCurrentTestimonialIndex,
  plans,
  currentPlanIndex,
  nextPlan,
  prevPlan,
}: PricingCardContentProps) {
  // const BadgeIcon = plan.badge?.icon
  const FeaturesBadgeIcon = plan.featuresBadge?.icon
  const FeaturesIcon = plan.featuresIcon
  const PrimaryButtonIcon = plan.primaryButton.icon
  const ChevronIcon = plan.primaryButton.chevronIcon
  const SecondaryButtonIcon = plan.secondaryButton?.icon

  return (
    <Card className={`overflow-hidden border border-primary/10 rounded-2xl relative group ${cardClassName || ""}`}>
      {animationEnabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-primary/5 via-primary/2 to-transparent" />
        </motion.div>
      )}

      {/* Plan Navigation */}
      {plans.length > 1 && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 border border-border/50">
            <span className="text-xs text-muted-foreground">
              {currentPlanIndex + 1} of {plans.length}
            </span>
            <button
              onClick={prevPlan}
              className="p-1 rounded-full hover:bg-muted transition-colors"
              aria-label="Previous plan"
            >
              <ChevronLeft className="h-3 w-3" />
            </button>
            <button
              onClick={nextPlan}
              className="p-1 rounded-full hover:bg-muted transition-colors"
              aria-label="Next plan"
            >
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Left column - Pricing details */}
        <div className="p-6 md:p-8 md:w-1/2 flex flex-col">
          {plan.badge && (
            <div className="flex items-center mb-4">
              <Badge className="px-3 py-1 bg-primary/5 border-primary/10 text-primary hover:bg-primary/10">
                {/* <BadgeIcon className="h-3.5 w-3.5 mr-1" /> */}
                <span>{plan.badge.text}</span>
              </Badge>
            </div>
          )}

          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold">{plan.title}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{plan.subtitle}</p>

          <div className="flex items-baseline mb-2">
            <span className="text-4xl font-bold">{currentPrice}</span>
            {originalPrice && <span className="text-muted-foreground ml-2 line-through">{originalPrice}</span>}
            <span className="text-muted-foreground ml-2">/{isAnnual ? 'year' : 'month'}</span>
          </div>
          
          {isAnnual && (
            <p className="text-sm text-muted-foreground mb-6">
              Billed annually, save up to 20%
            </p>
          )}

          <div className="space-y-4 mb-6">
            {plan.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon

              return (
                <div key={index} className="flex items-center gap-2">
                  <BenefitIcon className="h-4 w-4 text-primary" />
                  <span className="text-sm">{benefit.text}</span>
                </div>
              )
            })}
            {plan.includes && plan.includes.length > 0 && (
              <div className="space-y-4 mt-6">
                <h1 className="font-bold">Includes</h1>
                <div className="flex flex-col gap-2">
                  {plan.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image src={item.img} alt={`icon-${index}`} height={20} width={20} className={`${item.className}`} />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}


          </div>

          <div className="mt-auto space-y-3">
            <Button
              className="w-full gap-2 group"
              size="lg"
              onClick={plan.primaryButton.onClick}
              asChild={!!plan.primaryButton.href}
            >
              {plan.primaryButton.href ? (
                <Link href={plan.primaryButton.href}>
                  <PrimaryButtonIcon className="h-4 w-4" />
                  <span>{plan.primaryButton.text}</span>
                  {ChevronIcon && (
                    <ChevronIcon className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-1" />
                  )}
                </Link>
              ) : (
                <>
                  <PrimaryButtonIcon className="h-4 w-4" />
                  <span>{plan.primaryButton.text}</span>
                  {ChevronIcon && (
                    <ChevronIcon className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-1" />
                  )}
                </>
              )}
            </Button>

            {plan.secondaryButton && SecondaryButtonIcon && (
              <Button
                variant="outline"
                className="w-full gap-2"
                size="lg"
                onClick={plan.secondaryButton.onClick}
                asChild={!!plan.secondaryButton.href}
              >
                {plan.secondaryButton.href ? (
                  <Link href={plan.secondaryButton.href} target="_blank">
                    <span>{plan.secondaryButton.text}</span>
                    <SecondaryButtonIcon className="h-4 w-4 ml-auto" />
                  </Link>
                ) : (
                  <>
                    <span>{plan.secondaryButton.text}</span>
                    <SecondaryButtonIcon className="h-4 w-4 ml-auto" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Right column - Features */}
        <div className="p-6 mt-10 md:p-8 md:w-1/2 md:border-l border-border/50">
          <div className="flex items-center mb-4">
            {plan.featuresBadge && FeaturesBadgeIcon && (
              <Badge className="px-2 py-1 bg-primary/5 border-primary/10 text-primary hover:bg-primary/10 mr-3">
                <FeaturesBadgeIcon className="h-3 w-3 mr-1" />
                <span className="text-xs font-bold">{plan.featuresBadge.text}</span>
              </Badge>
            )}
            <h4 className="font-semibold">{plan.featuresTitle || "Included Features"}</h4>
          </div>

          <div className="space-y-3 mb-6">
            {plan.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={animationEnabled ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                animate={animationEnabled && isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <FeaturesIcon className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </div>
          
          {plan.extra && Array.isArray(plan.extra) && (
            <div className="space-y-3 mb-6">
              {plan.extra.map((item, index) => (
                <div key={index} className="block text-sm">
                  <h1 className="font-bold">{item.extratitle}</h1>
                  <span className="text-xs">
                    {item.extradescription}
                  </span>
                </div>
              ))}
            </div>
          )}


          {plan.testimonials.length > 0 && (
            <>
              <Separator className="my-6" />

              <div className="rounded-lg p-4 border border-border/50 relative overflow-hidden min-h-[140px]">
                <AnimatePresence mode="wait">
                  {plan.testimonials.map(
                    (testimonial, index) =>
                      index === currentTestimonialIndex && (
                        <motion.div
                          key={testimonial.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 p-4"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-8 w-8 rounded-full overflow-hidden">
                              <Image
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={`${testimonial.name}'s avatar`}
                                className="w-full h-full object-cover"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {testimonial.role}
                                {testimonial.company && ` at ${testimonial.company}`}
                              </p>
                            </div>
                            <div className="ml-auto flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm italic">{testimonial.content}</p>
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>

              {plan.testimonials.length > 1 && (
                <div className="flex justify-center mt-4 gap-1">
                  {plan.testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentTestimonialIndex ? "w-4 bg-primary" : "w-1.5 bg-primary/30"
                      }`}
                      onClick={() => setCurrentTestimonialIndex(index)}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  )
}