import React from 'react';
import buurgerLogo from '../../assets/Images/BurgerLogo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}> 
        <img  src={buurgerLogo} alt="DopeBurger" /> 
    </div>
);

export default logo;