import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col
} from "reactstrap";
import "./PageReservation.css";
import { Link } from "react-router-dom";

class PageReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      list: []
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    fetch("http://92.175.11.66:3000/joysticks/api/games")
      .then(results => results.json())
      .then(data => {
        this.setState({
          list: data
        });
      });
  }

  toggle(e) {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const jeuPromo = this.state.list.find(jeu => jeu.is_promo)
    const name = jeuPromo && jeuPromo.name;
    const pochette = jeuPromo && jeuPromo.pochette;
    const id = jeuPromo && jeuPromo.id;
   
    return (
      <div className="fond">
        <Container>
          <h1 className="form-title jeu-text form-page en-tete neon form-pad">
            Réservation de <span className="jeu-name-titre">{name}</span>
          </h1>
          <Row className="form-page form-col">
            <Col lg="5">
              <Link to={`/games/${id}`}>
                <img
                  src={pochette}
                  alt="jeu choisi"
                  className="form-img"
                />
              </Link>
            </Col>
            <Col lg="6">
              <Form onSubmit={this.toggle}>
                <FormGroup>
                  <Input
                    type="text"
                    name="Nom"
                    id="exampleNom"
                    placeholder="MARTIN"
                    required
                  />
                  <br />
                  <Input
                    type="text"
                    name="prenom"
                    id="examplePrenom"
                    placeholder="Bernard"
                    required
                  />
                  <br />
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="bernardmartin@gmail.com"
                    required
                  />
                  <br />
                  <Input
                    type="text"
                    name="adresse"
                    id="exampleAdresse"
                    placeholder="cours de Verdun"
                    required
                  />
                  <br />
                  <Input
                    type="text"
                    name="codepostal"
                    id="exampleCodepostal"
                    placeholder="33000"
                    required
                  />
                  <br />
                  <Input
                    type="text"
                    name="ville"
                    id="exampleVille"
                    placeholder="Bordeaux"
                    required
                  />
                  <br />
                </FormGroup>
                <Button className="secondary btn btn-submit">Envoyer</Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalBody className="jeu-text">
                    Votre réservation de {name} a bien été prise en compte.
                    <br />
                    Vous recevrez dans les jours prochains un mail pour
                    finaliser votre commande.
                  </ModalBody>
                  <ModalFooter>
                    <Link to="/" activeClassName="selected">
                      <Button color="secondary">
                        OK
                      </Button>{" "}
                    </Link>
                  </ModalFooter>
                </Modal>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PageReservation;
