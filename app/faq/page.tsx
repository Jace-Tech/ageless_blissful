"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, HelpCircle, Calendar, Shield, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        question: "What is Ageless Blissful?",
        answer: "Ageless Blissful is a premium aesthetic clinic offering non-surgical cosmetic treatments. We specialize in Botox, dermal fillers, PRP therapy, microneedling, and other advanced aesthetic procedures designed to enhance your natural beauty safely and effectively."
      },
      {
        question: "Are your treatments safe?",
        answer: "Yes, all our treatments are performed by qualified practitioners using FDA-approved products. We follow strict safety protocols and maintain the highest medical standards. Every treatment begins with a thorough consultation to ensure suitability and safety."
      },
      {
        question: "Do I need a consultation before treatment?",
        answer: "Yes, we require a consultation before any treatment. This allows us to assess your needs, discuss your goals, explain the procedure, and ensure you're a suitable candidate. Consultations are free and without obligation."
      },
      {
        question: "What qualifications do your practitioners have?",
        answer: "Our lead practitioner, Juliet Simon Peter, is a registered nurse with 2 years of experience and specialized training in aesthetic medicine. She holds certifications in Botox, dermal fillers, PRP therapy, and other advanced aesthetic treatments."
      },
      {
        question: "How do I book an appointment?",
        answer: "You can book an appointment through our online booking system, call us directly, or visit one of our clinics. We offer appointments at our London, Northampton, and Lagos locations, with flexible scheduling to accommodate your needs."
      }
    ]
  },
  {
    id: "treatments",
    title: "Treatment Information",
    icon: Star,
    questions: [
      {
        question: "How long do Botox results last?",
        answer: "Botox results typically last 3-6 months, depending on individual factors such as muscle strength, metabolism, and lifestyle. Regular treatments can help maintain results, and some clients find that effects last longer with repeated treatments."
      },
      {
        question: "Are dermal filler treatments painful?",
        answer: "Most clients experience minimal discomfort during filler treatments. We use products containing lidocaine (a local anesthetic) and can apply topical numbing cream if needed. Any discomfort is brief and well-tolerated by most clients."
      },
      {
        question: "What is PRP therapy and how does it work?",
        answer: "PRP (Platelet-Rich Plasma) therapy uses your own blood platelets to stimulate healing and rejuvenation. We draw a small amount of blood, process it to concentrate the platelets, then inject or apply it to treatment areas to promote collagen production and skin renewal."
      },
      {
        question: "How many microneedling sessions do I need?",
        answer: "Most clients see optimal results with 3-6 microneedling sessions spaced 4-6 weeks apart. The exact number depends on your skin concerns and goals. We'll create a personalized treatment plan during your consultation."
      },
      {
        question: "Can treatments be combined?",
        answer: "Yes, many treatments can be safely combined for enhanced results. Popular combinations include Botox with dermal fillers, or microneedling with PRP. We'll advise on the best combination approach during your consultation."
      }
    ]
  },
  {
    id: "preparation",
    title: "Before & After Care",
    icon: Clock,
    questions: [
      {
        question: "How should I prepare for my treatment?",
        answer: "Preparation varies by treatment but generally includes avoiding blood-thinning medications, alcohol, and excessive sun exposure for 24-48 hours before treatment. We'll provide specific pre-treatment instructions during your consultation."
      },
      {
        question: "What should I expect after treatment?",
        answer: "Most treatments have minimal downtime. You may experience slight redness, swelling, or tenderness at injection sites, which typically resolves within 24-48 hours. We provide detailed aftercare instructions for each treatment."
      },
      {
        question: "When will I see results?",
        answer: "Results timing varies: Botox takes 3-7 days to show full effect, dermal fillers show immediate results that improve over 2 weeks, PRP and microneedling results develop over 4-6 weeks as collagen production increases."
      },
      {
        question: "Are there any side effects?",
        answer: "Side effects are generally mild and temporary, including slight swelling, redness, or bruising at treatment sites. Serious complications are rare when treatments are performed by qualified practitioners. We discuss all potential risks during consultation."
      },
      {
        question: "What activities should I avoid after treatment?",
        answer: "Generally avoid strenuous exercise, excessive heat (saunas, hot yoga), alcohol, and facial massage for 24-48 hours post-treatment. Specific restrictions vary by treatment type and will be explained during your appointment."
      }
    ]
  },
  {
    id: "pricing",
    title: "Pricing & Booking",
    icon: Calendar,
    questions: [
      {
        question: "How much do treatments cost?",
        answer: "Treatment costs vary depending on the type and extent of treatment needed. Botox starts from £200, dermal fillers from £300, PRP therapy from £400, and microneedling from £250. We provide detailed pricing during your free consultation."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment options to make treatments more accessible. We accept cash, card payments, and can discuss payment plan options during your consultation. Please ask about our current financing options."
      },
      {
        question: "Is there a consultation fee?",
        answer: "No, initial consultations are completely free with no obligation to proceed with treatment. This allows you to discuss your goals, learn about suitable treatments, and receive a personalized quote without any cost."
      },
      {
        question: "Can I get a refund if I'm not satisfied?",
        answer: "Client satisfaction is our priority. While aesthetic treatments are generally non-refundable due to their nature, we offer complimentary follow-up appointments and will work with you to address any concerns about your results."
      },
      {
        question: "Do you offer package deals?",
        answer: "Yes, we offer treatment packages and loyalty programs for regular clients. These can provide significant savings for multiple treatments or maintenance programs. Ask about current offers during your consultation."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("general")
  const [openQuestions, setOpenQuestions] = useState<string[]>([])

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our aesthetic treatments and services
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-4">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card hover:bg-card/80 border'
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* FAQ Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              {searchTerm ? (
                // Search Results
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Search Results</h2>
                    <Badge variant="secondary">
                      {filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0)} results
                    </Badge>
                  </div>

                  {filteredCategories.length === 0 ? (
                    <Card className="border-0 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-8 text-center">
                        <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No results found</h3>
                        <p className="text-muted-foreground">
                          Try adjusting your search terms or browse our categories above.
                        </p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="space-y-6">
                      {filteredCategories.map((category) => (
                        <div key={category.id} className="space-y-4">
                          <h3 className="text-lg font-semibold text-primary">
                            {category.title}
                          </h3>
                          {category.questions.map((faq, index) => {
                            const questionId = `${category.id}-${index}`
                            const isOpen = openQuestions.includes(questionId)

                            return (
                              <Card key={questionId} className="border-0 bg-card/50 backdrop-blur-sm">
                                <CardContent className="p-0">
                                  <button
                                    onClick={() => toggleQuestion(questionId)}
                                    className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                                  >
                                    <div className="flex items-center justify-between">
                                      <h4 className="text-lg font-semibold pr-4">
                                        {faq.question}
                                      </h4>
                                      <ChevronDown
                                        className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''
                                          }`}
                                      />
                                    </div>
                                  </button>

                                  <AnimatePresence>
                                    {isOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="px-6 pb-6">
                                          <p className="text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                          </p>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </CardContent>
                              </Card>
                            )
                          })}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Category View
                <div className="space-y-6">
                  {faqCategories
                    .filter(category => category.id === activeCategory)
                    .map((category) => (
                      <div key={category.id} className="space-y-6">
                        <div className="flex items-center space-x-3">
                          <category.icon className="w-8 h-8 text-primary" />
                          <h2 className="text-2xl font-bold">{category.title}</h2>
                        </div>

                        <div className="space-y-4">
                          {category.questions.map((faq, index) => {
                            const questionId = `${category.id}-${index}`
                            const isOpen = openQuestions.includes(questionId)

                            return (
                              <motion.div
                                key={questionId}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                              >
                                <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                                  <CardContent className="p-0">
                                    <button
                                      onClick={() => toggleQuestion(questionId)}
                                      className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                                    >
                                      <div className="flex items-center justify-between">
                                        <h4 className="text-lg font-semibold pr-4">
                                          {faq.question}
                                        </h4>
                                        <ChevronDown
                                          className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                      </div>
                                    </button>

                                    <AnimatePresence>
                                      {isOpen && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.3 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="px-6 pb-6">
                                            <p className="text-muted-foreground leading-relaxed">
                                              {faq.answer}
                                            </p>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Still Have <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Can't find what you're looking for? Our friendly team is here to help you with any questions about our treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/book">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Safe & Certified</h3>
              <p className="text-muted-foreground">
                All treatments performed by qualified practitioners using FDA-approved products
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Excellent Results</h3>
              <p className="text-muted-foreground">
                Over 1000 satisfied clients with natural-looking, beautiful results
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Free Consultation</h3>
              <p className="text-muted-foreground">
                Comprehensive consultation with no obligation to help you make informed decisions
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}