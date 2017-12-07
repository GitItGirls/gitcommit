import React, { Component } from 'react';
import createReactClass from 'create-react-class';

import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  button: {
    margin: 12,
    height: 50,
    width: 150,
  },
  image: {
    width: 70, 
    height:70
  }
};


class Saved extends Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

  this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail() {
    this.setState({
      open: true,
    });
    }

  render() {
    let imageArr = [
      "https://avatars0.githubusercontent.com/u/25655259?s=460&v=4",
      "https://avatars2.githubusercontent.com/u/26263410?s=400&v=4",
      "https://avatars0.githubusercontent.com/u/13397057?s=460&v=4"
    ]
    
    let savedArr = [];
    for (let x = 0; x < this.props.hubs.length; x ++) {
      savedArr.push(
      <div>
      <ListItem
        primaryText={this.props.hubs[x].username}
        leftAvatar={<Avatar src={imageArr[x]} />}
        rightIcon={<CommunicationChatBubble onClick={this.sendEmail}/>}

      />
      </div>
    );
    }
    return (
      <div className='stargazers'>
        <Paper>
        <List>
        {savedArr}
        </List>
        </Paper>
        <Snackbar
          open={this.state.open}
          message="able to merge, pull request accepted (email sent)"
          autoHideDuration={3000}
        />
      </div>
    )
  }
}

export default Saved;