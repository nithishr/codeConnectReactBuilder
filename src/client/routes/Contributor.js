
import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import NavBar from '../views/Test/NavBar.jsx';
import DynamicList from '../views/Test/DynamicList.jsx';


class Contributor extends Component {

    render() {
        return (
            <div>
                <NavBar params={ this.props.params } location={ this.props.location }></NavBar>
                <PageHeader style={ { textAlign: 'center' } }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <span style={ {  } }
                          params={ this.props.params }
                          location={ this.props.location }>Select your Project</span>
                </PageHeader>
                <ListGroup params={ this.props.params } location={ this.props.location }>
                    <ListGroupItem href="/opentasks"
                                   params={ this.props.params }
                                   location={ this.props.location }>
                        <table params={ this.props.params } location={ this.props.location }>
                            <thead params={ this.props.params } location={ this.props.location }>
                                <tr params={ this.props.params } location={ this.props.location }>
                                    <th params={ this.props.params } location={ this.props.location }>
                                        <h3 params={ this.props.params } location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Project X</span></h3>
                                    </th>
                                    <th params={ this.props.params } location={ this.props.location }></th>
                                    <th params={ this.props.params } location={ this.props.location }></th>
                                </tr>
                            </thead>
                            <tbody params={ this.props.params } location={ this.props.location }>
                                <tr params={ this.props.params } location={ this.props.location }>
                                    <td params={ this.props.params } location={ this.props.location }>
                                        <Link to="/main"
                                              params={ this.props.params }
                                              location={ this.props.location }>
                                        <span params={ this.props.params } location={ this.props.location }>www.x.project</span>
                                        </Link>
                                    </td>
                                    <td params={ this.props.params } location={ this.props.location }>
                                        <span params={ this.props.params } location={ this.props.location }>50 Tasks</span><span style={ { cssFloat: 'right' } }
                                                                                                                               params={ this.props.params }
                                                                                                                               location={ this.props.location }>20 Contributors</span>
                                    </td>
                                </tr>
                                <tr params={ this.props.params } location={ this.props.location }>
                                    <td params={ this.props.params } location={ this.props.location }>
                                        <i className="fa fa-star"
                                           params={ this.props.params }
                                           location={ this.props.location }></i><i className="fa fa-star"
                                                                                                                                     params={ this.props.params }
                                                                                                                                     location={ this.props.location }></i><i className="fa fa-star"
                                                                                  params={ this.props.params }
                                                                                  location={ this.props.location }></i><i className="fa fa-star"
                                                                                                                                                                            params={ this.props.params }
                                                                                                                                                                            location={ this.props.location }></i>
                                    </td>
                                    <td params={ this.props.params } location={ this.props.location }>
                                        <span params={ this.props.params } location={ this.props.location }>An awesome Project about X</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </ListGroupItem>
                    <DynamicList listData={ [{ id: '12', title: 'Thunder' }, { id: '199', title: 'Thunjhder', content: 'con12hj3' }] }
                                 params={ this.props.params }
                                 location={ this.props.location }></DynamicList>
                </ListGroup>
            </div>
            );
    }
}

export default Contributor;

