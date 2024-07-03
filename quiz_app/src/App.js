import "./app.css";
import {useState} from "react";
import Trivia from "./components/Trivia";


function App() {
  const [questionNumber,setQuestionNumber]=useState(1);
  const [timeout,settimeout]=useState(true);
  const [timevalue,setimevalue]=useState(30);
  const [earned,setearned]=useState(0);
  
 
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid=[
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 400"},
    {id:5, amount:"$ 500"},
    {id:6, amount:"$ 600"},
    {id:7, amount:"$ 700"},
    {id:8, amount:"$ 800"},
    {id:9, amount:"$ 900"},
    {id:10, amount:"$ 1000"},
    {id:11, amount:"$ 1100"},
    {id:12, amount:"$ 1200"},
    {id:13, amount:"$ 1300"},
    {id:14, amount:"$ 1400"},
    {id:15, amount:"$ 1500"},
  ].reverse();
  return (
    <div className="App">
     
   <div className="main">
   <div className="score">You Earned: ${earned} </div>
    <div className="top">
      <div className="timer">{timevalue}</div>
    </div>
    <div className="bottom">
    <Trivia earned={earned} setearned={setearned} timevalue={timevalue} setimevalue={setimevalue} timeout={timeout}
    data={data} settimeout={settimeout} 
    setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}
   /></div>
   </div>
   <div className="pyramid">
    <ul className="moneyList">
     {moneyPyramid.map((m)=>(
      
       <li className= {`moneyListItem ${(questionNumber)===m.id ? "active":""}`} >
       <span className="moneyListItemNumber">{m.id}</span>
       <span className="moneyListItemAmount">{m.amount}</span>
     </li>
   
     ))}
    </ul>
   </div>
    </div>
  );
}

export default App;
