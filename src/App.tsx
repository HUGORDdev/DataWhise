import { useState } from "react"
import Navbar from "./app/Navbar"


const App = () => {
  const [setscrolled, setsetscrolled] = useState(false)
  return (
    <div className='min-h-screen bg-white dark:bg-[#141513] overflow-hidden'>
      <Navbar/>

    </div>
  )
}

export default App