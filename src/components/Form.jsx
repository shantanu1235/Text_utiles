import React, { useState } from 'react'

export default function Form(props) {
    const[text,setText]=useState('enter the text here')

    const convert_text =() => {
        // console.log('uppercase was clicked')
        let texts=text.toUpperCase()
        setText(texts)
        
    }
    const change=(event)=>{
      console.log('on Change')
      setText(event.target.value)
        
    }
    const convert_lower_text=()=>{
      let texts=text.toLocaleLowerCase()
      setText(texts)
    }
    const clear=()=>{
      let texts=' '
      setText(texts)
      }
      const copy=()=>{
        let texts=  document.getElementById('floatingTextarea')
        texts.select()
        navigator.clipboard.writeText(texts.value)
      }

  return (
    <>
     
      <div className="container">
      <h1 className='my-3'>{props.heading}</h1>
      <textarea className="form-control my-3" placeholder="" id="floatingTextarea" rows="10"  value={text}  onChange={change}></textarea>
</div>
<div >
      <button onClick={convert_text} className='my-2 mx-2'  >convert to upper case</button>
      <button onClick={convert_lower_text} className='my-2 mx-2'>convert to lower case</button>
      <button onClick={clear} className='my-2 mx-2'>clear_text</button>
      <button onClick={copy} className='my-2 mx-2'>copy text</button>
</div>
<div>
  <h2>your text summary</h2>
  <p>{text.split(' ').length} and {text.length}</p>
  <p>{0.5 * text.split(' ').length}</p>

  <h3>Preview</h3>
  <p>{text}</p>
</div>

  </>
  )
}
