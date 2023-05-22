import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"

// Utils
import { disableScroll } from "@utils/domHelper"

// Styles
import { zIndexes } from "@styles/zIndexes"

export interface Props {
  children?: React.ReactNode
}

// Constants
const BASE_ANIM_DURATION = 1.5

const PageTransitionUI: React.FC<Props> = ({ children }: Props) => {
  const pathname = usePathname()

  const [prevPathname, setPrevPathname] = useState<string>(pathname)

  const handleAnimComplete = () => {
    disableScroll(document.documentElement, false)
    disableScroll(document.body, false)
  }

  useEffect(() => {
    if (pathname === prevPathname) return

    disableScroll(document.documentElement, true)
    disableScroll(document.body, true)

    setPrevPathname(pathname)
  }, [pathname, prevPathname])

  return (
    <>
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={handleAnimComplete}
      >
        <AnimatedCover
          key={`cover-${pathname}`}
          initial={false}
          animate={{ scaleY: 0, translateY: 0 }}
          exit={{ scaleY: [0, 1, 1], translateY: [0, 0, "-100%"] }}
          transition={{
            duration: BASE_ANIM_DURATION,
            ease: [0.4, 0, 0.2, 1],
          }}
        />

        <motion.div
          key={`page-${pathname}`}
          initial={{ opacity: 0, translateY: "-20px" }}
          animate={{ opacity: 1, translateY: "0px" }}
          exit={{ opacity: 0, translateY: "0px" }}
          transition={{
            duration: BASE_ANIM_DURATION / 3,
            delay: BASE_ANIM_DURATION / 3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

const AnimatedCover = styled(motion.div)`
  position: fixed;
  z-index: ${zIndexes.pageTransitionUI};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--c-accent1);
  transform-origin: bottom center;
`

export default PageTransitionUI
