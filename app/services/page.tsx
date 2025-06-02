"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, 
  Clock, 
  Star, 
  CheckCircle, 
  Calendar,
  ArrowRight,
  Shield,
  Award,
  Heart,
  Zap,
  Droplets,
  Scissors,
  Users
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
    ]
  }
]

const faqs = [
  {
    question: "Are the treatments safe?",
    answer: "Yes, all our treatments use FDA-approved products and are performed by qualified practitioners following strict safety protocols."
  },
  {
    question: "How long do results last?",
    answer: "Results vary by treatment: Botox lasts 3-6 months, fillers 6-18 months, and PRP effects can last 6-12 months with proper maintenance."
  },
  {
    question: "Is there any downtime?",
    answer: "Most treatments have minimal to no downtime. You may experience slight redness or swelling that typically resolves within 24-48 hours."
  },
  {
    question: "How much do treatments cost?",
    answer: "Prices vary by treatment and individual needs. We offer free consultations to provide personalized quotes and treatment plans."
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-4 text-center">
        <p className="text-lg font-medium">
          🎉 Limited Time Offer: <span className="font-bold">50% off for models</span> and <span className="font-bold">25% off all services</span> - Book your consultation today! 🎉
        </p>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium aesthetic treatments designed to enhance your natural beauty
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                FDA Approved
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Certified Practitioners
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Natural Results
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-xl">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                    <p className="text-xl text-primary font-medium">{service.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Treatment Info */}
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

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Key Benefits</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.slice(0, 4).map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
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
                      <Link href={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Our Treatment <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From consultation to aftercare, we ensure a comfortable and professional experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Comprehensive assessment of your needs, goals, and medical history to create a personalized treatment plan.",
                icon: Users
              },
              {
                step: "02",
                title: "Treatment",
                description: "Professional treatment using premium products and advanced techniques in our comfortable clinic environment.",
                icon: Sparkles
              },
              {
                step: "03",
                title: "Aftercare",
                description: "Detailed aftercare instructions and follow-up support to ensure optimal results and your satisfaction.",
                icon: Heart
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <process.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {process.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{process.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our aesthetic treatments
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Have more questions? We're here to help!
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </motion.div>
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
              Ready to Enhance Your Natural Beauty?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Book your free consultation today and let us create a personalized treatment plan just for you.
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
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get In Touch
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