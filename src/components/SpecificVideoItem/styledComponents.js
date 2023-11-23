import styled from 'styled-components'

export const SpecificVideoDetailsContainer = styled.div`
  margin-top: 70px;
  padding: 12px;
  width: 100%;
  background-color: ${props => props.bgColor};
  height: 100vh;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-left: 20vw;
  }
`

export const TitleHeading = styled.p`
  font-family: 'Roboto';
  font-size: 0.9em;
  font-weight: 500;
  padding: 0px;
  margin: 0;
  margin-top: 8px;
  color: ${props => (!props.dark ? '#181818' : '#f8fafc')};
  @media screen and (min-width: 768px) {
    font-size: 1.15rem;
  }
`

export const ViewsAndPublishedDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const VideoListItem = styled.p`
  color: ${props => props.color};
  font-size: 10px;
  margin-right: 3px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const ViewAndLikeButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  padding: 0;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    width: 50%;
    padding-right: 20px;
  }
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  outline: none;
  background: transparent;
  padding: 10px;
  border: none;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const HorizontalLine = styled.hr`
  width: 100%;
  color: ${props => props.color};
  margin: 0;
  padding: 0;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 15px;
`
export const ChannelImage = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 20px;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`

export const ChannelNameAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 6px;
  font-family: 'Roboto';
`
export const ChannelName = styled.p`
  font-size: 13px;
  margin: 0;
  padding: 0;
  color: ${props => (props.dark ? '#fff' : '#000')};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ChannelFollowers = styled.p`
  font-size: 10px;
  color: ${props => (props.dark ? '#64748b' : '#909090')};
  margin: 0;
  padding: 0;
  margin-top: 6px;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`

export const VideoDescriptionLd = styled.p`
  color: ${props => props.color};
  margin-top: 15px;
  font-size: 13px;
  margin: 0;
  padding: 0;
  margin-top: 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const VideoDescriptionSd = styled.p`
  font-size: 12px;
  color: ${props => props.color};
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
