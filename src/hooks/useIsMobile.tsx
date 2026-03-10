'use client'

import { useEffect, useState } from 'react'

function useIsMobile(widthIsLessThan: number = 1024) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Initialize with a safe default for SSR
    if (typeof window === 'undefined') return false
    return window.innerWidth < widthIsLessThan
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < widthIsLessThan)
    }

    // Set initial value on mount
    checkMobile()

    // Listen for resize events
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [widthIsLessThan])

  return isMobile
}

export default useIsMobile
