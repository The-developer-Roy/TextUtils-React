import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE", "success");
    }

    const handleLoClick = ()=>{
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
        let newText3 = '';
        setText(newText3);
    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied!", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText4 = text.split(/[ ]+/);
        setText(newText4.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="mb-3 container">
                <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
                <textarea className="form-control" value={text} placeholder="Enter Text Here" onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'#503e3e':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text to Clipboard</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <div className="container my-2">
                <h1 style={{color: props.mode==='dark'?'white':'black'}}>Your Text Summary</h1>
                <p style={{color: props.mode==='dark'?'white':'black'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p style={{color: props.mode==='dark'?'white':'black'}}>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h2>
                <p style={{color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
