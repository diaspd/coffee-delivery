import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  gap: 0.2rem;
  padding: 1rem;
  min-width: fit-content;
  max-height: fit-content;

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme['purple-200']};
    border-color: ${(props) => props.theme['purple-500']};
  }
`

export const ContentContainer = styled.div`
  padding: 0 1rem;

  background-color: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  transition: 0.4s;

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
  }
  user-select: none;
`
