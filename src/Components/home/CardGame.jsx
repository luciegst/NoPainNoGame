import React from 'react';
import { Card, CardImg } from 'reactstrap';
import "./CardGame.css";
import { Link } from 'react-router-dom';

const CardGame = (props) => {

  return (
    <Card className="card">
      <Link to={`/games/${props.id}`} >
        <div className="divImage">
          <CardImg className="img" src={props.pochette} alt="Card image cap" />
        </div>
      </Link>
    </Card>
  );
}

export default CardGame;