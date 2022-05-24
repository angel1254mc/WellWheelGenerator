import React from 'react'
import {useState, useEffect} from 'react'

export default function Questions({category, questions, canvasAPI, hidden}) {
  
    const [question1, setQuestion1] = useState(50);
    const [question2, setQuestion2] = useState(50);
    const [question3, setQuestion3] = useState(50);
    const [question4, setQuestion4] = useState(50);
    const [question5, setQuestion5] = useState(50);
    const [question6, setQuestion6] = useState(50);


    useEffect(() => {
        if (!hidden)
        document.getElementById("question-group").classList.add(category) 
    }, [hidden])
    const handleChange = (index, value) => {
        //canvasAPI.set(category, index, value)
        if (index == 0)
        {
            setQuestion1(value);
            canvasAPI.drawFilledArc(category, index, parseInt(value));
        }
        else if (index == 1)
        {
            setQuestion2(value);
            canvasAPI.drawFilledArc(category, index, parseInt(value));
        }
        else if (index == 2)
        {
            setQuestion3(value);
            canvasAPI.drawFilledArc(category, index, parseInt(value));
        }
        else if (index == 3)
        {
            setQuestion4(value);
            canvasAPI.drawFilledArc(category, index, parseInt(value));
        }
        else if (index == 4)
        {
            setQuestion5(value);
            canvasAPI.drawFilledArc(category, index, parseInt(value));
        }
        else if (index == 5)
        {
            setQuestion6(value);
            canvasAPI.drawFilledArc(category, index, parseInt(value));
        }
    }
    if (hidden)
        return (<div></div>)
    return (
    <div id="question-group" className="dropdownFade mt-[-20px] pt-[20px] lg:w-full h-full w-full text-xl flex-row text-gray-400">
        <div id= "question-1" className="w-full h-1/6 flex  py-2 flex-col items-center">
            <div className="p-2 w-full text-left text-2xl">{questions[0]}</div>
            <div className="flex w-full justify-around">
                <input className="w-2/3" onChange= {(e) => {handleChange(0, e.target.value)}} type="range" min="0" max="100" value={question1}></input>
                <div className="text-3xl">{question1}%</div>    
            </div>
        </div>
        <div id= "question-2" className="w-full h-1/6  flex py-2 flex-col items-center ">
            <div className="p-2 w-full text-left text-2xl">{questions[1]}</div>
            <div className="flex w-full justify-around">
                <input className="w-2/3" onChange= {(e) => {handleChange(1, e.target.value)}} type="range" min="0" max="100" value={question2}></input>
                <div className="text-3xl">{question2}%</div>
            </div>
        </div>
        <div id= "question-3" className="w-full h-1/6  flex py-2 flex-col items-center ">
            <div className="p-2 w-full text-left text-2xl">{questions[2]}</div>
            <div className="flex w-full justify-around">
                <input className="w-2/3" onChange= {(e) => {handleChange(2, e.target.value)}} type="range" min="0" max="100" value={question3}></input>
                <div className="text-3xl">{question3}%</div>
            </div>
        </div>
        <div id= "question-4" className="w-full h-1/6 flex py-2 flex-col items-center ">
            <div className="p-2 w-full text-left text-2xl">{questions[3]}</div>
            <div className="flex w-full justify-around">
                <input className="w-2/3" onChange= {(e) => {handleChange(3, e.target.value)}} type="range" min="0" max="100" value={question4}></input>
                <div className="text-3xl">{question4}%</div>
            </div>
        </div>
        <div id= "question-5" className="w-full h-1/6 flex  py-2 flex-col items-center ">
            <div className=" p-2 w-full text-left text-2xl">{questions[4]}</div>
            <div className="flex w-full justify-around">
                <input className="w-2/3" onChange= {(e) => {handleChange(4, e.target.value)}} type="range" min="0" max="100" value={question5}></input>
                <div className="text-3xl">{question5}%</div>
            </div>
        </div>
        <div id= "question-6" className="w-full h-1/6 flex py-2 flex-col items-center ">
            <div className=" p-2 w-full text-left text-2xl">{questions[5]}</div>
            <div className="flex w-full justify-around">
                <input className="w-2/3" onChange= {(e) => {handleChange(5, e.target.value)}} type="range" min="0" max="100" value={question6}></input>
                <div className="text-3xl">{question6}%</div>
            </div>
        </div>
    </div>
  )
}
