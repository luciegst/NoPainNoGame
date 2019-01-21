import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import './CardTheme.css';
import { Link } from 'react-router-dom';


const CardTheme = (props) => {
    /* Reprend l'url et remplace les espaces par des - */
    const url = props.theme.replace(/\s/g, '-')
    return (
        <Card className="cardTheme">
            <Link to={`/theme/${url}`}>
                <div className="divImageTheme">
                    <CardImg className="img-fluid imgTheme" src={props.imgTheme} alt="Card" />
                </div>
                <CardImgOverlay>
                    <CardTitle className="titreTheme"> <span className="cardTitreTheme"> {props.theme} </span></CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

export default CardTheme;
