"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Cookie, Mail, Phone, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function CookiesPage() {
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
              <Cookie className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
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
                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and improving our website&apos;s functionality.
                </p>

                <h2>How We Use Cookies</h2>
                <p>Ageless Blissful uses cookies for the following purposes:</p>
                <ul>
                  <li>To ensure our website functions properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To improve our website&apos;s performance and user experience</li>
                  <li>To provide personalized content and recommendations</li>
                </ul>

                <h2>Types of Cookies We Use</h2>
                
                <h3>Essential Cookies</h3>
                <p>
                  These cookies are necessary for our website to function properly. They enable basic features like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
                </p>

                <h3>Performance Cookies</h3>
                <p>
                  These cookies collect information about how visitors use our website, such as which pages are visited most often and if users receive error messages. This information helps us improve our website&apos;s performance.
                </p>

                <h3>Functionality Cookies</h3>
                <p>
                  These cookies allow our website to remember choices you make (such as your preferred language or region) and provide enhanced, more personal features.
                </p>

                <h3>Analytics Cookies</h3>
                <p>
                  We use analytics cookies to understand how visitors interact with our website. This helps us analyze data about web page traffic and improve our website to better meet user needs.
                </p>

                <h2>Third-Party Cookies</h2>
                <p>
                  Some cookies on our website are set by third-party services. We use these services to enhance your experience and provide additional functionality:
                </p>
                <ul>
                  <li>Google Analytics - for website analytics and performance monitoring</li>
                  <li>Social media platforms - for social sharing functionality</li>
                  <li>Content delivery networks - for improved website performance</li>
                </ul>

                <h2>Managing Your Cookie Preferences</h2>
                
                <h3>Browser Settings</h3>
                <p>
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul>
                  <li>View and delete cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when you close your browser</li>
                  <li>Set your browser to notify you when cookies are being set</li>
                </ul>

                <h3>Disabling Cookies</h3>
                <p>
                  Please note that disabling cookies may affect the functionality of our website. Some features may not work properly if cookies are disabled.
                </p>

                <h2>Cookie Consent</h2>
                <p>
                  When you first visit our website, you will see a cookie banner asking for your consent to use cookies. You can choose to accept all cookies, reject non-essential cookies, or customize your preferences.
                </p>

                <h2>How to Delete Cookies</h2>
                <p>
                  If you want to delete cookies that have already been set on your device, you can do so through your browser settings. The process varies depending on your browser:
                </p>
                <ul>
                  <li><strong>Chrome:</strong> Settings {'->'} Privacy and security {'->'} Clear browsing data</li>
                  <li><strong>Firefox:</strong> Options {'->'} Privacy & Security {'->'} Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences {'->'} Privacy {'->'} Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings {'->'} Privacy, search, and services {'->'} Clear browsing data</li>
                </ul>

                <h2>Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>

                <h2>Your Rights</h2>
                <p>
                  Under applicable data protection laws, you have certain rights regarding cookies and personal data:
                </p>
                <ul>
                  <li>The right to be informed about cookie usage</li>
                  <li>The right to give or withdraw consent</li>
                  <li>The right to access information about cookies</li>
                  <li>The right to object to certain types of cookies</li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
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