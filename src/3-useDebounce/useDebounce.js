//run something only after a certain delay
import { useEffect } from "react"
import useTimeout from "../2-useTimeout/useTimeout"

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay)  //no.2 usetimeout function
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}
