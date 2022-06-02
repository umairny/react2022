import './App.css'
import Header from './components/header'
import Main from './components/main'
import Card from './components/card'
import Data from './data'

function App() {

  const cards = Data.map((item) => {
    return (
      <Card 
      key={item.id}
      item={item}
      />
    )
  })

  return (
    <div className="container">
      <Header />
      <Main />
      <section className="cards-list">
          {cards}
      </section>
    </div>
  )
}

export default App
