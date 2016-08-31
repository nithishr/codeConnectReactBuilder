
import React, { Component, PropTypes } from 'react';

import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Input } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import NavBar from '../views/Test/NavBar.jsx';


class YourTasks extends Component {

    render() {
        return (
            <div>
                <NavBar params={ this.props.params } location={ this.props.location }></NavBar>
                <PageHeader style={ { textAlign: 'center' } }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <span style={ {  } }
                          params={ this.props.params }
                          location={ this.props.location }>Your Tasks</span>
                </PageHeader>
                <Panel header={ <h3 params={ this.props.params } location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Code Connect</span></h3> }
                       bsStyle="warning"
                       params={ this.props.params }
                       location={ this.props.location }>
                    <Panel header={ <h5 params={ this.props.params } location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Tasks</span></h5> }
                           style={ { overflow: 'auto' } }
                           collapsible={ true }
                           defaultExpanded={ true }
                           bsStyle="success"
                           params={ this.props.params }
                           location={ this.props.location }>
                        <ListGroup fill={ true }
                                   params={ this.props.params }
                                   location={ this.props.location }>
                            <ListGroupItem href="#"
                                           active={ false }
                                           bsStyle="success"
                                           params={ this.props.params }
                                           location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>10: Search Functionality in Navigation Bar</span>
                                <Input type="select"
                                       hasFeedback={ true }
                                       placeholder="Enter value"
                                       label="Status"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                <option params={ this.props.params } location={ this.props.location }>
                                    Done
                                </option>
                                <option params={ this.props.params } location={ this.props.location }>
                                    in Progress
                                </option>
                                <option params={ this.props.params } location={ this.props.location }>
                                    Partial
                                </option>
                                </Input>
                                <Panel header={ <h5 params={ this.props.params } location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Review in Progress</span></h5> }
                                       style={ { overflow: 'auto' } }
                                       collapsible={ true }
                                       defaultExpanded={ true }
                                       bsStyle="warning"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                    <ListGroup fill={ true }
                                               params={ this.props.params }
                                               location={ this.props.location }>
                                        <ListGroupItem href="#"
                                                       params={ this.props.params }
                                                       location={ this.props.location }>
                                            <span params={ this.props.params } location={ this.props.location }>Code Clarity:</span>
                                        </ListGroupItem>
                                        <ListGroupItem href="#"
                                                       params={ this.props.params }
                                                       location={ this.props.location }>
                                            <span params={ this.props.params } location={ this.props.location }>Code Efficiency:</span>
                                        </ListGroupItem>
                                        <ListGroupItem href="#"
                                                       params={ this.props.params }
                                                       location={ this.props.location }>
                                            <span params={ this.props.params } location={ this.props.location }>Documentation:</span>
                                        </ListGroupItem>
                                        <ListGroupItem href="#"
                                                       params={ this.props.params }
                                                       location={ this.props.location }>
                                            <span params={ this.props.params } location={ this.props.location }>Recommendations:</span>
                                            <Tab params={ this.props.params } location={ this.props.location }></Tab><span params={ this.props.params } location={ this.props.location }></span>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Panel>
                            </ListGroupItem>
                            <ListGroupItem href="#"
                                           active={ false }
                                           params={ this.props.params }
                                           location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>12: Improve load times</span>
                                <Input type="select"
                                       hasFeedback={ true }
                                       placeholder="Enter value"
                                       label="Status"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                <option params={ this.props.params } location={ this.props.location }>
                                    in Progress
                                </option>
                                <option params={ this.props.params } location={ this.props.location }>
                                    Done
                                </option>
                                <option params={ this.props.params } location={ this.props.location }>
                                    Partial
                                </option>
                                </Input>
                                <Input type="text"
                                       placeholder="Pull Request Link"
                                       buttonAfter={ <Button bsStyle="default"
                                                             params={ this.props.params }
                                                             location={ this.props.location }>
                                                         <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                     </Button> }
                                       addonBefore="Pull Request:"
                                       params={ this.props.params }
                                       location={ this.props.location }></Input>
                            </ListGroupItem>
                            <ListGroupItem href="#"
                                           active={ false }
                                           bsStyle="success"
                                           params={ this.props.params }
                                           location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>16: Redesign Icon</span>
                                <Input type="select"
                                       hasFeedback={ true }
                                       placeholder="Enter value"
                                       label="Status"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                <option params={ this.props.params } location={ this.props.location }>
                                    Done
                                </option>
                                <option params={ this.props.params } location={ this.props.location }>
                                    in Progress
                                </option>
                                <option params={ this.props.params } location={ this.props.location }>
                                    Partial
                                </option>
                                </Input>
                                <Panel header={ <h5 params={ this.props.params } location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>FeedBack</span></h5> }
                                       style={ { overflow: 'auto' } }
                                       collapsible={ true }
                                       defaultExpanded={ true }
                                       bsStyle="warning"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                    <ListGroup fill={ true }
                                               params={ this.props.params }
                                               location={ this.props.location }>
                                        <ListGroupItem href="#"
                                                       params={ this.props.params }
                                                       location={ this.props.location }>
                                            <span params={ this.props.params } location={ this.props.location }>Code Clarity:</span><i className="fa fa-star"
                                                                                                                                       params={ this.props.params }
                                                                                                                                       location={ this.props.location }></i><i className="fa fa-star"
                                                                                       params={ this.props.params }
                                                                                       location={ this.props.location }></i>
                                            <i
                                                className="fa fa-star"
                                                params={ this.props.params }
                                                location={ this.props.location }></i><i className="fa fa-star"
                                                                                                                                            params={ this.props.params }
                                                                                                                                            location={ this.props.location }></i>
                                        </ListGroupItem>
                                        <ListGroupItem href="#"
                                                       params={ this.props.params }
                                                       location={ this.props.location }>
                                            <span params={ this.props.params } location={ this.props.location }>Code Efficiency:</span><i className="fa fa-star"
                                                                                                                                          params={ this.props.params }
                                                                                                                                          location={ this.props.location }></i><i className="fa fa-star"
                                                                                       params={ this.props.params }
                                                                                       location={ this.props.location }></i>
                                        </ListGroupItem>
                                        <ListGroupItem href="#"
                                                       params={ this.props.params }
                                                       location={ this.props.location }>
                                            <span params={ this.props.params } location={ this.props.location }>Documentation:</span><i className="fa fa-star"
                                                                                                                                        params={ this.props.params }
                                                                                                                                        location={ this.props.location }></i><i className="fa fa-star"
                                                                                       params={ this.props.params }
                                                                                       location={ this.props.location }></i>
                                            <i
                                                className="fa fa-star"
                                                params={ this.props.params }
                                                location={ this.props.location }></i>
                                        </ListGroupItem>
                                        <ListGroupItem href="#"
                                                       params={ this.props.params }
                                                       location={ this.props.location }>
                                            <span params={ this.props.params } location={ this.props.location }>Recommendations:</span>
                                            <Tab params={ this.props.params } location={ this.props.location }></Tab><span params={ this.props.params } location={ this.props.location }>Try more Refectoring</span>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Panel>
                                <Panel header={ <h5 params={ this.props.params } location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Rate your Mentor</span></h5> }
                                       style={ { overflow: 'auto' } }
                                       collapsible={ true }
                                       defaultExpanded={ true }
                                       bsStyle="warning"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                    <ListGroup fill={ true }
                                               params={ this.props.params }
                                               location={ this.props.location }>
                                        <ListGroupItem href="#"
                                                       params={ this.props.params }
                                                       location={ this.props.location }>
                                            <Pagination bsSize="medium"
                                                        items={ 10 }
                                                        activePage={ 3 }
                                                        prev={ false }
                                                        next={ false }
                                                        first={ false }
                                                        last={ false }
                                                        ellipsis={ false }
                                                        maxButtons={ 10 }
                                                        params={ this.props.params }
                                                        location={ this.props.location }></Pagination>
                                            <Button bsStyle="success"
                                                    params={ this.props.params }
                                                    location={ this.props.location }>
                                                <span params={ this.props.params } location={ this.props.location }>Submit</span>
                                            </Button>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Panel>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>
                </Panel>
            </div>
            );
    }
}

export default YourTasks;

