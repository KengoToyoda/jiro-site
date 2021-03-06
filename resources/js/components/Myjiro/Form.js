import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

 const useStyles = makeStyles({
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    });

export const Form = (props) => {
    const classes = useStyles();
    
    const [ShopId, setShopId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
    const csrf  = { csrf_token: csrf_token }
    
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSetImage = (e) => {
        // if (!e.target.files) return
        setImage(e.target.files[0])
    }
    
    const handleSetShopId = (e) => {
        setShopId(e.target.value)
    }

    const handleSubmit = (e) => {
        event.preventDefault();
        const Pram = new FormData();
        Pram.append('image', image);
        Pram.append('csrf', csrf);
        let config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
       
        config.headers['X-HTTP-Method-Override'] = 'PUT';
         //一旦POSTで送って上記でPUTに上書き
        axios
        .post(`/myjiro/${ShopId}`, Pram, config)
        .then(response => {
            const myjiro = response.data
            props.onSetMyjiro(myjiro);
            alert('successful')
        })
          .catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit()}> 
                <label>追加する店舗を選んでください</label>
                <select value={ShopId} onChange={handleSetShopId}>
                <option selected>店舗名</option>
                    {props.Myjiros.map((myjiro) => (
                            <option value={myjiro.id}>{myjiro.name}</option>
                        ))
                    }
                </select>
                <input 
                    type="file"
                    accept="image/*,.png,.jpg,.jpeg,.gif" 
                    onChange={(e) => handleSetImage(e)}
                    multiple
                />
                <Button className={classes.root} type="submit">追加</Button>
            </form>
        </div>
    )
}