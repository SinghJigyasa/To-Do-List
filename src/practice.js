import { useState } from "react";


export function PracticeExample(){
   var categories=["tv","Mobile"]
   const [name,setName] = useState("");
   function handlename(e){
    setName(e.target.value)
   }
   function handlesubmit(){
    if(name == "ram"){
        alert("Welcome")
    }else{
        alert("Wrong")
    }
   }
    return(
        <div>
            <h1>Hello</h1>
          <dl>
            <dt>Name</dt>
            <dd><input type="text" onKeyUp={handlename}/></dd>
            <button onClick={handlesubmit}>Submit</button>
          </dl>
        </div>
    )
}