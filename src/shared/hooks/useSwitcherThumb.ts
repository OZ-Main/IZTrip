import { useLayoutEffect, useRef, useState } from 'react'

export type SwitcherThumbMetrics = {
  ready: boolean
  width: number
  x: number
}

const INITIAL_THUMB: SwitcherThumbMetrics = { ready: false, width: 0, x: 0 }

export function useSwitcherThumb(activeSegmentId: string, layoutDependency?: unknown) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [thumb, setThumb] = useState<SwitcherThumbMetrics>(INITIAL_THUMB)

  useLayoutEffect(() => {
    const container = containerRef.current

    function measure() {
      if (!container) {
        return
      }

      const activeEl = container.querySelector<HTMLElement>(
        `[data-switcher-segment="${CSS.escape(activeSegmentId)}"]`,
      )

      if (!activeEl) {
        return
      }

      const containerRect = container.getBoundingClientRect()
      const activeRect = activeEl.getBoundingClientRect()
      const x = activeRect.left - containerRect.left
      const width = activeRect.width

      setThumb((previous) => {
        if (previous.ready && previous.x === x && previous.width === width) {
          return previous
        }

        return { ready: true, width, x }
      })
    }

    measure()

    const resizeObserver = new ResizeObserver(() => {
      measure()
    })

    resizeObserver.observe(container)
    window.addEventListener('resize', measure)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [activeSegmentId, layoutDependency])

  return { containerRef, thumb }
}
