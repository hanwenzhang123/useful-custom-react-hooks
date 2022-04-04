//only run when things changes, not on the first render (useEffect runs on the mounting phrase)

import { useEffect, useRef } from "react"

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)   //let is it a first render set as true

  useEffect(() => {
    if (firstRenderRef.current) { //if it is the first render
      firstRenderRef.current = false    //then set it to false
      return    //do not run any thing
    }
    return callback()   //just run the normal effect if it is not first rener
  }, dependencies)
}
