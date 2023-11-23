import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const TrendingVideoItemContainer = styled.li`
  list-style-type: none;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 576px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
  margin-bottom: 20px;
  margin-left: 10px;
  @media screen and (min-width: 576px){
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 40px;
  }
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    max-width: 300px;
    max-height: 200px;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 12px;
  padding: 0px 10px;
  margin-right: 13px;
  width: 100%;
`
export const ChannelProfileImg = styled.img`
  height: 30px;
  margin-right: 15px;
  @media screen and (min-width: 576px) {
    display: none;
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
  margin-right: 18px;
`

export const ViewsAndPublishedDate = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
`

export const VideoListItem = styled.p`
  list-style-type: disc;
  color: ${props => (props.dark ? '#64748b' : '#0f0f0f')};
  font-size: 10px;
  margin-right: 3px;
  @media screen and (min-width: 768px) {
    list-style-type: ${props => (props.views ? 'none' : '')};
  }
`
export const VideoItemLink = styled(Link)`
  text-decoration: none;
`
