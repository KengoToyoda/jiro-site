import React, { useEffect, useState } from 'react';
import axios from 'axios';

function show_img(props){
    return <img src="{props.match.params.image}" />
}

function ShopDetail(props) {
    
    const [shop, setShop] = useState([]);
    
    useEffect(() => {
       getShop()
    }, [])
    
    const getShop = async () => {
        const response = await axios.get('/api/shop/' + props.match.params.id);
        setShop(response.data.shop)
    }
    
    
    
    return (
        
        <div>
            <h1>Shopの詳細ページ</h1>
            <p>{shop.shop}</p>
            <img src={shop.image} />
        </div>
        
    );
}    

export default ShopDetail;