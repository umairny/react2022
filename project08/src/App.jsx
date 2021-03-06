import './App.css'
import topImg from '../images/topblobs.png'
import botImg from '../images/bottomblobs.png'
import Quiz from './components/Quiz'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState(
    {
      cate : 9,
      ques : 5,
      diffi : 'easy' 
    }
  )
  const [start, setStart] = useState(false)
  const url = `https://opentdb.com/api.php?amount=${formData.ques}&category=${formData.cate}&difficulty=${formData.diffi}&type=multiple`

  function handleChange(event) {
      const {name, value, type, checked} = event.target
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [name]: type === "checkbox" ? checked : value
          }
      })
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    setStart(true)
  }

  console.log(start)

  return (
    <div>
      {!start ?       
      <div className="start">
        <img className='topRect' src={topImg} alt={topImg} />
        <img className='botRect' src={botImg} alt={botImg} />
          <div className='content'>
            <h1>Quizzical</h1>
            <p>Test your knowledge</p>
            <form onSubmit={handleSubmit}>
            <label>Category</label>
            <select 
                  id="cate" 
                  value={formData.cate}
                  onChange={handleChange}
                  name="cate"
              >
                  <option value="9">General Knowladge</option>
                  <option value="10">Entertainment: Book</option>
                  <option value="11">Entertainment: Film</option>
                  <option value="12">Entertainment: Music</option>
                  <option value="17">Nature and science</option>
                  <option value="18">Science: Computer</option>
                  <option value="21">Sports</option>
                  <option value="23">History</option>
                  <option value="24">Politics</option>
                  <option value="25">Art</option>
                  <option value="27">Animals</option>
            </select>
            <label>Total Number of question</label>
            <select 
                  id="ques" 
                  value={formData.ques}
                  onChange={handleChange}
                  name="ques"
              >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
            </select>
            <label>Difficulty</label>
            <select 
                  id="diffi" 
                  value={formData.diffi}
                  onChange={handleChange}
                  name="diffi"
              >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
            </select>

            <button className='but'>Start quiz</button>
          
          </form>
            
          </div>

      </div>

      : 
      
      <Quiz 
        url={url}
        start={start}
        totalScore={formData.ques}
        />
      }

    </div>
  )
}
export default App
