import React from "react";
import styled from "styled-components";
export const StyledButton = styled.button`
  background-color: #1a70d3;
  color: white;
  padding: 10px 30px;
  border-radius: 9px;
  margin-left: 3px;
`;
function TodoButton({ props }) {
  return (
    <>
      <StyledButton>{props}</StyledButton>
    </>
  );
}

export default TodoButton;
