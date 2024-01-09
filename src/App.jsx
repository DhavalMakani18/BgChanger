import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-700"
    style={{backgroundColor: color}}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl">

          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>
            Red </button>

          <button onClick={() => setColor("green")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>
          green </button>

          <button onClick={() => setColor("blue")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>
            Blue </button>

          <button onClick={() => setColor("blueviolet")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blueviolet"}}>
          Blueviolet </button>

          <button onClick={() => setColor("cyan")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "cyan"}}>
          Cyan </button>

          <button onClick={() => setColor("darkgray")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "darkgray"}}>
          Darkgray </button>

          <button onClick={() => setColor("darksalmon")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "darksalmon"}}>
          Darksalmon </button>

          <button onClick={() => setColor("deeppink")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "deeppink"}}>
          Deeppink </button>
        </div>
      </div>
    </div>
  )
}

export default App
