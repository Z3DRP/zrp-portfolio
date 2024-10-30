import Header from "./components/Header"
import Router from "./zrouter/router"
import ErrorBoundary from "./errorboundry/errorboundaries"
import "./globals.css"

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <main className=" opacity-80">
            <Router />
        </main>
      </ErrorBoundary>
    </>    
  )
}

export default App
