import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  width: 100rem;
  margin-left: 20rem;
  margin-top: 7rem;

  @media (max-width: 1300px) {
    width: 6rem;
    margin-left: 0;
    white-space: nowrap;
  }
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
