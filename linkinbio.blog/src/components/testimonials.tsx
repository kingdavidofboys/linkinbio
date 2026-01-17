"use client"
import { Testimonial } from "@/data"
import { motion } from "framer-motion"

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex gap-1 mb-4 text-yellow-500">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-muted-foreground italic mb-4">&quot;{t.content}&quot;</p>
            <p className="font-bold text-foreground text-right">- {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
