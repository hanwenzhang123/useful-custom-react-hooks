//whenever the variable changes, log the variable to the console

import { useEffect } from "react";

export default function useUpdateLogger(value) {
 useEffect(() => {
   console.log(value);
 }, [value])
}
 
//App.js
const [name, setName] = useLocalStorage("name", "hi");
useUpdateLogger(name);    //whenever the name changes, log it out
 
