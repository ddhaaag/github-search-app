import styled from 'styled-components'

export const List = styled.ul`
  list-style-type: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid #9b8dab;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid #e0dddd;
  :first-of-type {
    border-top: none;
  }
`
export const ListHeader = styled.h2`
  font-size: 20px;
`
export const ListDescription = styled.p`
  font-size: 16px;
`
