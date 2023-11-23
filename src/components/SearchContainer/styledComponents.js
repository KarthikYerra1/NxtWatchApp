import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 12px;
  @media screen and (min-width: 568px) {
    justify-content: flex-start;
  }
`

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  @media screen and (min-width: 568px) {
    justify-content: flex-start;
    width: 80%;
  }
`

export const InputBar = styled.input`
  height: 36px;
  background-color: ${props => (props.dark ? 'transparent' : '#fff')};
  border: ${props => (props.dark ? 'solid 1px #606060' : 'solid 1px #cccccc')};
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  outline: none;
  color: ${props => (props.dark ? '#fff' : '#606060')};
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`

export const SearchButton = styled.button`
  height: 36px;
  background-color: ${props => (props.dark ? '#383838' : 'transparent')};
  border: ${props => (props.dark ? 'solid 1px #606060' : 'solid 1px #cccccc')};
  margin-top: 10px;
  padding: 10px;
  width: 50px;
  cursor: pointer;
  outline: none;
  text-align: center;
`
