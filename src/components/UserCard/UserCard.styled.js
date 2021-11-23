import styled from 'styled-components'

export const StyledImage = styled.img`
  /* border-radius: 50%;
  width: 50%;
  height: auto; */
  opacity: 1;
  display: block;
  width: 50%;
  border-radius: 50%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
`

export const StyledMiddleContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 25%;
  left: 25%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-25%, -25%);
  text-align: center;
`

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;

  &:hover ${StyledImage} {
    opacity: 0.3;
  }

  &:hover ${StyledMiddleContainer} {
    opacity: 1;
  }
`

export const StyledText = styled.button`
  background-color: #04aa6d;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  cursor: pointer;

  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  :hover {
    box-shadow: 0 0 10px yellow;
  }
`
