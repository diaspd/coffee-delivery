import styled from 'styled-components'

export const Container = styled.div`
  p {
    color: red;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
`

export const LabelComponent = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`

export const BaseInput = styled.input`
  all: unset;
  padding: 1.2rem;
  color: ${(props) => props.theme['gray-600']};
  border-radius: 0.25rem;
`

export const FormInput = styled(BaseInput)`
  background-color: ${(props) => props.theme['gray-400']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-600']};
  font-size: 1.2rem;
  min-width: 6rem;

  width: 80%;
  margin: 0 0 1rem 0;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  :focus {
    border: 1px solid ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['gray-800']};
  }

  :not(:placeholder-shown) {
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ContentInput = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 0.6rem;
  height: 3rem;
`

export const LastInputs = styled.div`
  display: flex;
  max-width: 88%;
  gap: 1rem;
`
