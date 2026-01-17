"use client"
import { SocialLink } from "@/data"
import { motion } from "framer-motion"
import Image from "next/image"

export function LinkButtons({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto px-4 mt-8">
      {links.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--primary-rgb), 0.1)" }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 relative flex-shrink-0 mr-4 overflow-hidden rounded-full bg-muted/50 p-1">
             {link.iconPath && <Image src={link.iconPath} alt={link.title} fill className="object-contain p-1" />}
          </div>
          <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{link.title}</span>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary">
            →
          </div>
        </motion.a>
      ))}
    </div>
  )
}
