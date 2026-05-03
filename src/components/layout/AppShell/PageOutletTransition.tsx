import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'

const pageMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
}

export default function PageOutletTransition() {
  const location = useLocation()
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <Outlet />
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={pageMotion.initial}
        animate={pageMotion.animate}
        exit={pageMotion.exit}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="min-w-0"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}
