"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="container-custom section-padding flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Turn Unused Software Licenses Into <span className="text-primary">Cash</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            SoftSell helps businesses recover value from idle software assets. Get the best market rates for your unused
            licenses with our hassle-free platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link href="#contact">Sell My Licenses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-30"></div>
            <div className="relative bg-card rounded-lg shadow-xl overflow-hidden">
              <div className="p-6 sm:p-10">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-primary"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold">Average Recovery</h3>
                    <p className="text-4xl font-bold text-primary">65%</p>
                    <p className="text-sm text-muted-foreground">of original license value</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">3-5</p>
                      <p className="text-xs text-muted-foreground">Days to payment</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">1,000+</p>
                      <p className="text-xs text-muted-foreground">Licenses sold</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
