import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 1rem 16rem;
  justify-content: space-between;
  margin-top: 5rem;

  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-size: 32;
    font-weight: bold;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }

  img {
    margin-top: 7.2rem;
  }
`

export const Text = styled.p`
  font-size: 1.25rem;
`

export const MainContainer = styled.main`
  margin-top: 2.3rem;
  max-width: 32.8rem;
  padding: 2.8rem;

  border: 1px solid ${(props) => props.theme['purple-700']};
  border-radius: 6px 36px 6px 36px;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`

const IconsBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
`

export const IconMap = styled(IconsBase)`
  background-color: ${(props) => props.theme['purple-500']};
  padding: 0.5rem;
`

export const IconTimer = styled(IconsBase)`
  background-color: ${(props) => props.theme['yellow-500']};
`

export const IconDolar = styled(IconsBase)`
  background-color: ${(props) => props.theme['yellow-700']};
`
