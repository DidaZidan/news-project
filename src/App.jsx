import { use, useState } from "react"
import Navbar from "./components/navbar"
import Newboard from "./components/newBoard"
import Newsitem from "./components/newsitem"
function App() {
  let [category,setcategory]=useState("general")

  return (
    <>
    <Navbar setcategory={setcategory}/>
    <Newboard category={category}/>
    </>
  )
}

export default App
