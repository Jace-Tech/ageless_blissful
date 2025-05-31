"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2,
  BookOpen,
  Tag,
  Heart,
  MessageCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/header'
import Footer from '@/components/footer'

const blogPosts = [
  {
    id: "botox-myths-facts",
    title: "Botox Myths vs Facts: What You Need to Know",
    excerpt: "Separating fact from fiction about Botox treatments. Learn the truth about safety, effectiveness, and what to expect from this popular aesthetic treatment.",
    content: `
      <p>Botox has become one of the most popular non-surgical aesthetic treatments worldwide, but with popularity comes misconceptions. Let's separate fact from fiction and explore what you really need to know about Botox treatments.</p>

      <h2>What is Botox?</h2>
      <p>Botox is a purified protein derived from botulinum toxin type A. When injected in small, controlled amounts, it temporarily relaxes specific facial muscles that cause wrinkles and fine lines. The treatment has been FDA-approved for cosmetic use since 2002 and has an excellent safety record when administered by qualified practitioners.</p>

      <h2>Common Myths About Botox</h2>
      
      <h3>Myth 1: Botox is Dangerous</h3>
      <p><strong>Fact:</strong> When administered by a qualified practitioner, Botox is extremely safe. The doses used for cosmetic treatments are tiny and localized, making serious side effects extremely rare. Millions of treatments are performed safely each year worldwide.</p>

      <h3>Myth 2: Botox Will Make You Look Frozen</h3>
      <p><strong>Fact:</strong> When done correctly, Botox should look natural. The "frozen" look occurs when too much product is used or when it's injected incorrectly. A skilled practitioner will use the right amount to reduce wrinkles while maintaining natural facial expressions.</p>

      <h3>Myth 3: Botox is Only for Older People</h3>
      <p><strong>Fact:</strong> Many people in their 20s and 30s use Botox preventatively to slow the formation of wrinkles. Starting earlier with smaller amounts can actually help prevent deeper lines from forming.</p>

      <h3>Myth 4: Botox is Permanent</h3>
      <p><strong>Fact:</strong> Botox is temporary, typically lasting 3-6 months. This is actually an advantage because it allows for adjustments and ensures that any unwanted effects are not permanent.</p>

      <h2>What to Expect During Treatment</h2>
      <p>A typical Botox treatment takes 15-30 minutes and involves several small injections into the target muscles. Most people describe the sensation as a small pinch. There's no downtime required, and you can return to normal activities immediately.</p>

      <h2>Results and Aftercare</h2>
      <p>You'll start to see results within 3-7 days, with full effects visible after two weeks. To maintain results, treatments are typically repeated every 3-6 months. Following your practitioner's aftercare instructions will help ensure optimal results.</p>

      <h2>Choosing the Right Practitioner</h2>
      <p>The key to safe, effective Botox treatment is choosing a qualified, experienced practitioner. Look for someone who:</p>
      <ul>
        <li>Has medical training and certification in aesthetic treatments</li>
        <li>Uses only FDA-approved products</li>
        <li>Provides thorough consultations</li>
        <li>Has a portfolio of natural-looking results</li>
        <li>Offers follow-up care and support</li>
      </ul>

      <p>At Ageless Blissful, our qualified practitioners have extensive experience in Botox treatments and are committed to achieving natural, beautiful results for every client.</p>
    `,
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
    content: `
      <p>A well-designed skincare routine is essential for maintaining and enhancing the results of professional aesthetic treatments. Whether you've had Botox, fillers, or skin rejuvenation treatments, the right skincare regimen can help you achieve optimal, long-lasting results.</p>

      <h2>The Foundation: Understanding Your Skin</h2>
      <p>Before building your routine, it's important to understand your skin type and any specific concerns you want to address. This knowledge will guide your product choices and help you create a routine that works synergistically with your professional treatments.</p>

      <h2>Essential Steps for Post-Treatment Skincare</h2>

      <h3>1. Gentle Cleansing</h3>
      <p>Use a mild, non-irritating cleanser that removes impurities without stripping your skin's natural barrier. Avoid harsh scrubs or exfoliants immediately after treatments.</p>

      <h3>2. Hydration is Key</h3>
      <p>Well-hydrated skin heals faster and maintains treatment results longer. Look for moisturizers with hyaluronic acid, ceramides, or peptides to support skin barrier function.</p>

      <h3>3. Sun Protection</h3>
      <p>Daily SPF is non-negotiable, especially after aesthetic treatments. Use a broad-spectrum sunscreen with at least SPF 30 to protect your investment and prevent premature aging.</p>

      <h3>4. Active Ingredients</h3>
      <p>Incorporate proven ingredients like retinol, vitamin C, and niacinamide, but introduce them gradually and follow your practitioner's guidance on timing after treatments.</p>

      <h2>Timing Your Routine with Treatments</h2>
      
      <h3>Pre-Treatment Preparation</h3>
      <p>In the weeks leading up to your treatment, focus on strengthening your skin barrier and avoiding irritating products. This helps ensure optimal healing and results.</p>

      <h3>Post-Treatment Care</h3>
      <p>Follow your practitioner's specific aftercare instructions, which may include avoiding certain products or activities for a specified period.</p>

      <h2>Product Recommendations by Treatment Type</h2>

      <h3>After Botox or Fillers</h3>
      <ul>
        <li>Gentle, fragrance-free cleanser</li>
        <li>Hydrating serum with hyaluronic acid</li>
        <li>Rich moisturizer for barrier repair</li>
        <li>Broad-spectrum SPF 30+</li>
      </ul>

      <h3>After Microneedling or PRP</h3>
      <ul>
        <li>Mild, pH-balanced cleanser</li>
        <li>Growth factor serums</li>
        <li>Healing balms with ceramides</li>
        <li>Mineral sunscreen</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <p>Don't over-complicate your routine or introduce too many new products at once. Avoid harsh physical exfoliants and be patient with results – consistency is more important than complexity.</p>

      <p>Remember, your skincare routine should complement, not compete with, your professional treatments. Always consult with your aesthetic practitioner for personalized advice.</p>
    `,
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
    content: `
      <p>PRP therapy represents a revolutionary approach to skin rejuvenation, using your body's own healing mechanisms to restore youthful vitality to your skin. This natural treatment has gained popularity for its ability to improve skin texture, reduce fine lines, and promote overall skin health.</p>

      <h2>What is PRP Therapy?</h2>
      <p>Platelet-Rich Plasma (PRP) therapy involves drawing a small amount of your blood, processing it to concentrate the platelets, and then reintroducing this platelet-rich plasma to your skin. Platelets contain growth factors that stimulate cellular regeneration and collagen production.</p>

      <h2>The Science Behind PRP</h2>
      <p>Platelets are your body's natural healers. When concentrated and applied to the skin, they release growth factors that:</p>
      <ul>
        <li>Stimulate collagen and elastin production</li>
        <li>Improve blood circulation</li>
        <li>Accelerate tissue repair</li>
        <li>Promote new cell growth</li>
        <li>Enhance skin texture and tone</li>
      </ul>

      <h2>Benefits of PRP Therapy</h2>

      <h3>Natural and Safe</h3>
      <p>Since PRP uses your own blood, there's no risk of allergic reactions or rejection. It's a completely natural treatment that works with your body's existing healing processes.</p>

      <h3>Versatile Treatment</h3>
      <p>PRP can be used on the face, neck, décolletage, and hands. It's also effective for hair restoration and can be combined with microneedling for enhanced results.</p>

      <h3>Long-lasting Results</h3>
      <p>While you may see initial improvements within a few weeks, the full benefits of PRP develop over 2-3 months as new collagen forms. Results can last 6-12 months or longer.</p>

      <h2>The PRP Treatment Process</h2>

      <h3>Step 1: Blood Collection</h3>
      <p>A small amount of blood (similar to a routine blood test) is drawn from your arm.</p>

      <h3>Step 2: Processing</h3>
      <p>The blood is placed in a centrifuge to separate and concentrate the platelets.</p>

      <h3>Step 3: Application</h3>
      <p>The PRP is applied to your skin through micro-injections or combined with microneedling for deeper penetration.</p>

      <h2>What to Expect</h2>
      <p>The treatment typically takes 45-60 minutes. You may experience mild redness and swelling for 24-48 hours, similar to a mild sunburn. Most people can return to normal activities immediately.</p>

      <h2>Ideal Candidates for PRP</h2>
      <p>PRP therapy is suitable for most people looking to improve their skin naturally. It's particularly beneficial for those with:</p>
      <ul>
        <li>Fine lines and wrinkles</li>
        <li>Uneven skin texture</li>
        <li>Acne scarring</li>
        <li>Sun damage</li>
        <li>Dull or tired-looking skin</li>
      </ul>

      <h2>Combining PRP with Other Treatments</h2>
      <p>PRP works excellently as a standalone treatment or in combination with other procedures like microneedling, chemical peels, or laser treatments. Your practitioner can design a comprehensive treatment plan tailored to your specific needs.</p>

      <p>At Ageless Blissful, we're excited to offer this innovative, natural approach to skin rejuvenation. Contact us to learn more about how PRP therapy can help you achieve your skin goals.</p>
    `,
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
    content: `
      <p>Choosing the right aesthetic practitioner is crucial for achieving safe, natural-looking results. With the growing popularity of aesthetic treatments, it's important to know what to look for when selecting a provider for your cosmetic procedures.</p>

      <h2>Essential Qualifications to Look For</h2>

      <h3>Medical Background</h3>
      <p>Look for practitioners with a medical background, such as doctors, nurses, or physician assistants. They should have specific training in aesthetic medicine and be licensed to perform the treatments you're considering.</p>

      <h3>Specialized Training</h3>
      <p>Aesthetic medicine requires specialized skills beyond basic medical training. Your practitioner should have completed courses in:</p>
      <ul>
        <li>Facial anatomy</li>
        <li>Injection techniques</li>
        <li>Product knowledge</li>
        <li>Complication management</li>
        <li>Aesthetic assessment</li>
      </ul>

      <h3>Ongoing Education</h3>
      <p>The field of aesthetic medicine is constantly evolving. Choose a practitioner who stays current with the latest techniques, products, and safety protocols through continuing education.</p>

      <h2>What to Look for During Your Consultation</h2>

      <h3>Thorough Assessment</h3>
      <p>A good practitioner will conduct a comprehensive assessment of your facial anatomy, skin condition, and aesthetic goals before recommending any treatment.</p>

      <h3>Honest Communication</h3>
      <p>Your practitioner should be honest about what treatments can and cannot achieve, potential risks, and realistic timelines for results.</p>

      <h3>Customized Treatment Plans</h3>
      <p>Avoid practitioners who use a one-size-fits-all approach. Your treatment plan should be tailored to your unique features and goals.</p>

      <h2>Red Flags to Avoid</h2>

      <h3>Pressure to Book Immediately</h3>
      <p>Be wary of practitioners who pressure you to book treatments on the spot or offer deals that seem too good to be true.</p>

      <h3>Lack of Proper Consultation</h3>
      <p>If a practitioner doesn't take time to assess your needs or discuss risks and benefits, look elsewhere.</p>

      <h3>Unlicensed Providers</h3>
      <p>Never receive treatments from unlicensed providers or in non-medical settings like salons or spas without proper medical oversight.</p>

      <h2>Questions to Ask Your Practitioner</h2>
      <ul>
        <li>What are your qualifications and training?</li>
        <li>How many of these procedures have you performed?</li>
        <li>What products do you use and why?</li>
        <li>What are the potential risks and side effects?</li>
        <li>Can I see before and after photos of your work?</li>
        <li>What is your policy on touch-ups or complications?</li>
      </ul>

      <h2>The Importance of the Clinical Environment</h2>
      <p>The clinic should be clean, professional, and equipped with proper medical facilities. There should be protocols in place for handling emergencies and complications.</p>

      <h2>Building a Long-term Relationship</h2>
      <p>Aesthetic treatments often require ongoing maintenance. Choose a practitioner you trust and feel comfortable with for long-term care.</p>

      <h2>Trust Your Instincts</h2>
      <p>If something doesn't feel right during your consultation, don't hesitate to seek a second opinion. Your safety and satisfaction should always be the top priority.</p>

      <p>At Ageless Blissful, we pride ourselves on meeting all these criteria. Our qualified practitioners are committed to providing safe, effective treatments in a professional, caring environment.</p>
    `,
    image: "https://i.pinimg.com/originals/1e/14/5b/1e145b7b9133b8d24cd7184a8208621d.jpg",
    author: "Juliet Asemota",
    date: "2023-12-28",
    readTime: "8 min read",
    category: "Safety",
    tags: ["Safety", "Practitioner", "Qualifications", "Tips"],
    featured: false
  }
]

const relatedPosts = [
  {
    id: "skincare-routine-aesthetic-treatments",
    title: "Building the Perfect Skincare Routine",
    image: "https://i.pinimg.com/originals/61/1c/f7/611cf76d55a9f04df7098381638e806c.png"
  },
  {
    id: "prp-therapy-natural-rejuvenation",
    title: "PRP Therapy: Natural Rejuvenation",
    image: "https://i.pinimg.com/originals/e7/59/52/e759525a0a02a1ab6955fd13a5b70105.jpg"
  },
  {
    id: "choosing-right-aesthetic-practitioner",
    title: "Choosing the Right Practitioner",
    image: "https://i.pinimg.com/originals/1e/14/5b/1e145b7b9133b8d24cd7184a8208621d.jpg"
  }
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.id === params.slug)
  
  if (!post) {
    notFound()
  }

  const otherPosts = relatedPosts.filter(p => p.id !== post.id).slice(0, 2)

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
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="space-y-4">
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
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Lead Aesthetic Practitioner</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Tag className="w-5 h-5 text-primary mr-2" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Card className="mt-12 border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Ready to Start Your Journey?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Book your free consultation today and let our experts help you achieve your aesthetic goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button asChild size="lg">
                      <Link href="/book">
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Consultation
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/contact">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Ask Questions
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 text-primary mr-2" />
                      Quick Navigation
                    </h3>
                    <div className="space-y-2 text-sm">
                      <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                        Introduction
                      </Link>
                      <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                        Key Points
                      </Link>
                      <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                        What to Expect
                      </Link>
                      <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                        Conclusion
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Author Info */}
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{post.author}</h4>
                      <p className="text-sm text-muted-foreground">Lead Aesthetic Practitioner</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Experienced aesthetic practitioner with a passion for natural enhancement and client safety.
                    </p>
                    <Button asChild size="sm" variant="outline" className="w-full">
                      <Link href="/about">
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">Stay Updated</h4>
                    <p className="text-sm text-muted-foreground">
                      Get the latest beauty tips and treatment insights.
                    </p>
                    <Button className="w-full">
                      Subscribe
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Related <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Continue reading about aesthetic treatments and beauty tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <Button asChild variant="ghost" className="p-0 h-auto">
                        <Link href={`/blog/${relatedPost.id}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}