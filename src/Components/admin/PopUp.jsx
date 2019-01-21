import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import './PopUp.css';

class PopUp extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalBody className="text">
            <p>Souhaitez-vous réellement supprimer {this.props.name} ?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.props.onClickOk}>Ok</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Annuler</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PopUp;