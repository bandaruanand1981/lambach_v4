import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Initial value
    let mounted = true;
    
    // Initial value deferred to avoid synchronous setState during render
    setTimeout(() => {
      if (mounted) {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }
    }, 0);

    const onChange = () => {
      if (mounted) setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    
    return () => {
      mounted = false;
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return !!isMobile
}
