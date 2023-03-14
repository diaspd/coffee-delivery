import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  margin: 1rem 16rem;
  justify-content: space-between;

  img {
    margin-top: 2rem;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Text = styled.p`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  margin: 33px 0 33px;
  border-radius: 4px;
  background-color: ${(props) => props.theme['purple-200']};
  color: ${(props) => props.theme['purple-700']};

  MapPin {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 33px 0 33px 12px;
  padding: 0.4rem;
  border-radius: 8px;
  border: none;
  color: ${(props) => props.theme['yellow-700']};
  background-color: ${(props) => props.theme['yellow-200']};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: 2.5rem;
    right: 15.2rem;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-700']};
  }

  :hover {
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['yellow-200']};
    cursor: pointer;
  }
`
