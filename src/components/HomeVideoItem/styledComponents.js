import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  list-style-type: none;
  background-color: transparent;
  width: 100%;
  @media screen and (min-width: 570px) {
    width: 44%;
    margin: 16px;
  }
  @media screen and (min-width: 768px) {
    width: 29%;
    margin: 13px;
  }
`

export const HomeVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 10px;
`

export const ThumbnailImg = styled.img`
  width: 100%;
  @media screen and (max-width: 576px) {
    height: 180px;
  }
  @media screen and (min-width: 577px and max-width: 767px) {
    height: 160px;
  }
  @media screen and (min-width: 768px) {
    height: 140px;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 12px;
  padding: 0px 10px;
  margin-right: 13px;
`
export const ChannelProfileImg = styled.img`
  height: 30px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    height: 33px;
  }
`
export const TextDetailsContainer = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const TextDetails = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 1.5;
  margin: 0px;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const ChannelNameAndViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: ${props => (props.dark ? '#64748b' : '#0f0f0f')};
  margin-right: 10px;
`

export const ViewsAndPublishedDate = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
`

export const VideoListItem = styled.p`
  color: ${props => (props.dark ? '#64748b' : '#0f0f0f')};
  font-size: 10px;
  margin-right: 3px;
`
export const VideoItemLink = styled(Link)`
  text-decoration: none;
`
