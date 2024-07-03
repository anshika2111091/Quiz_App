
import { useState,useEffect } from "react";


const Trivia = ({earned,setearned,timevalue,setimevalue,timeout,data,settimeout,setQuestionNumber,questionNumber}) => {
  const [question,setQuestion]=useState(data[questionNumber-1]);

const [selectedanswer,setSelectedanswer]=useState(null);

  useEffect(()=>{

    setQuestion(data[questionNumber-1]);
   
    
    setSelectedanswer(null);

  },[data,questionNumber]);
  useEffect(() => {
    
    let timerId;
  
   if(timeout){
    if (timevalue > 0) {
      
      timerId = setInterval(() => {
        setimevalue(prevTimevalue => prevTimevalue - 1); // Update timevalue
      }, 1000);
    }
   }
  
    return () => {
      clearInterval(timerId); // Clear interval on component unmount or timevalue change
    };
  }, [timeout]); // Dependency array to run effect when timevalue changes
  

 const handleClick=(a)=>{  
 setSelectedanswer(a);
 settimeout(false);
 
 if (a.correct === true)
   {
    setearned(earned+((questionNumber)*100));
    document.getElementById('correct-sound').play();
  setTimeout(() => {
    setQuestionNumber((prev) => prev+1);
    document.getElementById('play-sound').play();
    setimevalue(30);
    settimeout(true);
    document.getElementById('wait-sound').play();
  
  },3000);
 }
else{
  document.getElementById('wrong-sound').play();

}}
 

  return (

    <div className="trivia">

        <div className="question">{question.question}
        <audio id="play-sound" src="play.mp3" preload="auto"></audio>
        </div>
        <div className="answers">
          <audio id="wait-sound" src="wait.mp3"></audio>
         {question?.answers.map((a)=>(
           <div className={`answer ${selectedanswer===a ? (a.correct ? "correct":"wrong"):""}`} onDoubleClick={()=>handleClick(a)}>{a.text}
           <audio id="wrong-sound" src="wrong.mp3" preload="auto"></audio>
           <audio id="correct-sound" src="correct.mp3" preload="auto"></audio>
           </div>
           
            
         ))}
                
        
        </div>
      
    </div>
  )
}

export default Trivia
