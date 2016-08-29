import React, {Component, PropTypes} from 'react';
import {Panel} from 'react-bootstrap';

import {ListGroup, ListGroupItem, Button, Input} from 'react-bootstrap';

class SearchFilter extends Component {
    makeListGroupItems(filter) {
        let listGroupItems;
        if (filter.options && filter.options.length > 0)
            listGroupItems = filter.options.map((option, i) => {
                return (
                    <ListGroupItem key={i}>
                        <Input type="checkbox" label={option}></Input>
                    </ListGroupItem>
                );
            })
        return listGroupItems;
    }

    render() {
        let panels;

        if (this.props.filter && this.props.filter.length > 0) {
            panels = this.props.filter.map((filter) => {
                return (
                    <Panel collapsible defaultExpanded bsStyle="success" header={filter.title}>
                        <ListGroup fill style={{
                            "fontSize": "15px"
                        }}>
                            {this.makeListGroupItems(filter)}
                        </ListGroup>
                    </Panel>

                );
            })
        } else {
            panels = (
                <Panel header="No listData!" eventKey={1}>
                    <p>
                        <span>Neat, but
                            <i>this.props.listData</i>
                            is empty.</span>
                    </p>
                </Panel>
            );
        }

        return (
            <div>
                {panels}
            </div>
        );
    }
}

export default SearchFilter;
