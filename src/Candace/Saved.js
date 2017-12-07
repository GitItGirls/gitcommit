import React from 'react';
import createReactClass from 'create-react-class';

import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

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

const Saved = createReactClass({
  render() {
    let imageArr = [
      "https://avatars0.githubusercontent.com/u/25655259?s=460&v=4",
      "https://avatars0.githubusercontent.com/u/29642577?s=460&v=4",
      "https://avatars0.githubusercontent.com/u/17396586?s=460&v=4",
      "http://i272.photobucket.com/albums/jj198/DublinDub69/Default%20Album/SeriousCatAvatar.jpg",
      "https://avatars1.githubusercontent.com/u/12474694?s=460&v=4"
    ]
    
    let savedArr = [];
    for (let x = 0; x < this.props.hubs.length; x ++) {
      savedArr.push(
      <div>
      <ListItem
        primaryText={this.props.hubs[x].username}
        leftAvatar={<Avatar src={imageArr[x]} />}
        rightIcon={<CommunicationChatBubble />}

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
      </div>
    )
  }
})

export default Saved;