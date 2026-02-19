import React, { useEffect, useState } from 'react';
import MemeCard from '../components/card';
import { getallMemes } from '../api/memes'; 

const Home = () => {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        getallMemes().then((res) => { 
            
            setMemes(res.data.memes); 
        });
    }, []);

    return (
        <div className="row">
            {memes && memes.map((el) => (
                <MemeCard key={el.id} img={el.url} title={el.name} />
            ))}
        </div>
    );
};

export default Home;``