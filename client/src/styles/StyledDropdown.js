import styled from 'styled-components';

const StyledDropdown = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  z-index: 1;

  @media (min-width: 768px) {
    right: 64px;
  }

  &:after {
    content: '';
    top: 15px;
    right: 12px;
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #ffffff;
  }

  select {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${(props) =>
      props.active ? 'rgba(255,255,255,0.1)' : 'transparent'};
    color: white;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    font-family: inherit;
    padding: 8px 32px 8px 12px;
  }
`;

export default StyledDropdown;
