import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './FormEdit.css';
import moment from 'moment';
import "moment-timezone";

class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pochette: "",
            description: "",
            image1: "",
            image2: "",
            trailer: "",
            theme: "",
            date: "",
            promo: "",
        }
        this.saveEdit = this.saveEdit.bind(this)
        this.updateModif = this.updateModif.bind(this)
        this.onSubmitModif = this.onSubmitModif.bind(this)
    }

    componentDidMount() {
        fetch(`http://92.175.11.66:3000/joysticks/api/games/${this.props.editGame}`)
            .then(response =>
                response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    pochette: data.pochette,
                    description: data.description,
                    image1: data.image1,
                    image2: data.image2,
                    trailer: data.trailer,
                    theme: data.theme,
                    date: data.date,
                    promo: data.promo
                });
            })
    }

    /* mise à jour du jeu modifié dans la bdd */
    updateModif(listModified) {
        /* vient surcharger la date du state (listmodified) */
        const list = {
            ...listModified,
            date: moment(listModified.date).format("YYYY-MM-DD hh:mm:ss"),
        }
        fetch(`http://92.175.11.66:3000/joysticks/api/games/${this.props.editGame}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(list)
        }).then(response => {
            if (response.ok) {
                window.location.reload();
            }
        })
    }

/* envoie les modifications dans les states */
    saveEdit(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmitModif(e){
        e.preventDefault();
        this.updateModif(this.state)
    }

    render() {
        return (
            <div className="container form-all">
                <h2 className="titreEditer admin-title">Modifier un jeu</h2>
                <Form onSubmit={this.onSubmitModif}>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Nom du jeu"
                            onChange={this.saveEdit}
                            value={this.state.name}
                            required
                        />
                        <br />
                        <Input
                            type="select"
                            name="theme"
                            onChange={this.saveEdit}
                            value={this.state.theme}
                        >
                            <option>Choisissez le theme</option>
                            <option >Action</option>
                            <option>Aventure</option>
                            <option>Sport</option>
                            <option>Puzzle</option>
                            <option>FPS</option>
                            <option>RPG</option>
                            <option>Plates-formes</option>
                        </Input>
                        <br />
                        <Input
                            type="DATE"
                            name="date"
                            onChange={this.saveEdit}
                            value={moment(this.state.date).format("YYYY-MM-DD")}
                            required
                        />
                        <br />
                        <Input style={{height:'10em' }}
                            type="textarea"
                            name="description"
                            placeholder="Description : max 500 caractères"
                            onChange={this.saveEdit}
                            value={this.state.description}
                            required
                        />
                        <br />
                        <Input
                            type="text"
                            name="pochette"
                            placeholder="URL de l'image Pochette du jeu"
                            onChange={this.saveEdit}
                            value={this.state.pochette}
                            required
                        />
                        <br />
                        <Input
                            type="text"
                            name="image1"
                            placeholder="URL de l'image 1"
                            onChange={this.saveEdit}
                            value={this.state.image1}
                            required
                        />
                        <br />
                        <Input
                            type="text"
                            name="image2"
                            placeholder="URL de l'image 2"
                            onChange={this.saveEdit}
                            value={this.state.image2}
                            required
                        />
                        <br />
                        <Input
                            type="text"
                            name="promo"
                            placeholder="URL de l'image bannière"
                            onChange={this.saveEdit}
                            value={this.state.promo}
                            required
                        />
                        <br />
                        <Input
                            type="text"
                            name="trailer"
                            placeholder="URL de la bande annonce"
                            onChange={this.saveEdit}
                            value={this.state.trailer}
                            required
                        />
                        <br />
                        <Button
                            className="btnModif btn-submit"
                        >Modifier
                       </Button>
                        <Button
                            className="btnCancel"
                            onClick={this.props.cancelModif}
                        >Annuler
                       </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default FormEdit;