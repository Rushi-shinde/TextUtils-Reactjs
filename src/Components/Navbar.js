import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  
  const [color, setColor] = useState('white')

  const colorChangerRed = () =>{
      if(document.getElementById('inlineRadio1').ariaChecked)
      {
        setColor('red')
        document.body.style.backgroundColor = 'red';
      }
  }
  const colorChangerGreen = () =>{
    if(document.getElementById('inlineRadio2').ariaChecked)
    {
      setColor('red')
      document.body.style.backgroundColor = 'green';
    }
}

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="/">{props.brand}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>

            <div className="form-check form-check-inline" id="inlineRadio">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={colorChangerRed}  />
              <label className="form-check-label" for="inlineRadio1">red</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={colorChangerGreen} />
              <label className="form-check-label" for="inlineRadio2">green</label>
            </div>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' :'light'}`}>
              <input className="form-check-input" style={{marginLeft:-30, marginRight:5}} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
      </>
  )
}

Navbar.propTypes = {
    brand : PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    brand : 'shinde'
}
