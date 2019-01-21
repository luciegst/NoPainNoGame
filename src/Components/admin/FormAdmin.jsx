import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './FormAdmin.css';


class FormAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            pochette: "",
            description: "",
            image1: "",
            image2: "",
            trailer: "",
            date: "",
            promo: "",
            theme: "",
            is_promo: 0,
        }
        this.changeInput = this.changeInput.bind(this)
        this.submitGame = this.submitGame.bind(this)
    }

    changeInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitGame(e) {
        e.preventDefault();
        this.props.save(this.state)
    }

    render() {
        return (
            <div className="container form-all">
                <h2 className="titreAjouter admin-title">Ajouter un jeu</h2>
                <Form onSubmit={this.submitGame}>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Nom du jeu"
                            onChange={this.changeInput}
                            value={this.state.name}
                            required
                        />
                        <br />
                        <Input
                            type="select"
                            name="theme"
                            id="exampleSelect"
                            
                            onBlur={this.changeInput}
                            required
                        >
                            <option value="">Choisissez le theme</option>
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
                            type="date"
                            name="date"
                            onChange={this.changeInput}
                            value={this.state.date}
                            required
                        />
                        <br />
                        <Input style={{height:'10em' }}
                            type="textarea"
                            name="description"
                            placeholder="Description : max 500 caractères"
                            onChange={this.changeInput}
                            value={this.state.description}
                            required
                        />
                        <br />
                        <Input
                            type="text"
                            name="pochette"
                            placeholder="URL de l'image Pochette du jeu"
                            onChange={this.changeInput}
                            value={this.state.pochette}
                            required
                        />
                        <br />
                        <Input
                            type="text"
                            name="image1"
                            placeholder="URL de l'image 1"
                            onChange={this.changeInput}
                            value={this.state.image1}
                            required
                        />
                        <br />
                        <Input
                            type="text"
                            name="image2"
                            placeholder="URL de l'image 2"
                            onChange={this.changeInput}
                            value={this.state.image2}
                            required
                        />
                        <br />
                        <Input
                            type="text"
                            name="promo"
                            placeholder="URL de l'image bannière"
                            onChange={this.changeInput}
                            value={this.state.promo}
                            required
                        />
                        <br />
                        <Input
                            type="text"
                            name="trailer"
                            placeholder="URL de la bande annonce"
                            onChange={this.changeInput}
                            value={this.state.trailer}
                            required
                        />
                        <br />
                        <Button
                            className="btn-submit"
                        >Sauvegarder
                </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default FormAdmin;