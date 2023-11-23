import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  margin-top: 70px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-left: 20vw;
  }
`

export const RenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  height: 100vh;
  width: 100%;
  margin-top: 10px;
`

export const HomeVideosListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-size: cover;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  overflow-y: auto;
`

export const NoOrFailureVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  font-family: 'Roboto';
`

export const NoOrFailureVideosImage = styled.img`
  width: 50%;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-top: 60px;
  }
`

export const NoOrFailureVideosHeading = styled.h2`
  color: ${props => (props.dark ? '#f4f4f4' : '#0f0f0f')};
  font-size: 16px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const NoOrFailureVideosDescription = styled.p`
  color: ${props => (props.dark ? '#64748b' : '#909090')};
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  border-style: none;
  outline: none;
  cursor: pointer;
  height: 45px;
  padding: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  border-radius: 5px;
  width: 80px;
`
