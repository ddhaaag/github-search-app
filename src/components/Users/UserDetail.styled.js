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
