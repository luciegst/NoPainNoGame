import React, { Component } from 'react';
import './Footer.css';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <footer className="socials sticky">
                <div className="container">
                    <div className="text-center center-block">
                        <strong className="white">No Pain No Games - &copy; 2018</strong>
                        <p onClick={this.toggle}><h6 className="white-text"> <span className="mentions"> Mentions légales</span></h6></p>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalBody className="footer-modal">
                                MENTIONS LEGALES :<br />
                                <br />
                                Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : nopainnogames.io les informations suivantes :
                                <br />
                                <br />
                                <strong>1. Informations légales :</strong><br />
                                <br />
                                Statut du propriétaire : <strong>particulier</strong><br />
                                Le Propriétaire est : <strong>No Pain No Games </strong><br />
                                Adresse postale du propriétaire : <strong>68 cours de Verdun 33300 BORDEAUX</strong><br />
                                <br />
                                Le Créateur du site est : <strong>Joysticks</strong><br />
                                Le Responsable de la  publication est : <strong>Joysticks</strong><br />
                                Contacter le responsable de la publication : <strong>joysticks@gmail.com</strong><br />
                                Le responsable de la publication est une<strong> personne physique</strong><br />
                                <br />
                                Le Webmaster est  : <strong>Joysticks</strong><br />
                                Contacter le Webmaster :  <strong>Joysticks@gmail.com</strong><br />
                                L’hebergeur du site est : <strong>Joysticks 68 cours de Verdun 33300 BORDEAUX</strong><br />
                                <strong>CREDIT : </strong> Les mentions légales ont étés générées par<strong> générateur de mentions legales</strong><br />
                                Personnalisez votre <strong>Panneau à vendre</strong>
                                <strong>2. Présentation et principe :</strong>
                                Est désigné ci-après : <strong>Utilisateur</strong>, tout internaute se connectant et utilisant le site susnommé : nopainnogames.io.<br />
                                Le site <strong>nopainnogames.io</strong><strong> </strong>regroupe un ensemble de services, dans l'état,  mis à la disposition des utilisateurs. Il est ici précisé que ces derniers doivent rester courtois et faire preuve de bonne foi tant envers les autres utilisateurs qu'envers le webmaster du site nopainnogames.io. Le site nopainnogames.io est mis à jour régulièrement par Joysticks.<br />
                                No Pain No Games s’efforce de fournir sur le site nopainnogames.io des informations les plus précises possibles (sous réserve de modifications apportées depuis leur mise en ligne), mais ne saurait garantir l'exactitude, la complétude et l'actualité des informations diffusées sur son site, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. En conséquence, l'utilisateur reconnaît utiliser ces informations données à titre indicatif, non exhaustives et susceptibles d'évoluer sous sa responsabilité exclusive.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle}>OK</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        <a href="https://www.facebook.com/wildcodeschool/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                        <a href="https://twitter.com/wildcodeschool"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                        <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                        <a href="mailto:#"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;