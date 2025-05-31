"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  BookOpen,
  TrendingUp,
  Heart,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import Header from '@/components/header'
import Footer from '@/components/footer'

const blogPosts = [
  {
    id: "botox-myths-facts",
    title: "Botox Myths vs Facts: What You Need to Know",
    excerpt: "Separating fact from fiction about Botox treatments. Learn the truth about safety, effectiveness, and what to expect from this popular aesthetic treatment.",
    content: "Botox has become one of the most popular non-surgical aesthetic treatments worldwide, but with popularity comes misconceptions...",
    image: "https://img.freepik.com/premium-photo/clinica-de-estetica-esthetician-wearing-lab-coat-explaining-botox-procedure-female-patient_579344-16316.jpg",
    author: "Juliet Asemota",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Treatment Guide",
    tags: ["Botox", "Myths", "Safety", "Education"],
    featured: true
  },
  {
    id: "skincare-routine-aesthetic-treatments",
    title: "Building the Perfect Skincare Routine to Complement Your Aesthetic Treatments",
    excerpt: "Discover how to create a skincare routine that enhances and prolongs the results of your professional aesthetic treatments.",
    content: "A well-designed skincare routine is essential for maintaining and enhancing the results of professional aesthetic treatments...",
    image: "https://i.pinimg.com/originals/61/1c/f7/611cf76d55a9f04df7098381638e806c.png",
    author: "Juliet Asemota",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Skincare",
    tags: ["Skincare", "Routine", "Aftercare", "Products"],
    featured: false
  },
  {
    id: "prp-therapy-natural-rejuvenation",
    title: "PRP Therapy: The Natural Path to Skin Rejuvenation",
    excerpt: "Explore how Platelet-Rich Plasma therapy harnesses your body's natural healing power for beautiful, rejuvenated skin.",
    content: "PRP therapy represents a revolutionary approach to skin rejuvenation, using your body's own healing mechanisms...",
    image: "https://i.pinimg.com/originals/e7/59/52/e759525a0a02a1ab6955fd13a5b70105.jpg",
    author: "Juliet Asemota",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Treatment Guide",
    tags: ["PRP", "Natural", "Rejuvenation", "Collagen"],
    featured: true
  },
  {
    id: "choosing-right-aesthetic-practitioner",
    title: "How to Choose the Right Aesthetic Practitioner",
    excerpt: "Essential tips for selecting a qualified and experienced aesthetic practitioner for safe, effective treatments.",
    content: "Choosing the right aesthetic practitioner is crucial for achieving safe, natural-looking results...",
    image: "https://i.pinimg.com/originals/1e/14/5b/1e145b7b9133b8d24cd7184a8208621d.jpg",
    author: "Juliet Asemota",
    date: "2023-12-28",
    readTime: "8 min read",
    category: "Safety",
    tags: ["Safety", "Practitioner", "Qualifications", "Tips"],
    featured: false
  }
]

const categories = [
  { name: "All Posts", count: blogPosts.length },
  { name: "Treatment Guide", count: blogPosts.filter(post => post.category === "Treatment Guide").length },
  { name: "Skincare", count: blogPosts.filter(post => post.category === "Skincare").length },
  { name: "Safety", count: blogPosts.filter(post => post.category === "Safety").length }
]

const popularTags = ["Botox", "Skincare", "PRP", "Safety", "Natural", "Rejuvenation", "Tips", "Education"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

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
              Beauty & Wellness <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Expert insights, treatment guides, and tips for your aesthetic journey
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Featured Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-primary">
                          Featured
                        </Badge>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{post.author}</span>
                          </div>
                          
                          <Button asChild variant="ghost" size="sm">
                            <Link href={`/blog/${post.id}`}>
                              Read More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">Recent Articles</h2>
                </div>
                
                <div className="space-y-8">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-0">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-l-lg">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            
                            <div className="md:col-span-2 p-6 space-y-4">
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <Badge variant="secondary">{post.category}</Badge>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{new Date(post.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                              
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {post.title}
                              </h3>
                              
                              <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                                {post.excerpt}
                              </p>
                              
                              <div className="flex items-center justify-between pt-4">
                                <div className="flex items-center space-x-2">
                                  <User className="w-4 h-4 text-muted-foreground" />
                                  <span className="text-sm text-muted-foreground">{post.author}</span>
                                </div>
                                
                                <Button asChild variant="ghost" size="sm">
                                  <Link href={`/blog/${post.id}`}>
                                    Read More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="sticky top-24 space-y-8"
              >
                {/* Categories */}
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Tag className="w-5 h-5 text-primary mr-2" />
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          className="w-full text-left p-2 rounded-lg hover:bg-muted/50 transition-colors flex items-center justify-between"
                        >
                          <span>{category.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-primary mr-2" />
                      Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground">
                      Get the latest beauty tips and treatment insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <Input placeholder="Your email address" />
                      <Button className="w-full">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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
              Ready to Start Your Aesthetic Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Book your free consultation today and let our experts help you achieve your beauty goals.
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