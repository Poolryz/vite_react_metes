import { TrpcProvider } from "./lib/trpc"
import AllIdeasPage from './pages/AllIdeasPage/AllIdeasPage.tsx'

function App() {

  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}

export default App
