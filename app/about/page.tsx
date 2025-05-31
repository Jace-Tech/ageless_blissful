"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Award, 
  Heart, 
  Shield, 
  Users, 
  Star, 
  Calendar,
  CheckCircle,
  Sparkles,
  Clock,
  MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'

const values = [
  {
    icon: Heart,
    title: "Natural Enhancement",
    description: "We believe in enhancing your natural beauty, not changing who you are. Our treatments are designed to bring out the best version of yourself."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our top priority. We use only FDA-approved products and follow the highest medical standards in all our treatments."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, from consultation to aftercare, ensuring you receive the best possible experience."
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Every client is unique. We create personalized treatment plans tailored to your specific needs, goals, and lifestyle."
  }
]

const qualifications = [
  "Registered Nurse with 10+ years experience",
  "Advanced Aesthetic Medicine Certification",
  "Botox and Dermal Filler Specialist",
  "PRP Therapy Certified Practitioner",
  "Microneedling Advanced Training",
  "Continuous Professional Development"
]

const achievements = [
  {
    number: "1000+",
    label: "Happy Clients"
  },
  {
    number: "5+",
    label: "Years Experience"
  },
  {
    number: "99%",
    label: "Satisfaction Rate"
  },
  {
    number: "15+",
    label: "Treatments Offered"
  }
]

export default function AboutPage() {
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
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About <span className="gradient-text">Ageless Blissful</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Dedicated to enhancing your natural beauty with safe, effective, and personalized aesthetic treatments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
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
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ageless Blissful was founded with a simple yet powerful vision: to help people feel confident 
                  and beautiful in their own skin. Our journey began with a passion for aesthetic medicine and 
                  a commitment to providing safe, effective treatments that enhance natural beauty.
                </p>
                <p>
                  With locations in London and Northampton, we've built a reputation for excellence, 
                  professionalism, and personalized care. Our approach combines medical expertise with 
                  an artistic eye, ensuring that every treatment is tailored to your unique features and goals.
                </p>
                <p>
                  We believe that aesthetic treatments should be accessible, safe, and natural-looking. 
                  That's why we invest in the latest techniques, premium products, and ongoing education 
                  to deliver the best possible results for our clients.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/services">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Our Services
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
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.pinimg.com/736x/cc/66/0e/cc660ee6f8f8b2559d691c077f9a4f63.jpg"
                  alt="Ageless Blissful clinic interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">Est. 2019</div>
                  <div className="text-sm opacity-90">Serving London & Northampton</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Juliet Section */}
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
              Meet <span className="gradient-text">Juliet Asemota</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lead Aesthetic Practitioner & Founder
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.pinimg.com/originals/0c/49/08/0c49085f860988e12ab31c02bc0ff134.jpg"
                  alt="Juliet Asemota - Lead Aesthetic Practitioner"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Juliet Asemota is the founder and lead aesthetic practitioner at Ageless Blissful. 
                  With over 10 years of experience in nursing and specialized training in aesthetic medicine, 
                  Juliet brings a unique combination of medical expertise and artistic vision to every treatment.
                </p>
                <p>
                  Her passion for helping people feel confident and beautiful led her to specialize in 
                  non-surgical aesthetic treatments. Juliet believes in the power of subtle enhancements 
                  that bring out each client's natural beauty while maintaining their unique character.
                </p>
                <p>
                  Committed to excellence and safety, Juliet continuously updates her skills and knowledge 
                  through ongoing education and training in the latest aesthetic techniques and technologies.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Qualifications & Certifications</h3>
                <div className="grid grid-cols-1 gap-2">
                  {qualifications.map((qualification, index) => (
                    <motion.div
                      key={qualification}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{qualification}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/book">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation with Juliet
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Ageless Blissful
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Our <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <p className="text-muted-foreground">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our <span className="gradient-text">Clinics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conveniently located to serve you better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Mon-Fri: 9AM-6PM, Sat: 9AM-5PM</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/locations#london">
                      <MapPin className="w-4 h-4 mr-2" />
                      View Location Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

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
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Mon-Fri: 9AM-6PM, Sat: 9AM-5PM</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/locations#northampton">
                      <MapPin className="w-4 h-4 mr-2" />
                      View Location Details
                    </Link>
                  </Button>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Book your free consultation today and discover how we can help you achieve your aesthetic goals.
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
                  <Users className="w-5 h-5 mr-2" />
                  Contact Us
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