import React, { Component } from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';


class Banner extends Component {
    render() {
        const { idPromo } = this.props;
        const { promoGame } = this.props;
        const imgSrc = promoGame ? promoGame.promo : "https://www.devolverdigital.com/images/remote/https_s3-us-west-2.amazonaws.com/ee-devolver-website-assets/broforce-screen-6.jpg";
        return (
            <div className="banner" >
                <Link to={`/games/${idPromo}`} style={{ textDecoration: 'none' }} >
                    <div fluid className="background img-fluid" style={{ backgroundImage: `url(${imgSrc})` }} >
                        <Link to="/reservation" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                            <button className="border-text banner-text">
                                JE RESERVE !
                            </button>
                        </Link>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Banner;
