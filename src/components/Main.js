import React from 'react'
import {useEffect, useState} from 'react';
import {data} from '../data/questionData'
import { WellnessWheel , WWAPI } from '../tools/Canvas';
import Questions from './Questions';

let Wheel
export default function Main() {

  useEffect(() => {
    if (!Wheel)
      Wheel = new WWAPI(800, 800);
  }, [])
  const [currDropDown, setCurrDropDown] = useState("none");
    const categories = ["Physical","Financial", "Intellectual", "Emotional", "Social", "Spiritual"]
    return (
    <div className = "main-container flex flex-col lg:flex-row w-full h-auto bg-zinc-600 p-5">
        <div id= "question-holder" className="relative flex flex-col w-full lg:w-1/2 h-full">
          <div id= "question-holder" className="relative flex flex-row justify-between  z-50 w-full h-full">
              <button id="dropdownPhysicalButton" onClick = {()=> {setCurrDropDown("Physical")}} className="lg:w-1/6 mb-3 text-white Physical focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md sm:text-lg lg:text-xl px-4 py-2.5 text-center inline-flex items-center " type="button">Physical</button>
              <button id="dropdownFinancialButton" onClick = {()=> {setCurrDropDown("Financial")}} className="lg:w-1/6 mb-3  text-white Financial focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md sm:text-lg lg:text-xl px-4 py-2.5 text-center inline-flex items-center " type="button">Financial</button>
              <button id="dropdownIntellectualButton" onClick = {()=> {setCurrDropDown("Intellectual")}} className="lg:w-1/6 mb-3 Intellectual text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md sm:text-lg lg:text-xl px-4 py-2.5 text-center inline-flex items-center " type="button">Intellectual</button>
              <button id="dropdownEmotionalButton" onClick = {()=> {setCurrDropDown("Emotional")}} className="lg:w-1/6 mb-3 Emotional text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md sm:text-lg lg:text-xl px-4 py-2.5 text-center inline-flex items-center " type="button">Emotional</button>
              <button id="dropdownSocialButton" onClick = {()=> {setCurrDropDown("Social")}} className="lg:w-1/6 mb-3 Social text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md sm:text-lg lg:text-xl px-4 py-2.5 text-center inline-flex items-center " type="button">Social</button>
              <button id="dropdownSpiritualButton" onClick = {()=> {setCurrDropDown("Spiritual")}} className="lg:w-1/6 mb-3 Spiritual text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md sm:text-lg lg:text-xl px-4 py-2.5 text-center inline-flex items-center " type="button">Spiritual</button>
          </div>
          <div id="question-holder" className="relative flex flex-row w-full h-full">
            {
              categories.map((category, index) => {
                if (category === currDropDown)
                {
                  return <Questions key={index} category={category} questions={data[category]} canvasAPI = {Wheel} ></Questions>
                }
                else 
                  return <Questions key={index} category={category} questions={data[category]} canvasAPI = {Wheel} hidden = {true}></Questions>
              })
            }
          </div>
          <div>
          <button className="w-2/3 h-[50px] p-3 bg-blue-700 focus:bg-blue-800 hover:ring-teal-200"> Download Your Canvas </button>    
          </div>
        </div>
        <div id= "canvas-holder" className="w-full lg:w-1/2 h-auto flex justify-center align-center">
            {/**Nothing here but there will be stuff later*/}
        </div>    
    </div>
  )
}
