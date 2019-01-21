import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './PageGame.css';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import "moment-timezone";

class PageGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jeu: "",
        }
    }

    componentDidMount() {
        this.fetchGame(this.props.match.params.id);
    }

    /* Permet d'avoir un affichage de la page selon un id unique */
    componentDidUpdate(prevProps) {
        const idGame = this.props.match.params.id;
        if (prevProps.match.params.id !== idGame) {
            this.fetchGame(idGame);
        }
    }

    fetchGame(id) {
        fetch(`http://92.175.11.66:3000/joysticks/api/games/${id}`)
            .then(results => results.json())
            .then(data => {
                this.setState({
                    jeu: data,
                });
            });
    }
    render() {
        const ytLink = "https://www.youtube.com/watch?v="
        const idYtube = this.state.jeu.trailer
            ? this.state.jeu.trailer.split(ytLink)[1]
            /* Attention à la mousse */
            : "";

        return (
            <div className="fond-game">
                <Container className="game-description">
                    <Row className="en-tete neon">
                        <Col md="4" className="jeu-text-game">
                            <p className="align-text"> <Link to={`/theme/${this.state.jeu.theme}`} style={{ textDecoration: 'none' }} ><span className="lien-theme">{this.state.jeu.theme}</span> </Link></p>
                        </Col>
                        <Col md="4" className="jeu-name-titre">
                            <p>{this.state.jeu.name}</p>
                        </Col>
                        <Col md="4" className="jeu-text-game">
                            <p className="align-text">
                                <Moment format="DD/MM/YYYY">{this.state.jeu.date}</Moment>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="container-part-image">
                    <Container className="container-image">
                        <Row>
                            <Col md="6" xs="12">
                            <div className="pochette">
                                <img className="pochette-image" src={this.state.jeu.pochette} alt="imagePochette" />
                            </div>
                            </Col>
                            <Col className="images-games" md="6" xs="12">
                                <img className="first-image" src={this.state.jeu.image1} alt="image1" />
                                <img className="second-image" src={this.state.jeu.image2} alt="image2" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="text-page-game">{this.state.jeu.description}
                </div>
                <div className="game-video">
                    {
                        (idYtube) ?
                            <YouTube className="video"
                                videoId={idYtube}
                                onReady={this._onReady}
                            />
                            : <YouTube className="video"
                                videoId="lxyy_njLmxw"
                                onReady={this._onReady}
                            />
                    }
                </div>

                {
                    (this.state.jeu.is_promo)
                        ?
                        <div className="button-page-game">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/reservation" activeClassName="selected">
                                <Button className="secondary">Je réserve !</Button>
                            </Link>
                        </div>
                        :
                        <div>
                        </div>
                }
                <div className="availabilities">
                    <p className="sale" >Points de ventes :</p>
                    <p><a className="lien-vente" href="https://www.amazon.fr/ref=nav_logo" ><img className="logos-store-min amazon" src="https://userscontent2.emaze.com/images/4a56cdee-11ff-46f7-93ff-d4919a5c553e/7b99c5e69aa3099a26449eca2ebed968.png" alt="Amazon"/></a></p>
                    <p> <a className="lien-vente" href="https://www.fnac.com/" ><img className="logos-store-min" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/499px-Fnac_Logo.svg.png" alt="fnac"/></a></p>
                    <p><a className="lien-vente" href="https://store.steampowered.com/?l=french" ><img className="logos-store-max" src="https://steamuserimages-a.akamaihd.net/ugc/942825896175638418/15C82C2CDC3AFA458751EA4C18A3309A90ED72B5/" alt="Amazon"/></a></p>
                </div>
            </div>
        );
    }
}

export default PageGame;