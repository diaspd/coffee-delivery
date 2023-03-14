import styled from 'styled-components'

export const ButtonAddContainer = styled.div`
  display: flex;

  input {
    width: 1.8rem;
    text-align: center;
    height: 1.8rem;
    font-size: 1.2rem;
    border-style: none;
    border: none;
    background-color: ${(props) => props.theme['gray-400']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 7rem;
    background-color: ${(props) => props.theme['gray-400']};
    margin: 0;
    border-radius: 8px;
    padding: 0.1rem;
  }
`

export const IconContainer = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['purple-500']};
  cursor: pointer;
`
