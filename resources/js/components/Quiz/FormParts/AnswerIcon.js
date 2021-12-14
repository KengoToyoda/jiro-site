import * as React from 'react';
import styled from "styled-components";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

export const AnswerIcon = (props) => {
    
    return (
        <div>
            {(() => {
            if(props.AnswerNum === 0){
                return (<LooksOneIcon sx={{ width:'3em', height: 'auto', color:'red'}} />)
            }else if(props.AnswerNum  === 1){
                return (<LooksTwoIcon sx={{ width:'3em', height: 'auto', color:'blue'}} />)
            }else if(props.AnswerNum  === 2){
                return (<Looks3Icon sx={{ width:'3em', height: 'auto', color:'yellow'}} />)
            }else if(props.AnswerNum  === 3){
                return (<Looks4Icon sx={{ width:'3em', height: 'auto', color:'green'}} />)
            }
            })()}
        </div>
    )
}