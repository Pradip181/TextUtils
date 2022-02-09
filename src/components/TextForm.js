import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("");

    const handleupclick=()=>{
            // console.log("you clicked button"+text);
            let newText=text.toUpperCase();
            setText(newText);
           props.showAlert("success","Converted to Uppercase")
    }
    const handleloclick=()=>{
        // console.log("you clicked button"+text);
        let newText=text.toLowerCase('success','Converted to Lowercase');
        setText(newText);
        props.showAlert('success','Converted to Lowercase');
}
const clrtxt=()=>{
    // console.log("you clicked button"+text);
    let newText='';
    setText(newText);
    props.showAlert('danger','Text is Cleared');
}
const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('success','Copied to Clipboard');
}
const handleExtraspaces=()=>{
     let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert('success','Extra Spaces are removed');
}

    const handleonchange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
}
    return (
        <>
        <div>
           
                <div className="mb-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
                    <label htmlFor="myBox" className="form-label mb-1"><h2>{props.heading}</h2></label>
                    <textarea className="form-control" onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleupclick} >Convert to Uppercase</button> 
                <button  disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleloclick} >Convert to Lowercase</button> 
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={clrtxt} >Clear</button> 
                <button  disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy} >copy</button> 
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraspaces} >Remove extra space</button> 

        </div>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}} >
            <h2>Your Text Description</h2>
            <p>{text.length} characters {text.split(" ").filter((element)=>{
                return element.length!==0
            }).length} Words </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!!!"}</p>
            <p>{0.008*text.split(" ").filter((element)=>{
                return element.length!==0
            }).length +"'mins required to read the content"}</p>
        </div>
        </>
    )
}
