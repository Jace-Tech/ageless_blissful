"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle, MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { toast } from 'sonner'
import { Contact } from '@/data/contants'
import { useCountry } from '@/hooks/use-country'
import { locations } from '@/data/location'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      { label: "London", value: Contact.LONDON_PHONE, href: `tel:${Contact.LONDON_PHONE}` },
      { label: "Northampton", value: Contact.NORTHAMPTON_PHONE, href: `tel:${Contact.NORTHAMPTON_PHONE}` },
      { label: "Lagos", value: Contact.LAGOS_PHONE, href: `tel:${Contact.LAGOS_PHONE}` },
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      { label: "General Inquiries", value: Contact.INFO_EMAIL, href: `mailto:${Contact.INFO_EMAIL}` },
      { label: "Bookings", value: Contact.BOOKING_EMAIL, href: `mailto:${Contact.BOOKING_EMAIL}` },
    ]
  },
  {
    icon: MapPin,
    title: "Locations",
    details: [
      { label: "London", value: "151 Lavender Hill, SW11 5QJ", href: "/locations#london" },
      { label: "Northampton", value: "Abington Street, NN1 2AJ", href: "/locations#northampton" },
      { label: "Lagos", value: "24 Awoniyi Street, off Oslo Way, Ajao Estate", href: "/locations#lagos" }
    ]
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: [
      { label: "Mon-Fri", value: "9:00 AM - 6:00 PM", href: null },
      { label: "Saturday", value: "9:00 AM - 5:00 PM", href: null },
      { label: "Sunday", value: "Closed", href: null }
    ]
  }
]

const subjects = [
  "General Inquiry",
  "Book Consultation",
  "Treatment Information",
  "Pricing Questions",
  "Aftercare Support",
  "Complaint or Feedback",
  "Other"
]

export default function ContactPage() {
  const { isNigerian } = useCountry()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      )

      const mailtoLink = `mailto:${Contact.INFO_EMAIL}?subject=${subject}&body=${body}`
      window.location.href = mailtoLink

      toast.success("Email client opened! Please send the email to complete your inquiry.")

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const details = locations.reduce((acc, location) => {
    return {
      ...acc,
      [location.id]: location,
    }
  }, {})



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
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Get in touch with our team for consultations, questions, or to book your appointment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help with any questions about our treatments or to schedule your consultation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-sm">
                          <p className="font-medium text-muted-foreground">{detail.label}</p>
                          {detail.href ? (
                            <Link
                              href={detail.href}
                              className="text-primary hover:underline"
                            >
                              {detail.value}
                            </Link>
                          ) : (
                            <p>{detail.value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Actions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">Send us a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+44 20 1234 5678"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select onValueChange={handleSubjectChange} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your inquiry or how we can help you..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">Book Free Consultation</h4>
                          <p className="text-sm text-muted-foreground">Schedule your complimentary consultation</p>
                        </div>
                        <Button asChild>
                          <Link href="/book">Book Now</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">Call Us Directly</h4>
                          <p className="text-sm text-muted-foreground">Speak with our team immediately</p>
                        </div>
                        <Button asChild variant="outline">
                          <Link href={`tel:${isNigerian ? Contact.LAGOS_PHONE : Contact.LONDON_PHONE}`}>Call Now</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">Live Chat</h4>
                          <p className="text-sm text-muted-foreground">Chat with us in real-time</p>
                        </div>
                        <Button variant="outline" disabled>
                          Coming Soon
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* FAQ Link */}
              <Card className="border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Have Questions?</h4>
                  <p className="text-sm text-muted-foreground">
                    Check our FAQ section for quick answers to common questions about treatments, pricing, and more.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/faq">
                      View FAQ
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Response Times
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone calls:</span>
                      <span className="font-medium">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email inquiries:</span>
                      <span className="font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Consultation bookings:</span>
                      <span className="font-medium">Same day</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Find us at our convenient locations in London, Northampton, and Lagos
            </p>
          </motion.div>

          <div className="grid align-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <motion.div
                initial={{ opacity: 0, x: (index === 0 ? -1 : 1) * 20 * (index + 1) }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: index * 0.2 } }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <MapPin className="w-5 h-5 text-primary mr-2" />
                      {location.name}
                    </h3>
                    <div className="relative aspect-[16/10] bg-muted rounded-lg overflow-hidden mb-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <MapPin className="w-12 h-12 text-primary mx-auto" />
                          <p className="text-muted-foreground">Interactive map coming soon</p>
                          <p className="text-sm text-muted-foreground">
                            {location.address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Address:</strong> {location.address}</p>
                      <p><strong>Phone:</strong> <Link href={`tel:${location.phone}`} className="text-primary hover:underline">{location.phone}</Link></p>
                      <p><strong>Nearest Station:</strong> {location.nearestStation}</p>
                    </div>
                    <Button asChild className="w-full mt-4">
                      <Link href={`/locations#${location.id}`}>
                        View Location Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      <Footer />
    </div >
  )
}