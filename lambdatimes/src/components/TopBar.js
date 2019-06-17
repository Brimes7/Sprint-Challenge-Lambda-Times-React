import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Bar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const LContainer = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const LSpan = styled.span `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const CenContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const CenSpan = styled.span `
  cursor: pointer;
  margin-right: 5%;

  &: last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`

const RContainer = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const RSpan = styled.span `
  cursor: pointer;
`




const TopBar = () => {
  return (
    <Bar>
      <Container>
        <LContainer>
          <LSpan>TOPICS</LSpan><LSpan>SEARCH</LSpan>
        </LContainer>

        <CenContainer>
          <CenSpan>GENERAL</CenSpan><CenSpan>BROWNBAG</CenSpan><CenSpan>RANDOM</CenSpan><CenSpan>MUSIC</CenSpan><CenSpan>ANNOUNCEMENTS</CenSpan>
        </CenContainer>

        <RContainer>
          <RSpan>LOG IN</RSpan>
        </RContainer>

      </Container>
    </Bar>
  )
}

export default TopBar;