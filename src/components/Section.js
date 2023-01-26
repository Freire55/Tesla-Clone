import React from 'react'
import styled from 'styled-components'
// import './Section.scss'
import Image from './images/down-arrow.svg'
import Fade from 'react-reveal/Fade';


function Section({ title, description, backgroundImg, rightBtnText, leftBtnText}) {
  return (
    <>
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
        <div className='itemtext'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        </Fade>
        <div className='buttons'>
            <Fade bottom>
        <div className='buttongroup'>
            <div className='leftbutton'>
                {leftBtnText}
            </div>
            {rightBtnText && 
            <div className='rightbutton'>
                {rightBtnText}
            </div>
            }
        </div>
            </Fade>
        <img className='downarrow' src={Image} alt="arrow" />
        </div>
    </Wrap>
    </>
  )
}

export default Section

const Wrap = styled.div` 
    background-size: cover;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background-image: ${props => `url(${props.bgImage})`};
`
