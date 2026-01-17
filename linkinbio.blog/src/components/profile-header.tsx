"use client"
import Image from "next/image"
import { Profile } from "@/data"
import { motion } from "framer-motion"

export function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-48 w-full rounded-t-2xl overflow-hidden relative"
      >
        <Image
          src={profile.background}
          alt="Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Profile Picture */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-32 h-32 rounded-full border-4 border-background overflow-hidden shadow-xl z-10"
      >
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="pt-20 text-center px-4"
      >
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">{profile.name}</h1>
        <p className="text-sm font-medium text-primary mt-1">{profile.title}</p>
        <p className="text-muted-foreground mt-3 max-w-xs mx-auto leading-relaxed">{profile.bio}</p>
      </motion.div>
    </div>
  )
}
