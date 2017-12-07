import React, { Component } from 'react';
import createReactClass from 'create-react-class';

import RaisedButton from 'material-ui/RaisedButton';
import Face from 'material-ui/svg-icons/action/face';
import FontIcon from 'material-ui/FontIcon';



class Start extends Component{
  constructor(props) {
    super(props);
    
    this.handleButton = this.handleButton.bind(this);
  }
  
  handleButton() {
    console.log('button!');
    fetch('/get')
    .then(response => response.json())
    .then(data => this.props.update({ hubs: data }))
    .then(this.props.candaceView.candaceViewMatches);
  }


  render() {
    const styles = {
      button: {
        width: 300,
        height: 70,
        margin: 12,
      }
    };

    console.log('passed',this.props);
    return (
      <div>
        <RaisedButton
        label="See Potential GitHubs"
        labelPosition="before"
        labelStyle={{ fontSize: '15px'}}
        primary={false}
        icon={<Face />}
        style={styles.button}
        onClick={this.handleButton}
        />
      </div>
    )
  }
}

export default Start;