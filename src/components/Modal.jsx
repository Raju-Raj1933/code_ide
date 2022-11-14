import React from 'react'
import styled from 'styled-components'
import { NewFolder, NewPlayground, NewPlaygroundAndFolder } from './ModalTypes'



const ModaContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width:100%;
height:100vh;
background-color: rgba(0, 0, 0, 0.8);
display:flex;
justify-content:center;
align-items:center;

`

const ModalContent = styled.div`
background-color:#fff;
padding:0.5rem;
`

export const Header = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`

export const Heading = styled.h3`
  font-weight: 400;
  span{
    font-weight: 700;
  }
`








const Modal = () => {
      const type = 2;
  return (
      <ModaContainer>
            <ModalContent>
                  {type === 1 && <NewFolder />}
                  {type === 2 && <NewPlayground />}
                  {type === 3 && <NewPlaygroundAndFolder />}
            </ModalContent>
      </ModaContainer>
  )
}

export default Modal