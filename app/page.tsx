'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FloatingEmoji = ({ emoji, delay, duration, x, y }: { emoji: string; delay: number; duration: number; x: number; y: number }) => {
  return (
    <motion.div
      className="fixed text-4xl pointer-events-none"
      initial={{ y, x, opacity: 0 }}
      animate={{
        y: [y, y - 100],
        x: [x, x + (Math.random() - 0.5) * 100],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {emoji}
    </motion.div>
  )
}

const TeddyBear = ({ side, top }: { side: 'left' | 'right'; top: string }) => {
  return (
    <motion.div
      className={`fixed text-7xl pointer-events-none z-10 ${side === 'left' ? 'left-4 sm:left-8' : 'right-4 sm:right-8'}`}
      style={{ top }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 0.3, y: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      🧸
    </motion.div>
  )
}

const SVGRose = () => {
  return (
    <motion.svg
      viewBox="0 0 300 450"
      className="w-full h-auto"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Stem */}
      <motion.path
        d="M 150 420 Q 148 350 150 280 Q 152 210 150 140"
        stroke="#2d5016"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut', delay: 0.5 }}
        viewport={{ once: true }}
      />

      {/* Thorns */}
      {[
        { x: 150, y: 380, angle: -30 },
        { x: 150, y: 340, angle: 30 },
        { x: 150, y: 300, angle: -25 },
        { x: 150, y: 260, angle: 35 },
        { x: 150, y: 220, angle: -30 },
        { x: 150, y: 180, angle: 25 },
      ].map((thorn, i) => (
        <motion.path
          key={`thorn-${i}`}
          d={`M ${thorn.x} ${thorn.y} l ${Math.cos((thorn.angle * Math.PI) / 180) * 8} ${Math.sin((thorn.angle * Math.PI) / 180) * 8}`}
          stroke="#1a3a0f"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5 + i * 0.15 }}
          viewport={{ once: true }}
        />
      ))}

      {/* Left Leaf */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.8 }}
        viewport={{ once: true }}
      >
        <ellipse
          cx="115"
          cy="280"
          rx="25"
          ry="15"
          fill="#3a7d34"
          opacity="0.9"
          transform="rotate(-45 115 280)"
        />
        <path
          d="M 115 265 Q 115 280 115 295"
          stroke="#2d5016"
          strokeWidth="2"
          fill="none"
        />
      </motion.g>

      {/* Right Leaf */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 3.2 }}
        viewport={{ once: true }}
      >
        <ellipse
          cx="185"
          cy="240"
          rx="25"
          ry="15"
          fill="#3a7d34"
          opacity="0.9"
          transform="rotate(45 185 240)"
        />
        <path
          d="M 185 225 Q 185 240 185 255"
          stroke="#2d5016"
          strokeWidth="2"
          fill="none"
        />
      </motion.g>

      {/* Outer Petals - Layer 1 (darkest red) */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 3.8 }}
        viewport={{ once: true }}
      >
        {/* Bottom petals */}
        <ellipse cx="150" cy="130" rx="35" ry="45" fill="#b91c1c" opacity="0.95" transform="rotate(-20 150 130)" />
        <ellipse cx="150" cy="130" rx="35" ry="45" fill="#b91c1c" opacity="0.95" transform="rotate(20 150 130)" />
        <ellipse cx="150" cy="135" rx="38" ry="42" fill="#991b1b" opacity="0.9" transform="rotate(0 150 135)" />
      </motion.g>

      {/* Mid Petals - Layer 2 */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 4.5 }}
        viewport={{ once: true }}
      >
        <ellipse cx="120" cy="115" rx="28" ry="38" fill="#dc2626" opacity="0.95" transform="rotate(-45 120 115)" />
        <ellipse cx="180" cy="115" rx="28" ry="38" fill="#dc2626" opacity="0.95" transform="rotate(45 180 115)" />
        <ellipse cx="150" cy="100" rx="30" ry="40" fill="#dc2626" opacity="0.95" transform="rotate(0 150 100)" />
        <ellipse cx="135" cy="120" rx="26" ry="36" fill="#b91c1c" opacity="0.9" transform="rotate(-25 135 120)" />
        <ellipse cx="165" cy="120" rx="26" ry="36" fill="#b91c1c" opacity="0.9" transform="rotate(25 165 120)" />
      </motion.g>

      {/* Inner Petals - Layer 3 (lighter red) */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 5.2 }}
        viewport={{ once: true }}
      >
        <ellipse cx="140" cy="95" rx="22" ry="32" fill="#ef4444" opacity="0.95" transform="rotate(-35 140 95)" />
        <ellipse cx="160" cy="95" rx="22" ry="32" fill="#ef4444" opacity="0.95" transform="rotate(35 160 95)" />
        <ellipse cx="150" cy="85" rx="24" ry="34" fill="#ef4444" opacity="0.95" transform="rotate(0 150 85)" />
        <ellipse cx="145" cy="100" rx="20" ry="28" fill="#dc2626" opacity="0.9" transform="rotate(-15 145 100)" />
        <ellipse cx="155" cy="100" rx="20" ry="28" fill="#dc2626" opacity="0.9" transform="rotate(15 155 100)" />
      </motion.g>

      {/* Center Petals - Layer 4 (brightest) */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 5.9 }}
        viewport={{ once: true }}
      >
        <ellipse cx="145" cy="85" rx="16" ry="24" fill="#f87171" opacity="0.95" transform="rotate(-40 145 85)" />
        <ellipse cx="155" cy="85" rx="16" ry="24" fill="#f87171" opacity="0.95" transform="rotate(40 155 85)" />
        <ellipse cx="150" cy="75" rx="18" ry="26" fill="#f87171" opacity="0.95" transform="rotate(0 150 75)" />
      </motion.g>

      {/* Inner spiral - Layer 5 (core) */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 6.6 }}
        viewport={{ once: true }}
      >
        <ellipse cx="148" cy="78" rx="12" ry="18" fill="#fca5a5" opacity="0.95" transform="rotate(-30 148 78)" />
        <ellipse cx="152" cy="78" rx="12" ry="18" fill="#fca5a5" opacity="0.95" transform="rotate(30 152 78)" />
        <ellipse cx="150" cy="70" rx="10" ry="16" fill="#fecaca" opacity="0.95" />
      </motion.g>

      {/* Center bud */}
      <motion.circle
        cx="150"
        cy="72"
        r="6"
        fill="#fee2e2"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 7.3 }}
        viewport={{ once: true }}
      />

      {/* Sparkle effects */}
      {[
        { cx: 130, cy: 70, delay: 8.0 },
        { cx: 170, cy: 75, delay: 8.2 },
        { cx: 145, cy: 55, delay: 8.4 },
        { cx: 155, cy: 60, delay: 8.6 },
        { cx: 150, cy: 50, delay: 8.8 },
      ].map((sparkle, i) => (
        <motion.g key={`sparkle-${i}`}>
          <motion.circle
            cx={sparkle.cx}
            cy={sparkle.cy}
            r="2"
            fill="#fef2f2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{
              duration: 2,
              delay: sparkle.delay,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            viewport={{ once: true }}
          />
          <motion.path
            d={`M ${sparkle.cx - 3} ${sparkle.cy} L ${sparkle.cx + 3} ${sparkle.cy} M ${sparkle.cx} ${sparkle.cy - 3} L ${sparkle.cx} ${sparkle.cy + 3}`}
            stroke="#fef2f2"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: sparkle.delay,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            viewport={{ once: true }}
          />
        </motion.g>
      ))}
    </motion.svg>
  )
}

const FallingPetals = ({ roseAnimationDuration }: { roseAnimationDuration: number }) => {
  const [petals, setPetals] = useState<Array<{ index: number; x: string; duration: number; rotate: number; delay: number }> | null>(null)

  useEffect(() => {
    const petalArray = Array.from({ length: 12 }).map((_, i) => ({
      index: i,
      x: Math.random() * 100 + '%',
      duration: 4 + Math.random() * 2,
      rotate: 360 * (Math.random() > 0.5 ? 1 : -1) * (1 + Math.random()),
      delay: i * 0.2,
    }))
    setPetals(petalArray)
  }, [])

  if (!petals) return <div className="absolute inset-0 overflow-hidden pointer-events-none" />

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.index}
          className="absolute text-2xl"
          initial={{
            x: petal.x,
            y: -40,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: '100vh',
            x: `calc(${petal.x} + ${(Math.random() - 0.5) * 150}px)`,
            opacity: [0, 1, 1, 0.8, 0],
            rotate: petal.rotate,
          }}
          transition={{
            duration: petal.duration,
            delay: roseAnimationDuration + petal.delay,
            repeat: Infinity,
            ease: 'easeIn',
          }}
        >
          🌹
        </motion.div>
      ))}
    </div>
  )
}

const TypewriterText = ({ text, startDelay }: { text: string; startDelay: number }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(interval)
          setShowCursor(false)
          setIsComplete(true)
        }
      }, 50)

      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(timer)
  }, [text, startDelay])

  return (
    <>
      <span>
        {displayedText}
        {showCursor && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        )}
      </span>
      {isComplete && (
        <motion.p
          className="text-right text-xl sm:text-2xl font-serif italic mt-6 pt-4 border-t border-red-900/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          — Yours ❤️
        </motion.p>
      )}
    </>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [floatingEmojis, setFloatingEmojis] = useState<Array<{ emoji: string; delay: number; duration: number; x: number; y: number }> | null>(null)

  useEffect(() => {
    setMounted(true)
    const emojis = [
      { emoji: '❤️', delay: 0, duration: 10, x: 10, y: Math.random() * window.innerHeight },
      { emoji: '💕', delay: 2, duration: 12, x: 80, y: Math.random() * window.innerHeight },
      { emoji: '💖', delay: 4, duration: 11, x: 50, y: Math.random() * window.innerHeight },
      { emoji: '❤️', delay: 1, duration: 13, x: 20, y: Math.random() * window.innerHeight },
      { emoji: '💕', delay: 3, duration: 10.5, x: 70, y: Math.random() * window.innerHeight },
    ]
    setFloatingEmojis(emojis)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2a0000] via-[#1a0000] to-[#0f0000]">
      {/* Floating Background Elements */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Floating Blur Circles */}
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-red-900 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            style={{ opacity: 0.1 }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            style={{ opacity: 0.08 }}
          />

          {/* Floating Emojis */}
          {floatingEmojis?.map((emoji, index) => (
            <FloatingEmoji key={index} emoji={emoji.emoji} delay={emoji.delay} duration={emoji.duration} x={emoji.x} y={emoji.y} />
          ))}
        </div>
      )}

      {/* Teddy Bears */}
      {mounted && (
        <>
          <TeddyBear side="left" top="15%" />
          <TeddyBear side="right" top="35%" />
        </>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white drop-shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Happy Valentine's Day,
          </motion.h1>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-red-400 drop-shadow-lg mt-2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
          >
            My Love ❤️
          </motion.h1>
        </motion.div>
      </section>

      {/* Heart 2 Heart Section with Rose and Letter Side by Side */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 z-20">
        <div className="max-w-6xl w-full">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center text-white mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Heart 2 Heart
          </motion.h2>

          {/* Rose and Letter Container */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Falling Petals Background */}
            <FallingPetals roseAnimationDuration={8} />

            {/* Growing Rose */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-64 sm:w-80 md:w-96">
                <SVGRose />
              </div>
            </motion.div>

            {/* Romantic Letter with Glass Card */}
            <motion.div
              className="glass rounded-2xl p-6 sm:p-8 md:p-10 glow-red"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-white text-base sm:text-lg leading-relaxed font-light space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-red-300 mb-2">❤️ Heart 2 Heart</h3>
                  <p className="text-xl sm:text-2xl font-serif italic">Sabina,</p>
                </div>
                <TypewriterText
                  text={`If I had to choose one word to describe what you are to me, I still wouldn't find one big enough. You are not just someone I love 💕, you are someone I feel connected to in a way that's calm, certain, and real.

Being far from you has never made my feelings weaker. If anything, it has made them clearer. Distance has shown me that what we have isn't based on convenience or physical closeness. It's built on intention. On choosing each other every single day.

Sabina, you bring light into my life in ways you probably don't even realize. The way you laugh 😊. The way you care. The way you simply exist as yourself. You don't try to be perfect and that's exactly what makes you perfect to me.

There's something powerful about knowing that somewhere out there, in a different place, there's someone who holds your heart gently 💝. And that's how I hold yours.

I look forward to the simple things with you. Not just the big dreams though we'll chase those too. I look forward to quiet moments. Shared smiles. Random jokes. Sitting beside you and feeling like the world is exactly where it's supposed to be.

Sabina, my love for you isn't loud or temporary. It's steady. It's intentional. It's the kind that grows stronger with time.

Today is Valentine's Day 💌, but loving you isn't something I do once a year. It's something I wake up choosing today, tomorrow, and every day after.

And I wouldn't trade that for anything. 🌹`}
                  startDelay={8500}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     {/* Signature Footer */}
      <section className="relative py-20 text-center z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-white text-xl sm:text-2xl md:text-3xl font-serif italic mb-4"
          >
            Forever Yours ❤️
          </motion.p>
          <motion.p
            className="text-red-300 text-2xl sm:text-3xl md:text-4xl font-serif italic"
            style={{ 
              transform: 'rotate(-5deg)',
              fontFamily: 'Brush Script MT, cursive',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            James Charo
          </motion.p>
        </motion.div>
      </section>
    </div>
  )
}