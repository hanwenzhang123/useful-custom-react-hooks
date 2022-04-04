import { useState } from "react";

function getSavedValue(key, initialValue) {     //key from the localstorage
  const savedValue = JSON.parse(localStorage.getItem(key));   //stored value in localstorage
  if(savedValue) return savedValue;   //if we have the saved value, we return it
  
  if(initialValue instanceof Function) return initialValue();   //if initial value is a function, then call it
  return initialValue;   //if not a function, just return the default initial value
}

export default function useLocalStorage(key, initialValue) {    //take the key and the initial value
  const [value, setValue] = useState(() => {  //function to get the initial state value
    return getSavedValue(key, initialValue)  
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))  //convert to json, save value to the local storage
  }, [value])    //whenever the value changes

  return [value, setValue];
}


//App.js
const [name, setName] = useLocalStorage("name", "hi");


//alternative function
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
