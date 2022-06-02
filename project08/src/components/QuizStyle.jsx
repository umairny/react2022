import topImg from '../../images/topblobs.png'
import botImg from '../../images/bottomblobs.png'
import {nanoid} from "nanoid"
import { useState } from 'react'

export default function QuizStyle (props) {
    //console.log(props)
    const [formData, setFormData] = useState([])
    const [count, setCount] = useState(0)
    const [results, setResults] = useState(false)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    //Submit and view the results
    function handleSubmit(event) {
        event.preventDefault()
        //console.log(formData)
        // correct answers array
        var correct = props.data.map(c => c.cor)
        //coming form input array
        var newArr = []
        for (const key in formData) {
            const value = formData[key]
            newArr.push(value)
        }
        //console.log(newArr)
        //console.log(correct)
        //Compare array
        var inter = newArr.filter(function(e) {
            return correct.indexOf(e) > -1;
        });
        //console.log(inter);
        setCount(inter.length)
        setResults(true)

    }
    
    function tryagain (){
        setResults(false)
        setFormData([])
        {props.start === false}
    }
    
    return(
        <div className="quiz">
            <img className='topRectQuiz' src={topImg} alt={topImg} />
            <img className='botRectQuiz' src={botImg} alt={botImg} />
            <form className='qBox' onSubmit={results ? tryagain : handleSubmit}>
                {/* 
                <input label="Yes" type="radio" id="male" name="gender" value="male" />
	            <input label="No" type="radio" id="female" name="gender" value="female" />
	            <input label="other" type="radio" id="other" name="gender" value="other" />
                */}
                {props.data.map(item => (
                    <div key={item.id}>
                        <div className='question'>
                            <h4>{item.que}</h4>    
                            <div>
                                {item.ans.map(ans => (
                                    <input 
                                        label={ans}
                                        type="radio"
                                        id={ans}
                                        name={item.id}
                                        value={ans}
                                        onChange={handleChange}
                                        disabled={results && true}
                                         />
                                ))}
                                
                                {results && (
                                    <div className='correct'>
                                        {item.cor}
                                    </div>
                                )}
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
                {results ? <button className='subBut'>Try again</button> : <button className='subBut'>Submit</button>}
            </form>
            
            <div className='score'>Score {count}/{props.total}</div>
        </div>

    )
}