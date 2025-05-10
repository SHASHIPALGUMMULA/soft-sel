"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10" />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal.",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Get Valuation",
      description: "Receive a competitive market valuation within 24 hours based on current demand.",
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Get Paid",
      description: "Accept our offer and receive payment via your preferred method within 3-5 business days.",
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
    <section id="how-it-works" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process makes selling your unused software licenses quick and hassle-free.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 text-center shadow-sm border"
              variants={itemVariants}
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
