import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 5rem 16rem;
  gap: 4rem;

  h2 {
    margin-top: -2.5rem;
    margin-bottom: 2rem;
  }
`

export const SecondContainer = styled.div`
  min-width: 30rem;
  height: fit-content;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 0.4rem 2.7rem;
  padding: 0.5rem;

  h2 {
    margin-top: -3rem;
    margin-bottom: 2rem;
  }
`