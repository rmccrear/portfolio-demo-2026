import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"
import QuizCard from "./QuizCard"

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <p>Pokémon trainer from Pallet Town.</p>
      <QuizCard/>
      <Footer />
    </div>
  )
}

export default App
