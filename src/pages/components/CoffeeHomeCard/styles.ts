import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 5rem 0;
  max-width: 17rem;
  height: 20rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme['gray-300']};

  img {
    margin-top: -4rem;
    margin-bottom: 0.8rem;
  }

  h3 {
    margin: 1rem 0;
    font-weight: bold;
    font-size: 20px;
  }

  span {
    padding: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const ContainerShop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  legend {
    margin-top: 0.4rem;
    font-size: 1.4rem;
    color: ${(props) => props.theme['gray-700']};
  }

  span {
    padding: 0.2rem;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-800']};
  }

  div {
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    width: 6rem;
  }

  input {
    text-align: center;

    width: 1rem;
    height: 2rem;
    font-size: 1.8rem;
    border-style: none;
    border: none;

    background-color: ${(props) => props.theme['gray-400']};
  }
`

export const ShoppingButton = styled.button`
  padding: 0.6rem;
  margin: 0.8rem;
  height: 2.5rem;
  border-style: none;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-700']};
  transition: 0.5s;

  :hover {
    background-color: ${(props) => props.theme['purple-500']};
    cursor: pointer;
  }
`

export const Tags = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 4px;
  padding: 0.4rem;
  border-radius: 30px;

  span {
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: bold;

    color: ${(props) => props.theme['yellow-700']};
    background-color: ${(props) => props.theme['yellow-200']};
  }
`
