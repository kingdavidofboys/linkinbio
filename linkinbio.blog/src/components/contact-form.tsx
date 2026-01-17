"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            setSuccess(true)
            e.currentTarget.reset()
        }
    } catch (error) {
        console.error("Error submitting form", error)
    } finally {
        setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 py-12" id="contact">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="bg-card border border-border rounded-2xl p-8 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Let&apos;s Work Together</h2>
        {success ? (
            <div className="text-green-500 text-center py-8">
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p>I&apos;ll get back to you soon.</p>
                <Button variant="link" onClick={() => setSuccess(false)}>Send another</Button>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Input name="name" placeholder="Your Name" required />
            </div>
            <div>
                <Input name="email" type="email" placeholder="Your Email" required />
            </div>
            <div>
                <Textarea name="message" placeholder="How can I help you?" required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
            </Button>
            </form>
        )}
      </motion.div>
    </div>
  )
}
