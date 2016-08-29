
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';

import { Button , Panel } from 'react-bootstrap';

class TestPanel extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
 handleCommentSubmit() {
    $.ajax({
      url: "/hallo",
      dataType: 'text',
      type: 'GET',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  }

    handleOnClick(e) {
        console.log("Ohh, Fuck MAN!");

        e.stopPropagation();
        e.preventDefault();
        //
        // actions where bound in containerActions, look at actions.js
        //
        const {exampleAction_1, exampleAction_2, exampleAction_3} = this.props;
        const arg1 = 'arg1';
        const arg2 = 'arg2';
        exampleAction_1();
        exampleAction_2(arg1);
        exampleAction_3(arg1, arg2);
    }

    render() {
        //
        // taken from modelSelector, look at selectors.js and reducer.js
        //
        const {model: {arg1, arg2}} = this.props;

        return (
            <Button bsStyle="default"
                      onClick={this.handleOnClick}
                        params={this.props.params}>
                        <span params={this.props.params}>Toggle header</span>
                </Button>
            );
    }
}

export default connect(modelSelector, containerActions)(TestPanel);
