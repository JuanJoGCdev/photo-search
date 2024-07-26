import React from 'react';
import './buttonSearchSection.scss';
import { useNavigate } from 'react-router-dom';

const ButtonSearchSection = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/post');
    };

    return (
        <div>
            <a className='buttonSearchSection' onClick={handleClick}>Search</a>
        </div>
    );
}

export default ButtonSearchSection;
