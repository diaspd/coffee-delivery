import styled from 'styled-components'

export const Form = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 1rem;
  max-width: 48rem;
  max-height: 50rem;

  footer {
    margin: 7rem 2.8rem 2rem 2.8rem;
    max-width: 37rem;

    span {
      margin-left: 0.5rem;
      font-weight: 600;

      p {
        margin-top: 0.4rem;
        margin-left: 1.5rem;
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }
`

export const Header = styled.div`
  display: flex;
  margin: 2.8rem;

  span {
    margin-left: 0.5rem;
    font-weight: 600;

    p {
      margin-top: 0.4rem;
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const Content = styled.div`
  display: flex;
  margin: 2.8rem;
`
