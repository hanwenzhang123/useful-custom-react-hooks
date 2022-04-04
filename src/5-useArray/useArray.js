import { useState } from "react"

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue)

  function push(element) {
    setArray(a => [...a, element])
  }

  function filter(callback) {
    setArray(a => a.filter(callback))
  }

  function update(index, newElement) {    //change the element in index position to a new element
    setArray(a => [
      ...a.slice(0, index),   //getting all the value before the index
      newElement,   //adding the new element
      ...a.slice(index + 1, a.length),    //add the value after the index
    ])
  }

  function remove(index) {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  } //all the value before the index, and the all the value after the index, cut off the value we need to remove

  function clear() {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }
}
