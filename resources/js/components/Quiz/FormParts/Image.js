import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Container from '@mui/material/Container';
import AddBoxIcon from '@mui/icons-material/AddBox';

const ImageContainer = styled(Container)`
    width:60%;
    border-radius: 0.25rem;
    box-shadow: rgb(0 0 0 / 15%) 0px -4px 0px 0px inset;
    color: rgb(204, 204, 204);
    border: 1px solid #fff;
    margin: 30px  auto;
    height: 15rem;
    position:relative;
    background-color:#fff;
    background-image: url(${props => props.imagedata});
    background-size: contain;
    background-repeat: no-repeat;
    background-position:center;
    
`;

const ImageInput = styled.input`
    opacity: 0;
    position:absolute;
    top: 50%;
    left: 50%;
    width:100%;
    height:5rem;
    transform: translate(-50%, -50%);
    &:hover {
    cursor: pointer;
    color:red;
`;
const ImagePreview = styled.img`
    width:100px;
`;

const StyledAddBoxIcon = styled(AddBoxIcon)`
    width:70px;
    height:70px;
    color:#fdd835;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Image = (props) => {
    const [imageData, setImageData] = useState('');
    
    const handleSetImage = (e) => {
        const files = e.target.files
        if (files.length > 0){
            var file = files[0]
            var reader = new FileReader()
            reader.onload = (e) => {
                setImageData(e.target.result)
                console.log(imageData);
            };
            reader.readAsDataURL(file);
        } else {
            setImageData(null)
        }
    }
    
    return (
        <ImageContainer imagedata={imageData}>
            <StyledAddBoxIcon />
            <ImageInput 
                type="file"
                accept="image/*,.png,.jpg,.jpeg,.gif" 
                // onChange={(e) => handleSetImage(e)}
                {...props.register("image")}
            />
        </ImageContainer>

    )
}
