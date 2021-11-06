import styled from 'styled-components'

export const PaginationButtons = styled.div`
  .paginationButtons {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    a {
      padding: 10px;
      margin: 8px;
      border-radius: 5px;
      border: 1px solid #2b2eff;
      color: #2b2eff;
      cursor: pointer;

      &:hover {
        color: #fff;
        background-color: #2b2eff;
      }
    }
  }

  .paginationActive a {
    color: #fff;
    background-color: #2b2eff;
  }
`
export const StyledUsersPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: clamp(3rem, 5vw, 7vw);
  color: #eee;
  font-weight: 700;
  margin: 0;
  padding: 0;
  user-select: none;
`

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width: 50%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  background: #ccc;
  border: none;
  border-radius: 3px;
  &:focus {
    outline: 3px solid red;
  }
  ::placeholder {
    color: #000;
  }
`
export const UsernameTitle = styled.h2`
  font-size: 1.5rem;
`
