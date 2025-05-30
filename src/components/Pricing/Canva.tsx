"use client"

import { Check, ChevronRight, Shield, ShoppingCart } from "lucide-react"
import { EnhancedPricingCard, type Testimonial, type PlanData } from "@/components/ui/single-pricing-card"

export function Canva() {
  const proFeatures = [
    "Unlimited access to premium templates",
    "140M+ photos, videos, graphics, audio",
    "1000 Brand Kits to manage your brand Quickly resize and translate designs",
    "Remove backgrounds in a click",
    "Create, resize, translate and remove backgrounds at scale",
    "Boost creativity and productivity with 25+ Al tools",
    "Plan and schedule social content",
    "1TB of cloud storage",
    "Online customer support"
  ].map((text) => ({ text }))

  const teamFeatures = [
    "Unlimited access to premium templates",
    "140M+ photos, videos, graphics, audio",
    "1000 Brand Kits to manage your brand Quickly resize and translate designs",
    "Remove backgrounds in a click",
    "Create, resize, translate and remove backgrounds at scale",
    "Boost creativity and productivity with 25+ Al tools",
    "Plan and schedule social content",
    "1TB of cloud storage",
    "Online customer support"
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
        text: "For one person",
      },
      title: "Canva Pro",
      subtitle: "Unlock premium content, more powerful design tools and AI features.",
      price: {
        monthly: "$15",
        annual: "$120", 
        originalMonthly: "$0",
        originalAnnual: "$0", 
      },
      benefits: [
        {
          text: "Everything in Free, plus:",
          icon: Check,
        }
      ],
      features: proFeatures,
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
    },
    {
      badge: {
        text: "For your team",
      },
      title: "Canva Teams",
      subtitle: "Transform teamwork, grow your brand, and simplify workflows.",
      price: {
        monthly: "$10",
        annual: "$100", 
        originalMonthly: "$0",
        originalAnnual: "$0", 
      },
      benefits: [
        {
          text: "Minimum 3 people",
          icon: Shield,
        },
      ],
      features: teamFeatures,
      featuresIcon: Check,
      featuresTitle: "Includes exclusive business features:",
      // featuresBadge: {
      //   icon: Rocket,
      //   text: "Advanced",
      // },
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
          defaultPlanIndex={0} // Start with Pro plan
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