import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListItemText } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { List } from '@material-ui/core';

function Myjiro() {
    
    const [myjiros, setMyjiros] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    
    const handleChange = (e) => {
      setName(e.target.value)
    }
    const upImage = (e) => {
        setImage(e.target.file[0]);
    }
    useEffect(() => {
        axios
        .get('/api/myjiro')
        .then(response => {
            setMyjiros(response.data.myjiros);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    
    const createMyjiro = () => {
      axios
      .post('/api/myjiro', {
        name: name,
        image:image
      })
      .then(response => {
        setMyjiros([...myjiros, response.data])
      })
      .catch(error => {
        console.log(error);
      });
    }
    
    return(
        <div>
            <h1>Myjiroページ</h1>
            <List>
                {myjiros.map((myjiro) =>
                    <ListItem key={myjiro.id} >{myjiro.name}</ListItem>
                )}
            </List>
            <div className="up_item">
                <input value={name} onChange={handleChange} key="{myjiro.id}" />
                <input type="file" value={image} onChange={upImage} key="{myjiro.id}" />
                <button  onClick={createMyjiro}>追加</button>
            </div>
        </div>
    )
}

ReactDOM.render(<Myjiro />, document.getElementById('myjiro'));
