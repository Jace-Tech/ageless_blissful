"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Star, 
  Users, 
  Award, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Heart,
  Sparkles,
  Shield,
  Calendar,
  MapPin,
  Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      let startTime: number
      const startCount = 0
      
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const currentCount = Math.floor(progress * (end - startCount) + startCount)
        setCount(currentCount)
        
        if (progress < 1) {
          requestAnimationFrame(updateCount)
        }
      }
      
      requestAnimationFrame(updateCount)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className="counter-animate">
      {count}{suffix}
    </span>
  )
}

const services = [
  {
    title: "Botox Treatments",
    description: "Smooth away fine lines and wrinkles with our premium Botox treatments for a naturally refreshed appearance.",
    image: "https://img.freepik.com/premium-photo/professional-botox-injection-procedure-bright-clean-clinic-setting-trusted-client-skillful-physician_416256-43986.jpg",
    features: ["FDA Approved", "Natural Results", "Quick Treatment"],
    href: "/services#botox"
  },
  {
    title: "Dermal Fillers",
    description: "Restore volume and enhance facial contours with our range of premium dermal filler treatments.",
    image: "https://i.pinimg.com/originals/79/6e/46/796e46c4ca983e1a6e7ead06ae5e2fbe.png",
    features: ["Volume Restoration", "Facial Contouring", "Long-lasting"],
    href: "/services#fillers"
  },
  {
    title: "PRP Therapy",
    description: "Harness your body's natural healing power with Platelet-Rich Plasma therapy for skin rejuvenation.",
    image: "https://thebetterbodyshopllc.com/storage/2023/08/Plasma-Rich-Platelet-PRP-Therapy-A-Revolutionary-Approach-to-Skin-Rejuvenation-1024x683.jpeg",
    features: ["Natural Healing", "Skin Rejuvenation", "Collagen Boost"],
    href: "/services#prp"
  },
  {
    title: "Microneedling",
    description: "Stimulate collagen production and improve skin texture with our advanced microneedling treatments.",
    image: "https://i.pinimg.com/originals/5c/d2/78/5cd27890bf95f98e9657f0dce6e45b39.jpg",
    features: ["Collagen Boost", "Texture Improvement", "Minimal Downtime"],
    href: "/services#microneedling"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    service: "Botox & Fillers",
    rating: 5,
    comment: "Absolutely amazing experience! Juliet made me feel so comfortable and the results are exactly what I wanted - natural and beautiful.",
    image: "https://i.pinimg.com/originals/f9/c4/0e/f9c40e3544fe9d1a8ee8db6525c2895a.jpg"
  },
  {
    name: "Emma Thompson",
    service: "PRP Therapy",
    rating: 5,
    comment: "The PRP treatment has transformed my skin! I can see such a difference in texture and glow. Highly recommend Ageless Blissful.",
    image: "https://i.pinimg.com/originals/f0/74/9f/f0749f37fc8b0b597535c08c3ea4c08b.jpg"
  },
  {
    name: "Michael Chen",
    service: "Hair Loss Treatment",
    rating: 5,
    comment: "Professional, knowledgeable, and caring. The hair loss treatment has given me back my confidence. Thank you!",
    image: "https://i.pinimg.com/originals/b9/6d/76/b96d764d91fc70d9ee2643ae8bce1ffa.jpg"
  }
]

export default function HomePage() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1 }}
        >
          <div className="relative w-full h-full">
            <Image
              src="https://i.pinimg.com/originals/b9/b9/68/b9b968b0574fdf7193aa99696679beab.jpg"
              alt="Luxury aesthetic treatment room at Ageless Blissful"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Your
              <span className="block gradient-text">Ageless Beauty</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience premium aesthetic treatments with natural results at our luxury clinics in London and Northampton
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/book">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Link href="/services">
                  <Sparkles className="w-5 h-5 mr-2" />
                  View Services
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 pt-12 text-white/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="text-sm">Certified Practitioners</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-muted-foreground">Treatments Offered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Premium <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our range of advanced aesthetic treatments designed to enhance your natural beauty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg">
              <Link href="/services">
                <Sparkles className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet <span className="gradient-text">Juliet Asemota</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a background in nursing and years of specialized training in aesthetic medicine, 
                Juliet brings expertise, artistry, and a commitment to natural-looking results to every treatment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Certified Aesthetic Practitioner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Nursing Background</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>Passionate About Natural Enhancement</span>
                </div>
              </div>
              <Button asChild size="lg">
                <Link href="/about">
                  <Users className="w-5 h-5 mr-2" />
                  Learn More About Our Team
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://i.ytimg.com/vi/x3Pp0CI1l3M/maxresdefault.jpg"
                  alt="Juliet Asemota - Lead Aesthetic Practitioner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from our valued clients who trust us with their aesthetic journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center space-x-3 pt-4 border-t">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our <span className="gradient-text">Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conveniently located in London and Northampton for your aesthetic treatment needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* London Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-semibold">London Clinic</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">151 Lavender Hill</p>
                    <p className="text-muted-foreground">London SW11 5QJ</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <Link href="tel:+442079460958" className="text-primary hover:underline">
                      +44 20 7946 0958
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Mon-Fri: 9AM-6PM, Sat: 9AM-5PM</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/locations#london">
                      <MapPin className="w-4 h-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Northampton Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-semibold">Northampton Clinic</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Abington Street</p>
                    <p className="text-muted-foreground">Northampton NN1 2AJ</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <Link href="tel:+441604123456" className="text-primary hover:underline">
                      +44 1604 123456
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Mon-Fri: 9AM-6PM, Sat: 9AM-5PM</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/locations#northampton">
                      <MapPin className="w-4 h-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y2 }}
        >
          <div className="relative w-full h-full">
            <Image
              src="https://i.pinimg.com/736x/18/3b/57/183b579f066c4ff758fc293372f0fd9c.jpg"
              alt="Ageless Blissful clinic interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Begin Your Aesthetic Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Book your free consultation today and discover how we can help you achieve your aesthetic goals naturally and safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/book">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Link href="tel:+442079460958">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
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