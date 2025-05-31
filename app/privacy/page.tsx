"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Mail, Phone, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            
            <p className="text-xl text-muted-foreground">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 prose prose-lg max-w-none">
                <h2>Introduction</h2>
                <p>
                  Ageless Blissful ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <h2>Information We Collect</h2>
                <h3>Personal Information</h3>
                <p>We may collect personal information that you provide directly to us, including:</p>
                <ul>
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Medical history and health information relevant to treatments</li>
                  <li>Appointment and treatment preferences</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul>
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system information</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and improve our aesthetic treatment services</li>
                  <li>Schedule and manage appointments</li>
                  <li>Communicate with you about treatments and services</li>
                  <li>Process payments and maintain records</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Ensure the safety and security of our services</li>
                </ul>

                <h2>Information Sharing and Disclosure</h2>
                <p>We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:</p>
                <ul>
                  <li>With healthcare providers involved in your treatment</li>
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>

                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Request data portability</li>
                </ul>

                <h2>Cookies and Tracking</h2>
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                </p>

                <h2>Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
                </p>

                <h2>Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
                </p>

                <h2>International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
                </p>

                <h2>Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Medical records are retained according to professional and legal requirements.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
                </p>

                <h2>Contact Us</h2>
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="not-prose">
                  <div className="flex items-center space-x-3 mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>privacy@agelessblissful.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+44 20 7946 0958</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}