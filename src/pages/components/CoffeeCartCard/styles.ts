import styled from 'styled-components'

export const SelectionContainer = styled.div`
  display: flex;
  width: 30rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  margin-top: 0rem;
  padding: 0.6rem;

  img {
    margin-top: 0.8rem;
    width: 5rem;
    height: 5rem;
  }

  div {
    margin-bottom: 0.5rem;
  }
`

export const RemoveButton = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 1.8rem;
  margin-top: -0.5rem;

  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;

  border-radius: 8px;
  border-style: none;
  border: none;
  background-color: ${(props) => props.theme['gray-400']};

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['gray-500']};
  }
`

export const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    margin: 1rem;
    font-size: 1.2rem;
    width: 100%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const PriceContainer = styled.div`
  margin-top: 1rem;
  width: 8rem;
  color: ${(props) => props.theme['gray-800']};
  font-size: 1rem;
  font-weight: 600;
`

export const Input = styled.div`
  margin: 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`
