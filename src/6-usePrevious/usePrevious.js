//store previous value
import { useRef } from "react"

export default function usePrevious(value) {
  const currentRef = useRef(value)  //set to the current value
  const previousRef = useRef()

  if (currentRef.current !== value) { //is the value we currently saved that is different than the value paased into usePrevious
    previousRef.current = currentRef.current  //set the previous one to the current saved value
    currentRef.current = value    //set the saved value to the actual current value
  }

  return previousRef.current  //always return the prev value while we have saved it
}
