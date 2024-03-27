import styled from 'styled-components';

const StyledRangeButtons = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 24px 0;
  padding: 0;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 64px;
    margin-bottom: 0;
  }

  li {
    margin-right: 8px;

    @media (min-width: 768px) {
      margin-left: 8px;
      margin-right: 0;
    }
  }

  button {
    background-color: #282828;

    &:hover,
    &:focus {
      background-color: #535353;
    }

    &.active {
      background-color: #1db954;
    }
  }
`;

export default StyledRangeButtons;
