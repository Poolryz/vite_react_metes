import React from "react"
import { TrpcProvider } from "./lib/trpc"
import AllIdeasPage from './pages/AllIdeasPage/AllIdeasPage'

function App() {

  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}

export default App
