import styled from 'styled-components'

export const Confirm = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  padding: 1rem;
  margin: 1rem;

  p {
    display: flex;
    justify-content: space-between;
  }

  span {
    display: flex;
    justify-content: space-between;

    font-weight: bold;
    font-size: 1.3rem;
  }
`

export const ConfirmButton = styled.button`
  margin-top: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-500']};
  transition: 1s;
  border: none;
  border-radius: 0.3rem;
  text-align: center;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['yellow-700']};
  }
`
