import React, { useState } from 'react';

export default function Textform(props) {

    const handleupperClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text converted to uppercase", "success");
      };
//---------------------------------------------------------------------------
    const handlelowerClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to lowercase", "success")
      };
//---------------------------------------------------------------------------
      const handleInputChange = (event) => {
        setText(event.target.value);
    };
//---------------------------------------------------------------------------
    const handleClear = (event) => {
      setText('');
      props.showAlert("Text has been cleared.", "success")
  };
//---------------------------------------------------------------------------
    const handleSpecialCharacters=() =>
    {
      let specialCharacters = "!@#$%^&*()_+{}[]|\\:;'<>?,./\"";
      let count = 0;
      for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if (specialCharacters.includes(char)) {
          count++;
        }
      }
      return count;
    }
//---------------------------------------------------------------------------

    function reverseString(text) {
      var reversedString = '';
      
      for (var i = text.length - 1; i >= 0; i--) {
        reversedString += text.charAt(i);
      }
      
      return reversedString;
    }


    const reversedString = () => {
      var reversedString = reverseString(text);
      setText(reversedString);
      props.showAlert("Text has been reversed.", "success")
    };
//---------------------------------------------------------------------------
    function toCamelCase(inputString) {
      var words = inputString.split(" ");
      
      
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
      }
      
      return words.join(' ');
    }


    const camelCasedString  = () => {
      var camelCasedString  = toCamelCase(text);
      setText(camelCasedString);
      props.showAlert("Text converted to camelcase", "success")
    };
//---------------------------------------------------------------------------

    function copyToClipboard() {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been copied to clipboard.", "success")
    }
//---------------------------------------------------------------------------

  function removeDuplicates() {
    let wordArr = text.split(" ");
    let newText = wordArr.filter((item, pos)=>{
          return wordArr.indexOf(item) === pos;
    })
    newText = newText.join(" ");
    setText(newText);
    props.showAlert("Duplicate text has been removed.", "success")
  }


//---------------------------------------------------------------------------
  function removeExtraSpaces(text) {
    return text.replace(/\s+/g, ' ').trim();
  }

  const cleanedString  = () => {
    var cleanedString = removeExtraSpaces(text);
    setText(cleanedString);
    props.showAlert("Extra space has been removed", "success")
  };

//---------------------------------------------------------------------------

    const [text, setText] = useState('');

//---------------------------------------------------------------------------
  return (
    <>
      <div className="container">
        <div className="mb-2"> 
           <h1 className='mb-2'>Enter the text to analyze below</h1>
            <textarea className="form-control mb-2" value={text} onChange={handleInputChange} id="myBox" rows="8" style={{backgroundColor : props.mode === 'light'? 'white':'lightgray', border:'none', color:'black',border : '2px solid black'}}></textarea>
            <button className="btn btn-primary " onClick={handleupperClick}>Convert To Uppercase</button>
            <button className="btn btn-primary m-2" onClick={handlelowerClick}>Convert To Lowercase</button>
            <button className="btn btn-primary m-2" onClick={camelCasedString}>Convert To Camelcase</button>
            <button className="btn btn-primary m-2" onClick={reversedString}>Reverse Text</button>
            <button className="btn btn-primary m-2" onClick={copyToClipboard}>Copy To Clipboard</button>
            <button className="btn btn-primary m-2" onClick={removeDuplicates}>Remove Duplicates</button>
            <button className="btn btn-primary m-2" onClick={cleanedString}>Remove Extra Spaces</button>
            <button className="btn btn-primary " onClick={handleClear}>Clear Text</button>
        </div>
    </div>

    <div className="container">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <p>{handleSpecialCharacters()} special characters</p>
      <h2 className="my-1">Preview</h2>
      <p>{text}</p>
    </div>
    </>
    
  )
}
