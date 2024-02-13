import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 16rem;
  gap: 30rem;

  background-color: ${(props) => props.theme['gray-100']};

  top: 0;

  position: fixed;
  width: 100vw;

  img {
    margin-top: 2rem;

    @media (max-width: 1300px) {
      margin: 0;
    }
  }

  @media (max-width: 1300px) {
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 4rem;
  }
`

export const ActionsContainer = styled.div`
  margin-left: auto;
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
  white-space: nowrap;

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

    @media (max-width: 1300px) {
      top: 1.8rem;
      right: 3.3rem;
    }
  }

  :hover {
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['yellow-200']};
    cursor: pointer;
  }
`
