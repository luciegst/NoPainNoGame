import React, { Component } from 'react';
import Banner from './Banner';
import './Accueil.css';
import CardGame from './CardGame';
import CardTheme from './CardTheme';
import { Col, Row, Container } from 'reactstrap';


class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        fetch('http://92.175.11.66:3000/joysticks/api/games')
            .then(results => results.json())
            .then(data => {
                this.setState({
                    list: data,
                });
            });
    }

    /* Supprimer les doublons dans la liste */
    triTheme(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < arr.length; j++) {
                if (arr[i].theme === arr[j].theme) {
                    arr.splice(i, 1)
                }
            }
        }
    }

    render() {
        const promoGame = this.state.list.find(jeu => jeu.is_promo === 1);
        const idPromo = this.state.list.filter(jeu => jeu.is_promo === 1).map(jeu => jeu.id)
        /* Affiche les trois jeux de notre selection */
        const jeuFilter = this.state.list.slice(4, 7)
        /* Création d'objet pour réutiliser dans la section theme */
        const theme = this.state.list.map(jeu => {
            return {
                "theme": jeu.theme,
                "image": jeu.image1,
            }
        }).sort((a, b) => a.theme.localeCompare(b.theme))
        this.triTheme(theme)
        return (
            <div>
                <Banner
                    promoGame={promoGame}
                    idPromo={idPromo}
                />
                <div>
                    <Container>
                        <h2 className="derniersJeux">Notre sélection</h2>
                        <Row className="sizeGames">
                            {jeuFilter.map(jeu => (
                                <Col className="rowGame" key={jeu.id} lg="4" sm="12" md="12" xs="12">
                                    <CardGame
                                        titre={jeu.name}
                                        pochette={jeu.pochette}
                                        id={jeu.id}
                                    />
                                </Col>
                            ))}
                        </Row>
                        <h2 className="theme">Themes</h2>
                        <Row>
                            {
                                theme.map(theme => (
                                    <Col className="premiereRow" key={theme.id} lg="3">
                                        <CardTheme
                                            theme={theme.theme}
                                            imgTheme={theme.image}
                                        />
                                    </Col>
                                ))
                            }
                            <Col lg="3">
                                <CardTheme
                                    theme="Tous les jeux"
                                    imgTheme='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2sVXYgq-W-kPUHEE9AyIra7faZ6KaESAM9y-zWd69M0H_46w'
                                />
                            </Col>
                        </Row>
                        <h2 className="aPropos"> A propos </h2>
                    </Container>
                    <Container fluid>
                        <Row className="text-a-propos align-items-center" >
                            <Col lg="2" md="3" sm="12" className="centered">
                                <img className="rounded-img neon" src="https://media.licdn.com/dms/image/C5603AQEYsabIm5G0mg/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=3cPnFCdl-hDlnKjnzP96aSyuv6EKpzjSQcfp-e330rk" alt="Mr Lorion" />
                            </Col>
                            <Col lg="7" md="9" sm="10" className="text-a-propos align-items-center" >
                                <p>La société N0 PAIN NO GAMES a été créée en 1989 par Mr Lorion. Jeune éditeur de jeux mais très talentueux, il lance BroForce (son jeu phare) qui lui permettra de dépasser les gros éditeurs de jeux tels qu'Ubisoft, Nintendo, ElectronicArts... Ses proches en parlent comme d'une légende. N0 PAIN NO GAMES atteint à ce jour plus de 70000 collaborateurs dans le monde et plus de 10 Milliards d'utilisateurs (oui ça fait beaucoup). Elle engrange plusieurs centaines de milliards de dollars par jour.
                                    <br />
                                    <br />
                                    <i>"Un peu de margin, un peu de padding et ma journée s'ensoleille"</i>
                                    <br />
                                    Mr Lorion
                                </p>
                            </Col>
                            <Col lg="3" md="10" className="centered">
                                <div className="map-responsive">
                                    <iframe title="Adresse" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.632993435065!2d-0.5771717485524998!3d44.84940697899587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552877d0d48f6b%3A0x5fbdab78bc865820!2s68+Cours+de+Verdun%2C+33000+Bordeaux!5e0!3m2!1sfr!2sfr!4v1540392739159" width="75%" height="250" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Accueil;