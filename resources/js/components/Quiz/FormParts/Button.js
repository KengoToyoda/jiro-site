import * as React from 'react';
import styled from "styled-components";

export const ButtonInput = styled.button`
    border-radius: 0.25rem;
    box-shadow: rgb(0 0 0 / 15%) 0px -4px 0px 0px inset;
    color: #000000;
    font-weight: bold;
    border: 1px solid #fff;
    width:200px;
    height:50px;
    display: block;
    margin-left: auto;
    background-color:#fff;
`;

export const Button = (props) => {

    return (
        <ButtonInput type="submit">追加</ButtonInput>
    )
}
// export default Button;