import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const TitleInput = styled.input`
  width:100%;
  height: 3rem;
  border-radius: 0.25rem;
  box-shadow: rgb(0 0 0 / 15%) 0px -4px 0px 0px inset;
  color:rgb(204, 204, 204);
  border: 1px solid #fff;
  text-align: center;
`;

export const Title = (props) => {

    return (
        <TitleInput 
            type="text"
            placeholder="問題を入力" 
            // onChange={(e) => handleSetTitle(e)}
            {...props.register("title")}
        />
    )
}
// export default Title;