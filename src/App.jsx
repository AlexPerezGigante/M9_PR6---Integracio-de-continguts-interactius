
import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import Header from './header'
import Presentacion from './presentacion'
import AboutMe from "./aboutMe";

function App() {
  
  return (
    <>
    {/* <div className="flex justify-center gap-5 mt-4">
          <img src={viteLogo} className=' w-48 ' alt="Vite logo" />
          <img src={reactLogo} className="w-48 block" alt="React logo" />
          <img src={tailwindLogo} className="block" alt="Tailwind logo" />
      </div>
      <h1 className=' text-center text-lg mt-4 '>Vite + React + Tailwind</h1> */}
      <Header></Header>
      <Presentacion></Presentacion>
      <AboutMe></AboutMe>
      
    </>
  )
}

export default App
