
import React, { Component, PropTypes } from 'react';

import { Input } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import NavBar from '../views/Test/NavBar.jsx';


class MentorLandingPage extends Component {

    render() {
        return (
            <div>
                <NavBar params={ this.props.params } location={ this.props.location }></NavBar>
                <PageHeader style={ { textAlign: 'center' } }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <small params={ this.props.params } location={ this.props.location }>Let us know if you want to</small>
                    <PageHeader style={ {  } }
                                params={ this.props.params }
                                location={ this.props.location }>
                        <span style={ {  } }
                              params={ this.props.params }
                              location={ this.props.location }>Mentor</span>
                    </PageHeader>
                </PageHeader>
                <Input type="text"
                       hasFeedback={ true }
                       bsStyle="success"
                       placeholder="your.e@mail.adress"
                       label="your E-Mail adress"
                       help="Please enter a valid E-Mail adress"
                       params={ this.props.params }
                       location={ this.props.location }></Input>
            </div>
            );
    }
}

export default MentorLandingPage;

