import React, { Component } from 'react';
import createReactClass from 'create-react-class';

import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import FontIcon from 'material-ui/FontIcon';

import Match from './Match';

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  this.makeReq = this.makeReq.bind(this);
  this.clickD = this.clickD.bind(this);
  this.clickSave = this.clickSave.bind(this);
  }

  makeReq() {
    console.log(this.props.hubs);
  }

  clickD() {
    let count = this.state.count + 1;
    console.log(count);
    this.setState({count: count});
    if (count === this.props.hubs.length) {
      this.props.candaceView.candaceViewSaved();
    }
    
  }

  clickSave() {
    let count = this.state.count + 1;
    console.log(count);
    this.setState({count: count});
    if (count === this.props.hubs.length) {
      this.props.candaceView.candaceViewSaved();
    }
  }

  render() {
    
    const styles = {
      button: {
        margin: 12,
        height: 50,
        width: 150,
      },
      image: {
        width: 200, 
        height:200
      }
    };
    

    return (
      <div className='match'>
        <div className='match-name'>
          <h2>{this.props.hubs[this.state.count].username}</h2>
        </div>
      <div className='match-image'>
        
        <Paper style={styles.image} zDepth={2} circle={true}>
          <Avatar
            src="http://i272.photobucket.com/albums/jj198/DublinDub69/Default%20Album/SeriousCatAvatar.jpg"
            style={styles.image}
          />
        </Paper>
        </div>

        <div className='match-buttons'>
          <RaisedButton
            label="    -D    "
            labelPosition="before"
            icon={<HighlightOff />}
            style={styles.button}
            onClick={this.clickD}
          />
          <RaisedButton
            label="  --save  "
            labelPosition="before"
            icon={<FavoriteBorder />}
            style={styles.button}
            onClick={this.clickSave}
          />
        </div>

      </div>


    )
  }
}

export default Matches;