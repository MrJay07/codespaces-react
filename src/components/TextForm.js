import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=() =>{
        // console.log("Uppercase was clicked" +text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLowClick=() =>{
        // console.log("Lowercase was clicked" +text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleClearClick=() =>{
        // console.log("Clear Text was clicked" +text);
        let newtext = '';
        setText(newtext)
    }
    const handleCopyClick=() =>{
        // console.log("Copy Text was clicked" +text);
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange=(event) =>{
        // console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here')
    // text = "new text" wrong way to change the state
    // setText("new text") correct way to change the state
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear the text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy to Clipboard</button>
            </div>
            <div className='container my-2'>
                <h1>Your text summery</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
