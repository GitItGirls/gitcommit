import React from 'react';
import createReactClass from 'create-react-class';

import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
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
    let savedArr = [];
    for (let x = 0; x < 10; x ++) {
      savedArr.push(
      <div>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="http://i272.photobucket.com/albums/jj198/DublinDub69/Default%20Album/SeriousCatAvatar.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <Divider />
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