import { useState, useRef, useLayoutEffect } from 'react'
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import tw from 'twin.macro'
import styled from 'styled-components'

interface ParallaxProps {
  children: JSX.Element
  offset?: number
}

const Parallax: React.FC<ParallaxProps> = ({ children, offset = -40 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  const { scrollY } = useViewportScroll()
  const initial = elementTop - clientHeight
  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  // apply a spring to ease the result
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  useLayoutEffect(() => {
    const element: any = ref.current
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    const onResize = () => {
      // use getBoundingClientRect instead of offsetTop in order to
      // get the offset relative to the viewport
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      )
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  if (prefersReducedMotion) {
    return <ParallaxContainer>{children}</ParallaxContainer>
  }

  return (
    <ParallaxContainer ref={ref} style={{ y }}>
      {children}
    </ParallaxContainer>
  )
}

const ParallaxContainer = styled(motion.div)`
  ${tw`
    w-full
    h-full
  `}
`

export default Parallax
