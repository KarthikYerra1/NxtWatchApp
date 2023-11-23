import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  margin-top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-left: 20vw;
    width: 80vw;
  }
`
export const RenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  margin-top: 10px;
`

export const SavedVideosHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 15%;
  width: 100%;
  background-color: ${props => (props.dark ? '#313131' : '#ebebeb')};
  padding: 30px;
`
export const SavedVideosIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#000' : '#cbd5e1')};
  height: 60px;
  width: 60px;
  border-style: none;
  border-radius: 30px;
  @media screen and (min-width: 576px) {
    height: 70px;
    width: 70px;
    border-radius: 35px;
  }
  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
    border-radius: 40px;
  }
`
export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#ffffff' : '#212121')};
  font-weight: bold;
  font-size: 30px;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const SavedVideosListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-color: ${props => props.bgColor};
  padding: 0px;
  margin: 0px;
  width: 100%;
  overflow: auto;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  font-family: 'Roboto';
  margin-top: 70px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-left: 20vw;
  }
`

export const NoSavedVideosImage = styled.img`
  width: 50%;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-top: 60px;
  }
`
export const NoSavedVideosHeading = styled.h1`
  color: ${props => (props.dark ? '#f4f4f4' : '#0f0f0f')};
  font-size: 16px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const NoSavedVideosDescription = styled.p`
  color: ${props => (props.dark ? '#64748b' : '#909090')};
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
