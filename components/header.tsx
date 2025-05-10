"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="text-xl font-bold">SoftSell</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#why-choose-us" className="text-sm font-medium hover:text-primary transition-colors">
            Why Choose Us
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button className="hidden md:inline-flex">Get Started</Button>
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container-custom py-4 space-y-4">
            <Link
              href="#how-it-works"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link
              href="#why-choose-us"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Why Choose Us
            </Link>
            <Link
              href="#testimonials"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link href="#contact" className="block py-2 text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Contact
            </Link>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  )
}
