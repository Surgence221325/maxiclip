import { InputHTMLAttributes, FC } from 'react'

const LogoDisplay = () => {
  // p https://i.imgur.com/RNkyf8x.png
  return (
    <>
      <div className="LogoDisplay">
      <img className="LogoPicture" src="https://i.imgur.com/RNkyf8x.png"></img> 
        <h1>MaxiClip</h1>
        <h2>ITS TIME TO COOK</h2>
      </div>
    </>
  )
}

export default LogoDisplay
