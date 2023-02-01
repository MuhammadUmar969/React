import React, {useState} from 'react'

export default function TextForm(props){
   const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to LowerCase!","success");
     }
     const handleClClick = ()=>{
      let newText = '';
       setText(newText)
       props.showAlert("Text Cleared!","success");
   }
   const handleCopy = ()=>{
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value); 
     props.showAlert("Copy to Clipboard!","success");
   }
   const handleSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" ")) 
      props.showAlert("Extra Spaces removed!","success");
    }
    const handleOnChange = (event)=>{
       setText(event.target.value);
    }
    const [text,setText] = useState('');
    return (
      <>
      <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
       <button className="btn btn-primary mb-3 pb-2 mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mb-3 pb-2 mx-2"  onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mb-3 pb-2 mx-2"  onClick={handleClClick}>Clear Text</button>
       <button className="btn btn-primary mb-3 pb-2 mx-2"  onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mb-3 pb-2 mx-2"  onClick={handleSpaces}>Remove Extra Spaces</button>
     </div>
     <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split("").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
     </div>
     </>
  )
}

