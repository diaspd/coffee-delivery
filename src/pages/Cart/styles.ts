import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 16rem;
  gap: 4rem;
  margin-top: 12rem;

  h2 {
    margin-top: -2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    margin: 12rem 6rem;
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

  @media (max-width: 1300px) {
    flex-direction: column;
    margin: 12rem 0;
  }
`
