"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Mail, Phone, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function TermsPage() {
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
              <FileText className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
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
                <h2>Agreement to Terms</h2>
                <p>
                  By accessing and using the services of Ageless Blissful, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>

                <h2>Services Description</h2>
                <p>
                  Ageless Blissful provides aesthetic treatment services including but not limited to Botox injections, dermal fillers, PRP therapy, microneedling, and related cosmetic procedures. All treatments are performed by qualified practitioners in our licensed facilities.
                </p>

                <h2>Eligibility and Consent</h2>
                <p>To receive our services, you must:</p>
                <ul>
                  <li>Be at least 18 years of age</li>
                  <li>Provide accurate and complete information</li>
                  <li>Have the legal capacity to enter into this agreement</li>
                  <li>Provide informed consent for all treatments</li>
                  <li>Disclose relevant medical history and conditions</li>
                </ul>

                <h2>Appointment and Cancellation Policy</h2>
                <h3>Booking</h3>
                <ul>
                  <li>Appointments must be booked in advance</li>
                  <li>A consultation is required before any treatment</li>
                  <li>We reserve the right to refuse service</li>
                </ul>

                <h3>Cancellations</h3>
                <ul>
                  <li>24-hour notice required for cancellations</li>
                  <li>Late cancellations may incur charges</li>
                  <li>No-shows will be charged the full appointment fee</li>
                </ul>

                <h2>Payment Terms</h2>
                <ul>
                  <li>Payment is due at the time of service</li>
                  <li>We accept cash, card, and approved payment plans</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Refunds are provided only in exceptional circumstances</li>
                </ul>

                <h2>Treatment Risks and Limitations</h2>
                <p>You acknowledge that:</p>
                <ul>
                  <li>All medical procedures carry inherent risks</li>
                  <li>Results may vary between individuals</li>
                  <li>No guarantee of specific outcomes is provided</li>
                  <li>Follow-up treatments may be necessary</li>
                  <li>Adverse reactions, though rare, are possible</li>
                </ul>

                <h2>Client Responsibilities</h2>
                <p>You agree to:</p>
                <ul>
                  <li>Provide accurate medical history and information</li>
                  <li>Follow all pre and post-treatment instructions</li>
                  <li>Attend all scheduled follow-up appointments</li>
                  <li>Report any adverse reactions immediately</li>
                  <li>Maintain realistic expectations about results</li>
                </ul>

                <h2>Confidentiality and Privacy</h2>
                <p>
                  We maintain strict confidentiality regarding your personal and medical information in accordance with applicable privacy laws and professional standards. Your information will not be shared without your consent except as required by law.
                </p>

                <h2>Photography and Marketing</h2>
                <p>
                  Before and after photographs may be taken for medical records. Use of photographs for marketing purposes requires separate written consent. You may withdraw consent for marketing use at any time.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Ageless Blissful's liability is limited to the cost of the treatment provided. We are not liable for indirect, consequential, or punitive damages.
                </p>

                <h2>Professional Standards</h2>
                <p>
                  Our practitioners adhere to the highest professional standards and are bound by relevant professional codes of conduct. All treatments are performed in accordance with current medical guidelines and best practices.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                  All content on our website, including text, images, logos, and designs, is the property of Ageless Blissful and is protected by copyright and trademark laws.
                </p>

                <h2>Dispute Resolution</h2>
                <p>
                  Any disputes arising from these terms or our services will be resolved through good faith negotiation. If resolution cannot be reached, disputes will be subject to the jurisdiction of the courts of England and Wales.
                </p>

                <h2>Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
                </p>

                <h2>Severability</h2>
                <p>
                  If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                </p>

                <h2>Governing Law</h2>
                <p>
                  These terms are governed by the laws of England and Wales, without regard to conflict of law principles.
                </p>

                <h2>Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us:</p>
                <div className="not-prose">
                  <div className="flex items-center space-x-3 mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>legal@agelessblissful.com</span>
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