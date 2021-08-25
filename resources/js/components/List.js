import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    // height: ,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


    
export const ListMyjiro = ({myjiros,onDeleteMyjiro}) =>{
    const classes = useStyles();
    
    const deleteMyjiro = (id, e, csrf) => {

        if(window.confirm('Are you sure delete')){
            axios
            .delete(`/api/myjiro/${id}`,{ csrf })
            .then(response => {
                if(response.data != null){
                    onDeleteMyjiro(id)
                    
                }
            })
            .catch(error => {
                console.log(error)
            });
        }
    }
    
    return (
        <div className={classes.root}>
          <ImageList rowHeight={180} className={classes.imageList}>
            <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Myjiro</ListSubheader>
            </ImageListItem>
            {myjiros.map((myjiro) => (
              <ImageListItem key={myjiro.id}>
                <img src="https://jiro-ramen2.s3.us-east-2.amazonaws.com/myjiros/hibari.jpg" alt={myjiro.name} />
                <ImageListItemBar
                  title={myjiro.name}
                //   subtitle={}
                  actionIcon={
                    <IconButton aria-label={`info about ${myjiro.name}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
    )
}

