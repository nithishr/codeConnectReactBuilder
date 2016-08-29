
import React, { Component, PropTypes } from 'react';

import { IndexLink } from 'react-router';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Input } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import NavBar from '../views/Test/NavBar.jsx';
import DynamicList from '../views/Test/DynamicList.jsx';


class HomePage extends Component {

    render() {
        return (
            <div>
                <NavBar params={ this.props.params } location={ this.props.location }></NavBar>
                <PageHeader style={ { fontFamily: 'awesome', textAlign: 'center' } }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <span style={ { fontSize: '90px' } }
                          params={ this.props.params }
                          location={ this.props.location }>Code Connect</span>
                </PageHeader>
                <Grid fluid={ true }
                      params={ this.props.params }
                      location={ this.props.location }>
                    <Row style={ {  } }
                         params={ this.props.params }
                         location={ this.props.location }>
                        <Input params={ this.props.params } location={ this.props.location }></Input>
                        <Col xs={ 5 }
                             md={ 5 }
                             sm={ 5 }
                             lg={ 5 }
                             params={ this.props.params }
                             location={ this.props.location }>
                        <IndexLink to="/contributor"
                                   params={ this.props.params }
                                   location={ this.props.location }>
                            <Button bsStyle="success"
                                    style={ { textAlign: 'center', cssFloat: 'right', paddingLeft: '6%', paddingRight: '%' } }
                                    bsSize="large"
                                    params={ this.props.params }
                                    location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>browse projects</span>
                            </Button>
                        </IndexLink>
                        </Col>
                        <Col xs={ 2 }
                             md={ 2 }
                             sm={ 2 }
                             lg={ 2 }
                             style={ {  } }
                             params={ this.props.params }
                             location={ this.props.location }>
                        <Image src="https://raw.githubusercontent.com/Gott50/Code-Connect/master/uibuilder/src/client/assets/CClogo.png"
                               rounded={ false }
                               circle={ false }
                               thumbnail={ false }
                               style={ { maxHeight: '200px', cssFloat: 'center' } }
                               params={ this.props.params }
                               location={ this.props.location }></Image>
                        </Col>
                        <Col xs={ 5 }
                             md={ 5 }
                             sm={ 5 }
                             lg={ 5 }
                             params={ this.props.params }
                             location={ this.props.location }>
                        <IndexLink to="/ "
                                   params={ this.props.params }
                                   location={ this.props.location }>
                            <Button bsStyle="warning"
                                    style={ { textAlign: 'center', paddingRight: '10%', paddingLeft: '10%' } }
                                    block={ false }
                                    bsSize="large"
                                    disabled={ false }
                                    params={ this.props.params }
                                    location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>add project</span>
                            </Button>
                        </IndexLink>
                        </Col>
                    </Row>
                </Grid>
                <h3 style={ { padding: '1em', textAlign: 'center' } }
                    params={ this.props.params }
                    location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>newest projects</span></h3>
                <DynamicList listData={ [{ id: '12', title: 'Thunder' }, { id: '199', title: 'Thunjhder', content: 'con12hj3' }] }
                             params={ this.props.params }
                             location={ this.props.location }></DynamicList>
            </div>
            );
    }
}

export default HomePage;

