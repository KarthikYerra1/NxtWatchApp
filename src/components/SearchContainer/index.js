import {AiOutlineSearch} from 'react-icons/ai'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SearchBarContainer,
  SearchDiv,
  InputBar,
  SearchButton,
} from './styledComponents'

const SearchContainer = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {
        searchInput,
        onChangeSearchInput,
        onEnterSearchInput,
        onClickSearchIcon,
      } = props

      const onChangeSearch = event => {
        onChangeSearchInput(event.target.value)
      }

      const onClickSearchButton = () => {
        onClickSearchIcon()
      }

      const onKeyDownEnter = event => {
        if (event.key === 'Enter') {
          onEnterSearchInput()
        }
      }

      return (
        <SearchBarContainer>
          <SearchDiv>
            <InputBar
              dark={isDarkMode}
              placeholder="search"
              type="search"
              value={searchInput}
              onChange={onChangeSearch}
              onKeyDown={onKeyDownEnter}
            />
            <SearchButton
              data-testid="searchButton"
              dark={isDarkMode}
              onClick={onClickSearchButton}
              type="button"
            >
              <AiOutlineSearch color="#606060" size={16} />
            </SearchButton>
          </SearchDiv>
        </SearchBarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SearchContainer
