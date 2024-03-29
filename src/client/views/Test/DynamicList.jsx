import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

import { ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import {DynamicListTasks} from "./DynamicListTasks";

class DynamicList extends Component {
  makeListGroupItems(item){
    let listGroupItems;
      if (item.tasks && item.tasks.length > 0)
       listGroupItems = item.tasks.map((task,i) => {
         let link = item.link+"/"+task.id;
         let key = task.id? task.id:i;
          return (
            <ListGroupItem  style={{"minHeight":"50px"}}  key={key}>
              <span> {key}: {task.name} </span>
              <Button href={link} bsStyle= "success" style={{"cssFloat":"right"}}> contribute </Button>
            </ListGroupItem>
          );
        })
        return listGroupItems;
  }


    render() {
        const {apiTest0X1} = this.props;
        console.log(apiTest0X1);


        let projectList =this.props.projectList;
        let panels;
        if (projectList && projectList.length > 0) {
            panels = projectList.map(item => {
                      let numberOfTasks= "Tasks";


                return (
                  <Panel bsStyle="warning" header= {item.title} key={item.id} style={{"fontSize":"25px", "fontFamily":"awesome"}}>
                    <dev   style={{"fontSize":"18px", "fontFamily":"Helvetica"}}>
                      <span > {item.description} </span>
                      <Panel  collapsible defaultCollapsed  bsStyle="success" header= {numberOfTasks}>
                        <ListGroup fill style={{"fontSize":"15px"}}>
                          {this.makeListGroupItems(item)}
                        </ListGroup>
                      </Panel>
                    </dev>
                  </Panel>
                    );
            })
        } else {
            panels = (<Panel header="No listData!"
                             eventKey={1}>
                          <p>
                              <span>Neat, but <i>this.props.listData</i> is empty.</span>
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




function mapStateToProps(state) {
    const {apiTest0X1} = state;
    return {
        apiTest0X1
    };
}


export default connect(mapStateToProps)(DynamicList);
