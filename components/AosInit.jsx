'use client'
import { useEffect } from 'react'
import AOS from 'aos'

export default function AosInit() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, mirror: false, offset: 40, easing: 'ease-out-cubic' })
  }, [])
  return null
}
