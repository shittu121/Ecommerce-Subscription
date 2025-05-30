"use client"

import { Check, ChevronRight, Shield, ShoppingCart } from "lucide-react"
import { EnhancedPricingCard, type Testimonial, type PlanData } from "@/components/ui/single-pricing-card"

export function Adobe() {
  const individualFeatures = [
    "100 GB of cloud storage",
    "Step-by-step tutorials",
    "Adobe Portfolio",
    "Adobe Fonts",
    "Behance",
    "Creative Cloud Libraries",
    "Access to the latest features",
    "1,000 monthly generative credits",
  ].map((text) => ({ text }))

  const businessFeatures = [
    "Admin Console for managing licences",
    "Advanced 24/7 tech support",
    "Two 1:1 expert sessions per user every year",
    "Unlimited job posts using Adobe Talent",
    "Slack and Microsoft Teams app integration",
  ].map((text) => ({ text }))

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Full Stack Developer",
      company: "TechFlow",
      content:
        "This starter template saved me weeks of setup time. The Supabase integration is flawless, and the UI components are beautiful and easy to customize. Worth every penny!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Frontend Engineer",
      company: "DesignHub",
      content:
        "I've used many starter templates, but this one stands out for its clean architecture and attention to detail. The TypeScript support is excellent, and the documentation is comprehensive.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLabs",
      content:
        "Our team was able to launch our MVP in record time thanks to this template. The authentication flow and user management features worked right out of the box. Highly recommended!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "CreativeCraft",
      content:
        "The dark mode implementation is perfect, and the components are accessible by default. As a designer, I appreciate the attention to detail and the clean, modern aesthetic.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 5,
      name: "David Park",
      role: "CTO",
      company: "StartupForge",
      content:
        "We evaluated several starter templates for our new project, and this one was by far the most complete. The code quality is excellent, and the structure makes it easy to extend.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 6,
      name: "Olivia Martinez",
      role: "Product Owner",
      company: "InnovateX",
      content:
        "After evaluating several solutions, we chose this one for its flexibility and robust feature set. The onboarding process was smooth, and our team was productive from day one.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    },
  ]

  const premiumTestimonials: Testimonial[] = [
    {
      id: 7,
      name: "James Wilson",
      role: "Engineering Director",
      company: "EnterpriseHub",
      content:
        "The Premium plan's multi-tenant architecture saved us months of development. The white-label options and priority support made this an easy choice for our enterprise needs.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 8,
      name: "Lisa Thompson",
      role: "VP of Engineering",
      company: "ScaleForce",
      content:
        "Having access to the source code license and 1-on-1 setup call was invaluable. The advanced security features give us confidence in our production deployment.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 9,
      name: "Robert Kim",
      role: "Technical Lead",
      company: "GlobalTech",
      content:
        "The Premium tier's advanced analytics dashboard and role management system are exactly what we needed for our B2B SaaS platform. Exceptional value for money.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
  ]

  const plans: PlanData[] = [
    {
      badge: {
        text: "Individual",
      },
      title: "Creative Cloud All Apps",
      subtitle: "Get the apps and services you need for all kinds of creative work, from photography and graphic design to video, UI/UX and social media.",
      price: {
        monthly: "$93.51",
        annual: "$386.87", 
        originalMonthly: "$150.42",
        originalAnnual: "$709.37", 
      },
      benefits: [
        {
          text: "One-time payment, lifetime updates",
          icon: Check,
        }
      ],
      features: individualFeatures,
      featuresIcon: Check,
      featuresTitle: "Extra",
      primaryButton: {
        text: "Select Plan",
        icon: ShoppingCart,
        chevronIcon: ChevronRight,
        onClick: () => {
          console.log("Pro plan selected")
        },
      },
      testimonials: testimonials,
      includes: [
        {
          img: '/photoshop.svg',
          text: 'Photoshop',
          className: ''
        },
        {
          img: '/illustrator.svg',
          text: 'Illustrator',
          className: ''
        },
        {
          img: '/premiere.svg',
          text: 'Adobe Premiere Pro',
          className: ''
        },
        {
          img: '/acrobat.svg',
          text: 'Acrobat Pro',
          className: ''
        },
        {
          img: '/indesign.svg',
          text: 'InDesign',
          className: ''
        }
      ],
      extra: [
        {
          extratitle: 'Plus Cloud services:',
          extradescription: '1 TB of cloud storage, 1,000 monthly generative credits, Adobe Portfolio, Adobe Fonts and access to the latest features and updates as soon as they&apos;re released'
        }
      ]
    },
    {
      badge: {
        text: "Business",
      },
      title: "Creative Cloud All Apps",
      subtitle: "Get the apps and services you need for all kinds of creative work, from photography and graphic design to video, UI/UX and social media.",
      price: {
        monthly: "$91.36",
        annual: "$1,096.37", 
        originalMonthly: "$0",
        originalAnnual: "$0", 
      },
      benefits: [
        {
          text: "Priority support (24/7)",
          icon: Shield,
        },
      ],
      features: businessFeatures,
      featuresIcon: Check,
      featuresTitle: "Includes exclusive business features:",
      primaryButton: {
        text: "Select Plan",
        icon: ShoppingCart,
        chevronIcon: ChevronRight,
        onClick: () => {
          console.log("Premium plan selected")
        },
      },
      testimonials: premiumTestimonials,
    },
  ]

  return (
    <section className="py-16" id="pricing">
      <div className="container mx-auto px-4">
        {/* Enhanced Pricing Card */}
        <EnhancedPricingCard
          plans={plans}
          defaultPlanIndex={0} 
          showAnnualDiscount={true}
          annualDiscountText="Save 48%"
          annualDiscountBadgeClassName="border-green-500/30 text-green-600"
          testimonialRotationSpeed={6000}
          animationEnabled={true}
          maxWidth="max-w-5xl"
        />

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include lifetime updates and 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}