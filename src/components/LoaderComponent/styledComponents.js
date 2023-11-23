import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-color: ${props => props.bgColor};
  height: ${props => props.height};
  width: 100%;
`
