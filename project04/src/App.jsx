import './App.css'
import Header from './components/header'
import Card from './components/card'
import Data from './data';



function App() {

  const card = Data.map((item) => {
    return (
      <Card 
      key={item.id}
      {...item}
      />
    )
  })

  return (
    <div className="container">
      <Header />
      <div className='cards'>
        {card}
      </div>
      

    </div>
  )
}

export default App
