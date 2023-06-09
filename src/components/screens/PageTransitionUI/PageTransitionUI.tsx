import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

// Utils
import { disableScroll } from "@utils/domHelper"

// Styles
import * as S from "./styles"

// Animation
import { coverAnimProps, contentAnimProps } from "./animation"

export interface Props {
  children?: React.ReactNode
}

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
    <AnimatePresence
      initial={false}
      mode="wait"
      onExitComplete={handleAnimComplete}
    >
      <S.Cover key={`cover-${pathname}`} {...coverAnimProps} />

      <motion.div key={`page-${pathname}`} {...contentAnimProps}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransitionUI
