'use client'

import { Badge } from "@/components/ui/badge"
import ThreeDLayeredCard from "@/components/ui/3d-layered-card"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex items-center justify-center relative z-10 max-w-4xl mx-auto md:overflow-visible overflow-hidden">
      <div className="overflow-visible flex flex-col items-center justify-center gap-3 relative py-24 px-4">

        <div className="flex flex-col gap-3">
          {/* Animated wrapper using Framer Motion */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >

            <ThreeDLayeredCard
              logo="/down.png"
              logoSize={100}
              mainImage="/down.png"
              borderColor="#ffffff"
              borderWidth="1px"
              backgroundColor="bg-gradient-to-b from-[#FF9901] via-[#FF9901] to-[#9b600b]"
              shineIntensity={0.6}
            >
              <div className="flex flex-col items-center justify-center gap-2 px-4">
                <Link href="/todoform">
                <Badge
                  variant="secondary"
                  className="bg-yellow-900/40 backdrop-blur-3xl text-[16px] font-bold text-gray-200 border-yellow-500/30 py-[2px] relative"
                >
                  
                    Click here to create a todo
                
                </Badge>
                  </Link>
                <p className="text-white text-[15px] text-center leading-tight max-w-xs">
                  Add your daily goals and track them easily.
                </p>
              </div>
            </ThreeDLayeredCard>

          </motion.div>
        </div>

      </div>
    </div>
  )
}
