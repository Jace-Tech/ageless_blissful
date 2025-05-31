"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ArrowLeft, 
  Clock, 
  Star, 
  Calendar,
  CheckCircle,
  Sparkles,
  Phone,
  Heart,
  Shield,
  Award,
  Droplets,
  Zap,
  Scissors
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/header'
import Footer from '@/components/footer'

const services = [
  {
    id: "botox",
    title: "Botox Treatments",
    subtitle: "Smooth Away Fine Lines & Wrinkles",
    description: "Our premium Botox treatments use FDA-approved botulinum toxin to temporarily relax facial muscles, reducing the appearance of fine lines and wrinkles for a naturally refreshed look.",
    image: "https://img.freepik.com/premium-photo/professional-botox-injection-procedure-bright-clean-clinic-setting-trusted-client-skillful-physician_416256-43986.jpg",
    icon: Sparkles,
    duration: "15-30 minutes",
    results: "3-7 days",
    lasting: "3-6 months",
    price: "From £200",
    benefits: [
      "Reduces forehead lines and crow's feet",
      "Prevents new wrinkles from forming",
      "Quick, virtually painless procedure",
      "No downtime required",
      "Natural-looking results",
      "FDA-approved treatment"
    ],
    areas: [
      "Forehead lines",
      "Crow's feet",
      "Frown lines",
      "Bunny lines",
      "Lip lines",
      "Neck bands"
    ],
    process: [
      "Comprehensive consultation and assessment",
      "Marking of injection sites",
      "Precise injection technique",
      "Post-treatment care instructions",
      "Follow-up appointment if needed"
    ],
    aftercare: [
      "Avoid lying down for 4 hours after treatment",
      "Don't massage or rub the treated areas",
      "Avoid strenuous exercise for 24 hours",
      "Stay upright and avoid bending over",
      "Apply ice if there's any swelling",
      "Avoid alcohol for 24 hours"
    ],
    faqs: [
      {
        question: "Does Botox hurt?",
        answer: "Most clients describe the sensation as a small pinch. The needles used are very fine, and the procedure is generally well-tolerated."
      },
      {
        question: "When will I see results?",
        answer: "You'll start to see results within 3-7 days, with full effects visible after two weeks."
      },
      {
        question: "How long does Botox last?",
        answer: "Results typically last 3-6 months, depending on individual factors such as muscle strength and metabolism."
      }
    ]
  },
  {
    id: "fillers",
    title: "Dermal Fillers",
    subtitle: "Restore Volume & Enhance Contours",
    description: "Premium hyaluronic acid fillers to restore lost volume, enhance facial contours, and create natural-looking results that complement your unique features.",
    image: "https://i.pinimg.com/originals/79/6e/46/796e46c4ca983e1a6e7ead06ae5e2fbe.png",
    icon: Droplets,
    duration: "30-60 minutes",
    results: "Immediate",
    lasting: "6-18 months",
    price: "From £300",
    benefits: [
      "Restores facial volume",
      "Enhances lip shape and size",
      "Smooths deep lines and folds",
      "Improves facial symmetry",
      "Immediate visible results",
      "Reversible treatment"
    ],
    areas: [
      "Lips",
      "Cheeks",
      "Nasolabial folds",
      "Marionette lines",
      "Jawline",
      "Under-eye hollows"
    ],
    process: [
      "Detailed facial analysis",
      "Treatment planning discussion",
      "Topical numbing if required",
      "Precise filler placement",
      "Immediate result assessment",
      "Aftercare guidance"
    ],
    aftercare: [
      "Apply ice to reduce swelling",
      "Avoid touching or massaging the area",
      "Sleep with head elevated for first night",
      "Avoid strenuous exercise for 24-48 hours",
      "Stay hydrated",
      "Avoid excessive heat or cold"
    ],
    faqs: [
      {
        question: "Are dermal fillers safe?",
        answer: "Yes, when administered by qualified practitioners using FDA-approved products, dermal fillers are very safe with minimal side effects."
      },
      {
        question: "Can fillers be reversed?",
        answer: "Hyaluronic acid fillers can be dissolved using an enzyme called hyaluronidase if needed."
      },
      {
        question: "How much filler do I need?",
        answer: "The amount varies depending on your goals and anatomy. This will be discussed during your consultation."
      }
    ]
  },
  {
    id: "prp",
    title: "PRP Therapy",
    subtitle: "Natural Skin Rejuvenation",
    description: "Platelet-Rich Plasma therapy uses your body's own healing factors to stimulate collagen production, improve skin texture, and promote natural rejuvenation.",
    image: "https://i.pinimg.com/originals/0d/db/48/0ddb4849af5fa4ceae7cc9dfbe954032.png",
    icon: Heart,
    duration: "45-60 minutes",
    results: "2-4 weeks",
    lasting: "6-12 months",
    price: "From £400",
    benefits: [
      "100% natural treatment",
      "Stimulates collagen production",
      "Improves skin texture and tone",
      "Reduces fine lines",
      "Enhances skin radiance",
      "Minimal side effects"
    ],
    areas: [
      "Full face",
      "Under-eye area",
      "Neck and décolletage",
      "Hands",
      "Scalp (hair restoration)",
      "Acne scarring"
    ],
    process: [
      "Blood sample collection",
      "PRP preparation in centrifuge",
      "Skin preparation and numbing",
      "PRP injection or microneedling",
      "Post-treatment skincare",
      "Series planning discussion"
    ],
    aftercare: [
      "Keep the area clean and dry",
      "Avoid makeup for 12-24 hours",
      "Use gentle skincare products",
      "Apply SPF 30+ daily",
      "Avoid direct sun exposure",
      "Stay well hydrated"
    ],
    faqs: [
      {
        question: "Is PRP therapy painful?",
        answer: "Most clients experience minimal discomfort. Topical numbing cream is applied before treatment to ensure comfort."
      },
      {
        question: "How many sessions do I need?",
        answer: "Typically 3-4 sessions spaced 4-6 weeks apart for optimal results, followed by maintenance treatments."
      },
      {
        question: "Are there any side effects?",
        answer: "Side effects are minimal since we use your own blood. You may experience mild redness and swelling for 24-48 hours."
      }
    ]
  },
  {
    id: "microneedling",
    title: "Microneedling",
    subtitle: "Collagen Stimulation Therapy",
    description: "Advanced microneedling treatments create controlled micro-injuries to stimulate your skin's natural healing process, promoting collagen production and skin renewal.",
    image: "https://i.ytimg.com/vi/6zT4SlBMb4s/maxresdefault.jpg",
    icon: Zap,
    duration: "30-45 minutes",
    results: "1-2 weeks",
    lasting: "3-6 months",
    price: "From £250",
    benefits: [
      "Stimulates natural collagen",
      "Improves skin texture",
      "Reduces pore size",
      "Minimizes acne scars",
      "Enhances product absorption",
      "Suitable for all skin types"
    ],
    areas: [
      "Face",
      "Neck",
      "Décolletage",
      "Hands",
      "Body scars",
      "Stretch marks"
    ],
    process: [
      "Skin cleansing and preparation",
      "Topical numbing application",
      "Microneedling treatment",
      "Serum application",
      "Soothing mask treatment",
      "Aftercare instructions"
    ],
    aftercare: [
      "Avoid sun exposure for 48 hours",
      "Use gentle, fragrance-free products",
      "Apply SPF 30+ daily",
      "Avoid makeup for 24 hours",
      "Keep skin hydrated",
      "Avoid retinoids for 1 week"
    ],
    faqs: [
      {
        question: "Is microneedling suitable for sensitive skin?",
        answer: "Yes, microneedling can be adjusted for different skin types and sensitivities. We'll assess your skin during consultation."
      },
      {
        question: "How often can I have microneedling?",
        answer: "Treatments are typically spaced 4-6 weeks apart to allow proper healing and collagen formation."
      },
      {
        question: "Can I combine microneedling with other treatments?",
        answer: "Yes, microneedling works excellently with PRP therapy and certain serums for enhanced results."
      }
    ]
  },
  {
    id: "dermaplaning",
    title: "Dermaplaning",
    subtitle: "Exfoliation & Hair Removal",
    description: "Gentle exfoliation treatment that removes dead skin cells and vellus hair, revealing smoother, brighter skin with improved product absorption.",
    image: "https://i.pinimg.com/originals/40/b8/66/40b86635dc45a52c419abf0f736abe47.png",
    icon: Scissors,
    duration: "30-45 minutes",
    results: "Immediate",
    lasting: "3-4 weeks",
    price: "From £150",
    benefits: [
      "Instant skin smoothing",
      "Removes peach fuzz",
      "Enhances makeup application",
      "Improves product penetration",
      "No downtime required",
      "Suitable for most skin types"
    ],
    areas: [
      "Full face",
      "Forehead",
      "Cheeks",
      "Chin",
      "Upper lip area",
      "Jawline"
    ],
    process: [
      "Skin analysis and cleansing",
      "Gentle dermaplaning technique",
      "Hydrating serum application",
      "Moisturizer and SPF",
      "Aftercare recommendations",
      "Maintenance scheduling"
    ],
    aftercare: [
      "Avoid sun exposure for 24 hours",
      "Use gentle skincare products",
      "Apply SPF 30+ religiously",
      "Avoid retinoids for 48 hours",
      "Keep skin well moisturized",
      "Avoid harsh scrubs for 1 week"
    ],
    faqs: [
      {
        question: "Will the hair grow back thicker?",
        answer: "No, this is a common myth. Dermaplaning removes vellus hair at skin level and doesn't change hair structure or growth rate."
      },
      {
        question: "How often should I have dermaplaning?",
        answer: "Most clients benefit from treatments every 3-4 weeks, following the natural skin cell turnover cycle."
      },
      {
        question: "Can I have dermaplaning with active acne?",
        answer: "Dermaplaning is not recommended for active acne or inflamed skin. We'll assess your skin during consultation."
      }
    ]
  },
  {
    id: "hair-loss",
    title: "Hair Loss Treatment",
    subtitle: "PRP Hair Restoration",
    description: "Advanced PRP therapy for hair restoration stimulates hair follicles, promotes new growth, and improves hair density for both men and women.",
    image: "https://i.ytimg.com/vi/KSYUKp9l350/maxresdefault.jpg",
    icon: Award,
    duration: "60-90 minutes",
    results: "3-6 months",
    lasting: "12-18 months",
    price: "From £500",
    benefits: [
      "Natural hair growth stimulation",
      "Improves hair density",
      "Strengthens existing hair",
      "Suitable for men and women",
      "No surgical procedure",
      "Minimal side effects"
    ],
    areas: [
      "Crown area",
      "Hairline",
      "Temples",
      "Vertex",
      "Diffuse thinning areas",
      "Eyebrows"
    ],
    process: [
      "Hair and scalp assessment",
      "Blood collection for PRP",
      "PRP preparation",
      "Scalp injection treatment",
      "Post-treatment care",
      "Progress monitoring"
    ],
    aftercare: [
      "Avoid washing hair for 24 hours",
      "Gentle hair care products only",
      "Avoid heat styling for 48 hours",
      "No vigorous scalp massage",
      "Protect scalp from sun exposure",
      "Follow prescribed hair care routine"
    ],
    faqs: [
      {
        question: "Who is a good candidate for PRP hair treatment?",
        answer: "PRP works best for those with early to moderate hair loss. A consultation will determine if you're a suitable candidate."
      },
      {
        question: "How many treatments do I need?",
        answer: "Typically 3-4 initial treatments spaced 4-6 weeks apart, followed by maintenance sessions every 6-12 months."
      },
      {
        question: "When will I see results?",
        answer: "Initial results may be visible after 3 months, with significant improvement typically seen after 6 months of treatment."
      }
    ]
  }
]

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === params.id)
  
  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
                  <p className="text-xl text-primary font-medium">{service.subtitle}</p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Duration</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Results</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.results}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Lasting</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.lasting}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Price</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.price}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/book">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Consultation
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="tel:+442079460958">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits & Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Heart className="w-6 h-6 text-primary mr-3" />
                    Key Benefits
                  </h2>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Treatment Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Sparkles className="w-6 h-6 text-primary mr-3" />
                    Treatment Areas
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {service.areas.map((area, index) => (
                      <motion.div
                        key={area}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="w-full justify-center py-2">
                          {area}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Treatment <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What to expect during your {service.title.toLowerCase()} treatment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare & FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Aftercare */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Shield className="w-6 h-6 text-primary mr-3" />
                    Aftercare Instructions
                  </h2>
                  <div className="space-y-4">
                    {service.aftercare.map((instruction, index) => (
                      <motion.div
                        key={instruction}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{instruction}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Award className="w-6 h-6 text-primary mr-3" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {service.faqs.map((faq, index) => (
                      <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <h4 className="font-semibold">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready for {service.title}?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Book your free consultation today and let our experts create a personalized treatment plan for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/book">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Ask Questions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}