import React, { Component } from 'react';
import { Panel} from 'react-bootstrap';
import { ListGroup,ListGroupItem,Button} from 'react-bootstrap';

export default class DynamicListTasks extends React.Component {
  render() {
    let tasks =this.props.tasks;

    let listGroupItems = "not null";
      if (tasks && tasks.length > 0)
       listGroupItems = tasks.map((task,i) => {
         let link = item.link+"/"+task.id;
         let key = task.id? task.id:i;
          return (
            <ListGroupItem  style={{"minHeight":"50px"}}  key={key}>
              <span> {key}: {task.name} </span>
              <Button href={link} bsStyle= "success" style={{"cssFloat":"right"}}> contribute </Button>
            </ListGroupItem>
          );
        })
        else {
            listGroupItems = (<Panel header="No tasks!"
                             eventKey={1}>
                          <p>
                              <span>Neat, but <i>tasks</i> is empty.</span>
                          </p>
                      </Panel>
            );
        }
        return listGroupItems;
);
  }
}
