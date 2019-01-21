import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './PageTheme.css'
import MediaCardTheme from './MediaCardTheme'


class PageTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
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
    render() {
        const currentTheme = (this.props.match.params.theme)

        const jeuxTheme = (currentTheme === 'Tous-les-jeux') ? this.state.list.sort((a, b) => a.name.localeCompare(b.name)) : this.state.list.filter(theme => theme.theme.includes(currentTheme))
        return (
            <div className='fond-theme top-title'>
                <Container>
                    <Row className="en-tete neon">
                        <Col>
                            <h1 className='titre1'>{currentTheme.replace(/-/g, " ")}</h1>
                        </Col>
                    </Row>
                    <Row md="2" className='interRow'>
                        {
                            jeuxTheme.map(jeu =>
                                <Col lg='6'>
                                    <MediaCardTheme
                                        name={jeu.name}
                                        pochette={jeu.pochette}
                                        description={jeu.description}
                                        id={jeu.id}
                                    />
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PageTheme;
