import React, { useEffect, useState } from 'react'
import './animationTex.css'

export const AnimationTex = ({text}) => {

    const [textShow, setTextShow] = useState("");
    const velocityText = 200;
    let indexRef = 0

    useEffect(() => {

      const writteText = ()=>{
        if(indexRef < text.length){
          console.log(indexRef)
            const nextCharacter = text[indexRef]
            setTextShow((prev) => prev  + nextCharacter);
            indexRef++;
            setTimeout(writteText, velocityText)
        }
      }
     writteText()
    },[text])
    

  return (
    <div className='text-show'>
        <h1>{textShow}</h1>
    </div>
  )
}
