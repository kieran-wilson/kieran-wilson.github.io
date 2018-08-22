import styled from 'styled-components';

const Section = styled.div`
  margin: 20px ${props => `-${props.theme.columnItemSpacing}px`};
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;

export default Section;
