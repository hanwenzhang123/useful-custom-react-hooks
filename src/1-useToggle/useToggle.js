import { useState } from "react"

export default function useToggle(defaultValue) {   //pass the params straight to useState
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value) {
    setValue(currentValue =>
      typeof value === "boolean" ? value : !currentValue
    )
  }

  return [value, toggleValue]
}
