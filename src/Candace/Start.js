import React from 'react';
import createReactClass from 'create-react-class';

import RaisedButton from 'material-ui/RaisedButton';
import Face from 'material-ui/svg-icons/action/face';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: {
    width: 300,
    height: 70,
    margin: 12,
  }
};

const Start = createReactClass({
  render() {
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
        onClick={this.props.candaceView.candaceViewMatches}
        />
      </div>
    )
  }
})

export default Start;