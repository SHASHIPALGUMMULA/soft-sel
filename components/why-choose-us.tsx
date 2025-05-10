"use client"

import { motion } from "framer-motion"
import { Shield, TrendingUp, Clock, Users } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Best Market Rates",
      description:
        "Our extensive network of buyers ensures you get the highest possible value for your software licenses.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Transactions",
      description: "End-to-end encryption and secure transfer protocols protect your sensitive license information.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Processing",
      description: "From valuation to payment, our streamlined process typically takes less than a week to complete.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Support",
      description:
        "Our team of software licensing experts is available to guide you through every step of the process.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="why-choose-us" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg">
            SoftSell offers unmatched benefits when it comes to reselling your software licenses.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="bg-card rounded-lg p-6 shadow-sm border" variants={itemVariants}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
