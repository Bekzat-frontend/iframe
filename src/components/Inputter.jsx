import React from "react";
import styled from "styled-components";

function Inputter({ placeholder, value, onChange, onKeyDown }) {
  return (
    <div>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
const StyledInput = styled.input``;

export default Inputter;
