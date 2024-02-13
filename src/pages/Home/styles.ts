import styled from 'styled-components'

export const Title = styled.h2`
  margin: 7rem 15rem 0rem 16rem;
`

export const CoffeeCardContainer = styled.div`
  max-width: 120rem;
  display: grid;
  gap: 56px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;

  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
    margin: 4rem;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin: 4rem;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    margin: 4rem;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
