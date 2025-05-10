import { Suspense } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
      <Toaster />
    </div>
  )
}
