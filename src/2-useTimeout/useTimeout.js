import { useCallback, useEffect, useRef } from "react"

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback)  //useRef to have the callback value stays the same
  const timeoutRef = useRef()

  useEffect(() => {   //whenever callback changes, we update
    callbackRef.current = callback  //update the callbackvalue
  }, [callback])

  const set = useCallback(() => {   //when change delay
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {   //take the ref, and clear the timeout if exist, no more timeout, value stays same
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear 
  }, [delay, set, clear])   //whenever something changes, just restart again

  const reset = useCallback(() => {   //clear first and then set the timeout again, reset back the default
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}
