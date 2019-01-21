import React, { Component } from 'react';
import GameList from './GameList';
import FormAdmin from './FormAdmin';
import PopUp from './PopUp';
import './PageAdmin.css';
import FormEdit from './FormEdit';


class PageAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            /* ouverture modal */
            modal: false,
            /* trouve le current index de éditer */
            currentIndex: 0,
            /* faire apparaitre le formulaire edite a la place de ajouter */
            gameEdit: true,
        }
        this.postGame = this.postGame.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onClickOk = this.onClickOk.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.deleteGame = this.deleteGame.bind(this);
        this.radioChange = this.radioChange.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.cancelModif = this.cancelModif.bind(this);
    }

    componentDidMount() {
        fetch('http://92.175.11.66:3000/joysticks/api/games')
            .then(results => results.json())
            .then(data => {
                this.setState({
                    list: data,
                });
            })
    }

    /* ajouter un jeu */
    postGame(newGame) {
        fetch('http://92.175.11.66:3000/joysticks/api/games', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newGame)
        }).then(response =>
            response.json())
            .then(() => {
                /* eclate la liste pour pusher new game */
                let fullList = [...this.state.list];
                fullList.push(newGame);
                this.setState({
                    list: fullList,
                });
                window.location.reload();
            });
    }

    /* Supprime un jeu */
    deleteGame(gameId) {
        fetch(`http://92.175.11.66:3000/joysticks/api/games/${gameId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    this.deleteItem(gameId)
                    window.location.reload();
                }
            });
    }

    /* Change le is_promo dans la bdd */
    isPromoted(gameId) {
        fetch(`http://92.175.11.66:3000/joysticks/api/games/promo/${gameId}`, {
            method: 'PUT'
        })
    }

    /* Appelle le formulaire édite à la place de ajouter */
    onEdit(gameId) {
        this.setState({
            gameEdit: !this.state.gameEdit,
            currentIndex: gameId,
        });
        window.scrollTo({
            top: 1350,
            behavior: 'smooth'
        })
    }

    /* Change la valeur du radio bouton(front) */
    radioChange(gameId) {
        this.isPromoted(gameId)
        const newlist = this.state.list.map(game => {
            const newGame = { ...game };
            if (newGame.is_promo) {
                newGame.is_promo = false;
            } else if (newGame.id === gameId) {
                newGame.is_promo = true;
            }
            return newGame;
        });
        this.setState({
            list: newlist
        });
    }

    toggle(index) {
        this.setState({
            modal: !this.state.modal,
            currentIndex: index,
        });
    }

    onClickOk() {
        this.deleteGame(this.state.currentIndex)
        this.toggle(0);
    }

    deleteItem(gameId) {
        this.setState({
            list: this.state.list.filter(jeu => jeu.id !== gameId)
        });
    }

    /* Ferme le formulaire et fait revenir en haut de la page */
    cancelModif() {
        this.setState({
            gameEdit: !this.state.gameEdit,
        })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render() {
        const nameDelete = this.state.list.filter(jeu => jeu.id === this.state.currentIndex).map(jeu => jeu.name)
        return (
            <div>
                <div className=" admin-top jeu-text">
                    <GameList
                        list={this.state.list}
                        onDelete={this.toggle}
                        radioChange={this.radioChange}
                        onEdit={this.onEdit}
                    />
                    <PopUp
                        modal={this.state.modal}
                        toggle={this.toggle}
                        onClickOk={this.onClickOk}
                        name={nameDelete}
                    />
                    {
                        (this.state.gameEdit)
                            ?
                            <FormAdmin
                                save={this.postGame}
                            />
                            :
                            <FormEdit
                                editGame={this.state.currentIndex}
                                cancelModif={this.cancelModif}
                            />
                    }
                </div>
            </div>
        );
    }
}
export default PageAdmin;