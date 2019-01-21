import React, { Component } from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import './MediaCardTheme.css'
import { Link } from 'react-router-dom'

class MediaCardTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="ajustNavbar">
                <Container>
                    <Media>
                        <Row>
                            <Col lg="12" md="10" className="center">
                                <Row>
                                    <Col lg="6" xs="12">
                                        <Media className="media" >
                                            <Link to={`/games/${this.props.id}`} > <Media className='image' src={this.props.pochette} alt={this.props} /></Link>
                                        </Media>
                                    </Col>
                                    <Col  lg="6" md="12">
                                        <Media body className="media-content">
                                            <Media heading className="jeu-name">
                                                {this.props.name}
                                            </Media>
                                            <span className="jeu-text">{this.props.description}</span>
                                        </Media>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Media>
                </Container>

            </div>

        );
    }
}

export default MediaCardTheme;
