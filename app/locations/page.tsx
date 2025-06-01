"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Clock, 
  Car, 
  Train, 
  Navigation,
  Calendar,
  Star,
  CheckCircle,
  Mail,
  Wifi,
  Coffee,
  Shield,
  Accessibility
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/header'
import Footer from '@/components/footer'

const locations = [
  {
    id: "london",
    name: "London Clinic",
    address: "151 Lavender Hill",
    city: "London",
    postcode: "SW11 5QJ",
    phone: "+44 20 7946 0958",
    email: "london@agelessblissful.com",
    image: "https://i.pinimg.com/originals/9a/22/61/9a2261b14ef3fb8bae5f4da4ddfa7acc.jpg",
    interiorImage: "https://i.pinimg.com/736x/cc/66/0e/cc660ee6f8f8b2559d691c077f9a4f63.jpg",
    description: "Our flagship London clinic offers a luxurious and tranquil environment for all your aesthetic treatment needs. Located in the heart of Battersea, we provide easy access to premium treatments in a sophisticated setting.",
    features: [
      "State-of-the-art treatment rooms",
      "Comfortable consultation areas",
      "Private parking available",
      "Wheelchair accessible",
      "Free WiFi",
      "Refreshment area"
    ],
    openingHours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 5:00 PM",
      "Sunday": "Closed"
    },
    transport: {
      tube: "Clapham Junction (5 min walk)",
      bus: "Routes 77, 87, 156, 219",
      parking: "Free parking available on-site",
      accessibility: "Fully wheelchair accessible"
    },
    nearby: [
      "Battersea Park - 10 min walk",
      "Clapham Junction Station - 5 min walk",
      "Northcote Road shops - 8 min walk",
      "Battersea Power Station - 15 min walk"
    ]
  },
  {
    id: "northampton",
    name: "Northampton Clinic",
    address: "Abington Street",
    city: "Northampton",
    postcode: "NN1 2AJ",
    phone: "+44 1604 123456",
    email: "northampton@agelessblissful.com",
    image: "https://i.pinimg.com/originals/79/a4/d4/79a4d4b9990351bc3ee1c996ef26e48b.jpg",
    interiorImage: "https://i.pinimg.com/736x/66/e0/84/66e084b0fb0c83882d1b05c08daa7091.jpg",
    description: "Our Northampton clinic brings premium aesthetic treatments to the heart of the town center. With modern facilities and a welcoming atmosphere, we provide exceptional care in a convenient location.",
    features: [
      "Modern treatment facilities",
      "Spacious waiting area",
      "Town center location",
      "Accessible entrance",
      "Complimentary WiFi",
      "Tea and coffee facilities"
    ],
    openingHours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 5:00 PM",
      "Sunday": "Closed"
    },
    transport: {
      train: "Northampton Station (10 min walk)",
      bus: "Town center bus routes",
      parking: "Public car parks nearby",
      accessibility: "Ground floor access"
    },
    nearby: [
      "Grosvenor Shopping Centre - 2 min walk",
      "Market Square - 5 min walk",
      "Northampton Station - 10 min walk",
      "Delapré Abbey - 15 min drive"
    ]
  },
  {
    id: "lagos",
    name: "Lagos Clinic",
    address: "24 Awoniyi Street, off Oslo Way",
    city: "Ajao Estate, Lagos",
    postcode: "101233",
    phone: "+234 123 456 7890",
    email: "lagos@agelessblissful.com",
    image: "https://i.pinimg.com/originals/9a/22/61/9a2261b14ef3fb8bae5f4da4ddfa7acc.jpg",
    interiorImage: "https://i.pinimg.com/736x/cc/66/0e/cc660ee6f8f8b2559d691c077f9a4f63.jpg",
    description: "Our Lagos clinic offers premium aesthetic treatments in the heart of Ajao Estate. Experience world-class care in a serene and modern environment.",
    features: [
      "Modern treatment facilities",
      "Comfortable waiting area",
      "Convenient location",
      "Air-conditioned environment",
      "Complimentary WiFi",
      "Refreshment area"
    ],
    openingHours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 5:00 PM",
      "Sunday": "Closed"
    },
    transport: {
      parking: "Street parking available",
      accessibility: "Ground floor access",
      bus: "Nearby bus routes"
    },
    nearby: [
      "Ajao Estate Market - 5 min walk",
      "Oslo Way - 2 min walk",
      "Murtala Muhammed International Airport - 15 min drive",
      "Ikeja City Mall - 20 min drive"
    ]
  }
]

export default function LocationsPage() {
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
              Our <span className="gradient-text">Locations</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Visit our premium clinics in London, Northampton, and Lagos for exceptional aesthetic treatments
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge variant="secondary" className="px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                3 Convenient Locations
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Accessibility className="w-4 h-4 mr-2" />
                Fully Accessible
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Car className="w-4 h-4 mr-2" />
                Parking Available
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                id={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* Location Header */}
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {location.name}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {location.description}
                  </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Images */}
                  <div className="space-y-6">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={location.image}
                        alt={`${location.name} exterior`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={location.interiorImage}
                        alt={`${location.name} interior`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="space-y-8">
                    {/* Contact Information */}
                    <Card className="border-0 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold flex items-center">
                          <MapPin className="w-5 h-5 text-primary mr-2" />
                          Contact Information
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <Navigation className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium">{location.address}</p>
                              <p className="text-muted-foreground">{location.city} {location.postcode}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-primary" />
                            <Link 
                              href={`tel:${location.phone}`}
                              className="text-primary hover:underline"
                            >
                              {location.phone}
                            </Link>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Mail className="w-4 h-4 text-primary" />
                            <Link 
                              href={`mailto:${location.email}`}
                              className="text-primary hover:underline"
                            >
                              {location.email}
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Opening Hours */}
                    <Card className="border-0 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold flex items-center">
                          <Clock className="w-5 h-5 text-primary mr-2" />
                          Opening Hours
                        </h3>
                        <div className="space-y-2">
                          {Object.entries(location.openingHours).map(([day, hours]) => (
                            <div key={day} className="flex justify-between items-center">
                              <span className="font-medium">{day}</span>
                              <span className="text-muted-foreground">{hours}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Features */}
                    <Card className="border-0 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold flex items-center">
                          <Star className="w-5 h-5 text-primary mr-2" />
                          Clinic Features
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {location.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-3">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="flex-1">
                        <Link href="/book">
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Appointment
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="flex-1">
                        <Link href={`tel:${location.phone}`}>
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Transport & Nearby */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Transport */}
                  <Card className="border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold flex items-center">
                        <Train className="w-5 h-5 text-primary mr-2" />
                        Getting Here
                      </h3>
                      <div className="space-y-3">
                        {Object.entries(location.transport).map(([method, info]) => (
                          <div key={method} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <div>
                              <p className="font-medium capitalize">{method.replace(/([A-Z])/g, ' $1').trim()}</p>
                              <p className="text-sm text-muted-foreground">{info}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Nearby Attractions */}
                  <Card className="border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold flex items-center">
                        <MapPin className="w-5 h-5 text-primary mr-2" />
                        Nearby Attractions
                      </h3>
                      <div className="space-y-2">
                        {location.nearby.map((attraction) => (
                          <div key={attraction} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-sm">{attraction}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Map Placeholder */}
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Navigation className="w-5 h-5 text-primary mr-2" />
                      Location Map
                    </h3>
                    <div className="relative aspect-[16/9] bg-muted rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <MapPin className="w-12 h-12 text-primary mx-auto" />
                          <p className="text-muted-foreground">Interactive map coming soon</p>
                          <p className="text-sm text-muted-foreground">
                            {location.address}, {location.city} {location.postcode}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Divider */}
                {index < locations.length - 1 && (
                  <div className="border-t border-border/50 pt-16" />
                )}
              </motion.div>
            ))}
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
              Ready to Visit Us?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose your preferred location and book your free consultation today. We're here to help you achieve your aesthetic goals.
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
                  <Phone className="w-5 h-5 mr-2" />
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