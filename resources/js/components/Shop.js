import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ShopDetail from './ShopDetail'

function Shop() {
    
    const [shops, setShops] = useState([]);
    
    useEffect(() => {
        getShops()
    }, [])
    
    const getShops = async () => {
        const response = await axios.get('/api/shop');
        setShops(response.data.shops)
    }


return (
        <div>
            <h1>Userページ</h1>
            <ul>
                {shops.map((shop) => 
                <li key="{shop.id}">
                    {shop.shop}
                    <Link to={'/shop/' + shop.id}>
                        詳細
                    </Link>
                </li>)}
            </ul>
        </div>
    );
}

export default Shop;