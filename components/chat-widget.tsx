"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

// Sample FAQ responses
const faqResponses: Record<string, string> = {
  "how do i sell my license":
    "To sell your license, simply fill out our contact form with details about your software license. Our team will evaluate it and provide you with a competitive offer within 24 hours.",

  "what types of licenses do you buy":
    "We purchase a wide range of software licenses including enterprise software, cloud subscriptions, desktop applications, and SaaS subscriptions. If you're unsure, please contact us with the details.",

  "how long does the process take":
    "Our process typically takes 3-5 business days from initial contact to payment. The valuation is usually provided within 24 hours of submitting your license details.",

  "how do i get paid":
    "We offer multiple payment options including bank transfer, PayPal, and cryptocurrency. You can select your preferred method when accepting our offer.",

  "is my license information secure":
    "Absolutely. We use end-to-end encryption and secure transfer protocols to protect all your sensitive license information. Your data is only accessible to authorized personnel.",
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi there! How can I help you with selling your software licenses today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateResponse(inputValue.toLowerCase())
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const generateResponse = (query: string): string => {
    // Check for matches in FAQ
    for (const [keyword, response] of Object.entries(faqResponses)) {
      if (query.includes(keyword)) {
        return response
      }
    }

    // Default responses
    if (query.includes("price") || query.includes("cost") || query.includes("value")) {
      return "The value of your license depends on factors like software type, remaining subscription time, and current market demand. Submit your details through our form for a personalized valuation."
    }

    if (query.includes("thank")) {
      return "You're welcome! If you have any other questions, feel free to ask."
    }

    // Fallback response
    return "I don't have specific information about that. For detailed assistance, please fill out our contact form or email us at support@softsell.com."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-card rounded-lg shadow-xl border z-50 flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{ maxHeight: "calc(100vh - 200px)" }}
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
              <h3 className="font-semibold">SoftSell Support</h3>
              <p className="text-sm opacity-90">Ask us anything about selling your licenses</p>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn("flex", {
                    "justify-end": message.sender === "user",
                  })}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg p-3",
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                    )}
                  >
                    {message.sender === "bot" && (
                      <div className="flex items-start space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/20 text-primary">SS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p>{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    )}

                    {message.sender === "user" && (
                      <div>
                        <p>{message.content}</p>
                        <p className="text-xs opacity-70 mt-1 text-right">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex">
                  <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                      <div
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-grow"
                />
                <Button size="icon" onClick={handleSendMessage} disabled={!inputValue.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 text-xs text-muted-foreground text-center">
                Try asking: "How do I sell my license?" or "What types of licenses do you buy?"
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
