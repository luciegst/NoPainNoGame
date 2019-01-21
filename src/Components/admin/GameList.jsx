import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './GameList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


class GameList extends Component {
    render() {
        let count = 1;
        return (
            <div className="container">
                <h2 className="catalog-title admin-title"> Catalogue des jeux NPNG </h2>
                <Table bordered className="jeu-text">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Theme</th>
                            <th>Promouvoir</th>
                            <th>Supprimer / Editer</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((jeu) => (
                            <tr key={jeu.id} >
                                <td> {count++}</td>
                                <td>
                                    {jeu.name}
                                </td>
                                <td>
                                    {jeu.theme}
                                </td>
                                <td>
                                    <input type="radio" onChange={() => this.props.radioChange(jeu.id)} checked={jeu.is_promo} name="Promo" />
                                </td>
                                <button
                                    className="btnSuppr"
                                    onClick={() => this.props.onDelete(jeu.id)}
                                ><FontAwesomeIcon className="far fa-trash-alt" icon={faTrash} ></FontAwesomeIcon>
                                </button>
                                <button
                                    className="btnEdit"
                                    onClick={() => this.props.onEdit(jeu.id)}
                                ><FontAwesomeIcon className="far fa-edit-alt" icon={faEdit}  ></FontAwesomeIcon>
                                </button>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default GameList;
