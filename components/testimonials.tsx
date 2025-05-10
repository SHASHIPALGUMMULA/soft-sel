"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was incredibly smooth, and their valuation exceeded our expectations.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "Nexus Technologies",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "SJ",
    },
    {
      quote:
        "As a growing startup, we needed to optimize our software expenses. SoftSell not only helped us sell our excess licenses but also connected us with discounted options for our new requirements.",
      name: "Michael Chen",
      role: "Operations Manager",
      company: "Horizon Innovations",
      avatar: "/placeholder.svg?height=100&width=100",
      initials: "MC",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="testimonials" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what businesses like yours have experienced with SoftSell.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-8 w-8 text-primary opacity-50" />
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                  <div className="flex items-center pt-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
