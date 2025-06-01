"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock, User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { toast } from 'sonner'

const services = [
  "Botox Treatments",
  "Dermal Fillers",
  "PRP Therapy",
  "Microneedling",
  "Dermaplaning",
  "Hair Loss Treatment",
  "Fat Dissolving",
  "Consultation Only"
]

const locations = [
  "London - Lavender Hill",
  "Northampton - Abington Street",
  "Lagos - Ajao Estate"
]

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
]

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    date: '',
    time: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with booking data
      const subject = encodeURIComponent(`Appointment Booking Request - ${formData.service}`)
      const body = encodeURIComponent(
        `New Appointment Booking Request\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Service: ${formData.service}\n` +
        `Location: ${formData.location}\n` +
        `Preferred Date: ${formData.date}\n` +
        `Preferred Time: ${formData.time}\n\n` +
        `Additional Message:\n${formData.message}\n\n` +
        `Please confirm this appointment or suggest alternative times.`
      )

      const mailtoLink = `mailto:bookings@agelessblissful.com?subject=${subject}&body=${body}`
      window.location.href = mailtoLink

      toast.success("Booking request sent! We'll contact you within 24 hours to confirm your appointment.")

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        date: '',
        time: '',
        message: ''
      })
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get tomorrow's date as minimum date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

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
              Book Your <span className="gradient-text">Consultation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Schedule your free consultation and take the first step towards enhancing your natural beauty
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge variant="secondary" className="px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Free Consultation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                No Obligation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Expert Advice
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold">Book Your Appointment</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <User className="w-5 h-5 text-primary mr-2" />
                        Personal Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+44 20 1234 5678"
                        />
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Sparkles className="w-5 h-5 text-primary mr-2" />
                        Appointment Details
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="service">Service of Interest *</Label>
                          <Select onValueChange={(value) => handleSelectChange('service', value)} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="location">Preferred Location *</Label>
                          <Select onValueChange={(value) => handleSelectChange('location', value)} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                            <SelectContent>
                              {locations.map((location) => (
                                <SelectItem key={location} value={location}>
                                  {location}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date *</Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            required
                            min={minDate}
                            value={formData.date}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="time">Preferred Time *</Label>
                          <Select onValueChange={(value) => handleSelectChange('time', value)} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <MessageSquare className="w-5 h-5 text-primary mr-2" />
                        Additional Information
                      </h3>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your goals, concerns, or any questions you have..."
                          rows={4}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending Request..."
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Free Consultation
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* What to Expect */}
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    What to Expect
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p>Comprehensive consultation (30-45 minutes)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p>Personalized treatment plan discussion</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p>No pressure or obligation to proceed</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p>Detailed pricing and aftercare information</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p>Opportunity to ask questions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <div>
                        <p className="font-medium">London</p>
                        <Link href="tel:+442079460958" className="text-primary hover:underline">
                          +44 20 7946 0958
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <div>
                        <p className="font-medium">Northampton</p>
                        <Link href="tel:+441604123456" className="text-primary hover:underline">
                          +44 1604 123456
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <div>
                        <p className="font-medium">Lagos</p>
                        <Link href="#" className="text-primary hover:underline">
                          +234 812 345 6789
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <Link href="mailto:bookings@agelessblissful.com" className="text-primary hover:underline">
                        bookings@agelessblissful.com
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Opening Hours */}
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    Opening Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Need Immediate Help?</h4>
                  <p className="text-sm text-muted-foreground">
                    Call us directly for urgent inquiries or same-day appointments.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="tel:+442079460958">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Booking <span className="gradient-text">FAQ</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about booking your consultation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Is the consultation really free?",
                answer: "Yes, absolutely! Your initial consultation is completely free with no obligation to proceed with any treatment."
              },
              {
                question: "How long is the consultation?",
                answer: "Consultations typically last 30-45 minutes, giving us plenty of time to discuss your goals and answer all your questions."
              },
              {
                question: "Can I book same-day appointments?",
                answer: "We try to accommodate same-day requests when possible. Call us directly for the best chance of same-day availability."
              },
              {
                question: "What should I bring to my consultation?",
                answer: "Just bring yourself and any questions you have. We'll provide all the information you need about treatments and pricing."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
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
              Have more questions about booking?
            </p>
            <Button asChild variant="outline">
              <Link href="/faq">
                View All FAQ
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}