// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Helvetica', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: rgba(128, 128, 128, 0.3);
  margin: 10px auto;
  width: 50%;
`;

const StyledH3 = styled.h3`
  margin: 0;
  font-family: 'Verdana', sans-serif;
  font-size: 1.5rem;
`;

const StyledH4 = styled.h4`
  margin: 0;
  font-family: 'Verdana', sans-serif;
  font-size: 1.2rem;
`;
const Character = props => {
   

    return (
        <StyledCharacter>
            <h3>{props.info.name}</h3>   <h4>{props.info.birth_year}</h4>
        </StyledCharacter>
    )
}


export default Character;


//  