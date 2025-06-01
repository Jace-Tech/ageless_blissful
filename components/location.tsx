import React from "react"
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Clock, MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { locations } from '@/data/location'


interface locationProps {
  subtitle: string;
  title: string;
}
const LocationSection: React.FC<locationProps> = ({ subtitle, title }) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our <span className="gradient-text">{title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-semibold">{location.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{location.address}</p>
                    <p className="text-muted-foreground">{location.city}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{location.openingHoursText}</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/locations#${location.id}`}>
                      <MapPin className="w-4 h-4 mr-2" />
                      View Location Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocationSection