import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 4rem 16rem;
  justify-content: space-around;
  border-radius: 8px;
  background: rgb(201, 73, 255);
  background: linear-gradient(
    90deg,
    rgba(201, 73, 255, 0.02832851890756305) 35%,
    rgba(160, 3, 157, 0) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`

export const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 6rem 1rem 0;

  h1 {
    font-weight: bold;
    font-size: 4rem;
  }

  p {
    font-weight: regular;
    font-size: 1.7rem;
    margin-top: 1rem;
  }
`

export const ContainerFirstIcons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem 1rem 0 0;

  p {
    font-size: 16px;
    margin: 2rem 1rem 0 0;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ContainerSecondIcons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 0rem 0.8rem 0 0;

  p {
    font-size: 16px;
    margin: 2rem 1rem 0 0.1rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const IconContainerBase = styled.div`
  display: flex;
  margin: 2rem 0.8rem 0 0;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;
`

export const IconCoffe = styled(IconContainerBase)`
  background: ${(props) => props.theme['purple-500']};
`

export const IconTimer = styled(IconContainerBase)`
  background: ${(props) => props.theme['yellow-500']};
`

export const IconPackage = styled(IconContainerBase)`
  background: ${(props) => props.theme['gray-800']};
`

export const IconCart = styled(IconContainerBase)`
  background: ${(props) => props.theme['yellow-700']};
`

export const ImgContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
`
