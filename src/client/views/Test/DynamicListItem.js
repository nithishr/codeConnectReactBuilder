import React, { Component } from 'react';
import { Panel} from 'react-bootstrap';
import { ListGroup,ListGroupItem,Button} from 'react-bootstrap';

export default class DynamicListItem extends React.Component {
  makeListGroupItems(item){
    let listGroupItems;
      if (item.tasks && item.tasks.length > 0)
       listGroupItems = item.tasks.map((task,i) => {
          return (
            <ListGroupItem  style={{"minHeight":"50px"}}  key={task.id? task.id:i}>
              <span> {task.id? task.id:i}: {task.name} </span>
              <Button href={task.link} bsStyle= "success" style={{"cssFloat":"right"}}> contribute </Button>
            </ListGroupItem>
          );
        })
        return listGroupItems;
  }

  render() {
    let item = this.props.item;
    let i = this.props.key;

    return (
      <Panel bsStyle="warning" header= {item.title} key={item.id? item.id:i} style={{"fontSize":"25px", "fontFamily":"awesome"}}>
        <dev style={{"fontSize":"18px", "fontFamily":"Helvetica"}}>
          <span> {item.content.description} </span>
        <Panel collapsible defaultExpanded bsStyle="success" header= {item.content.numberOfTasks}>
            <ListGroup fill style={{"fontSize":"15px"}}>
              {this.makeListGroupItems(item)}
            </ListGroup>
          </Panel>
        </dev>
      </Panel>
);
  }
}
