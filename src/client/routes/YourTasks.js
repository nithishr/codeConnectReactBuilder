
import React, { Component, PropTypes } from 'react';

import { Button } from 'react-bootstrap';
import { Input } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import { Pager } from 'react-bootstrap';
import { PageItem } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import TestPanel from '../controllers/Test/TestPanel/TestPanel.jsx';
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
                <table params={ this.props.params } location={ this.props.location }>
                    <thead params={ this.props.params } location={ this.props.location }>
                        <tr params={ this.props.params } location={ this.props.location }>
                            <th params={ this.props.params } location={ this.props.location }>
                                <h3 params={ this.props.params } location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Project X:</span></h3>
                            </th>
                            <th params={ this.props.params } location={ this.props.location }>
                                <h4 params={ this.props.params } location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Add a Search Bar</span></h4>
                            </th>
                            <th params={ this.props.params } location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }></span>
                            </th>
                            <th params={ this.props.params } location={ this.props.location }>
                                <Pager params={ this.props.params } location={ this.props.location }>
                                    <PageItem href="#"
                                              previous={ true }
                                              params={ this.props.params }
                                              location={ this.props.location }>
                                        <span params={ this.props.params } location={ this.props.location }>Previous</span>
                                    </PageItem>
                                    <PageItem href="#"
                                              next={ true }
                                              params={ this.props.params }
                                              location={ this.props.location }>
                                        <span params={ this.props.params } location={ this.props.location }>Next</span>
                                    </PageItem>
                                </Pager>
                            </th>
                        </tr>
                    </thead>
                    <tbody params={ this.props.params } location={ this.props.location }>
                        <tr params={ this.props.params } location={ this.props.location }>
                            <td params={ this.props.params } location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }></span>
                            </td>
                            <td params={ this.props.params } location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }></span>
                            </td>
                            <td params={ this.props.params } location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }></span>
                            </td>
                        </tr>
                        <tr params={ this.props.params } location={ this.props.location }>
                            <td params={ this.props.params } location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }></span>
                            </td>
                            <td params={ this.props.params } location={ this.props.location }>
                                <Input type="select"
                                       hasFeedback={ true }
                                       placeholder="Enter value"
                                       label="Status"
                                       help="Help for input"
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
                            </td>
                            <td params={ this.props.params } location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }></span>
                            </td>
                            <td params={ this.props.params } location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }></span>
                            </td>
                        </tr>
                        <tr params={ this.props.params } location={ this.props.location }>
                            <td params={ this.props.params } location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }></span>
                            </td>
                            <td params={ this.props.params } location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }></span>
                            </td>
                            <td params={ this.props.params } location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }></span>
                            </td>
                            <td params={ this.props.params } location={ this.props.location }>
                                <Button bsStyle="success"
                                        params={ this.props.params }
                                        location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }>Submit</span>
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h4 params={ this.props.params } location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Rate your Mentor</span></h4>
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
                <TestPanel params={ this.props.params } location={ this.props.location }></TestPanel>
            </div>
            );
    }
}

export default YourTasks;

