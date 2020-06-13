import styled from 'styled-components';


const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => (props.alignItems ? 'center' : 'unset')};
  justify-content: ${props => (props.justifyItems ? 'center' : 'unset')};
  @media (max-width: 768px) {
    flex-direction: ${props => (props.disableMobileColumn ? 'unset' : 'column')};
  }
`;

export default FlexRow;
