import styled from 'styled-components'

// NotFoundContainer,
//   NotFoundImage,
//   NotFoundHeading,
//   NotFoundDescription,

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  background-color: ${props => props.bgColor};
  padding: 20px;
  height: 100vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-left: 20vw;
  }
`
export const NotFoundImage = styled.img`
  width: 50%;
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.dark ? '#fff' : '#000')};
  margin-top: 20px;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#ebebeb' : ' #909090')};
`
