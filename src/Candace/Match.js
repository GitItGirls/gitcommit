import React from 'react';
import createReactClass from 'create-react-class';

import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import FontIcon from 'material-ui/FontIcon';

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

const Match = createReactClass({
  render() {
    return (
      <div className='match'>
      <div className='match-name'>
      <h2>github1</h2>
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
          onClick={() => alert('boo')}
        />
        <RaisedButton
          label="  --save  "
          labelPosition="before"
          icon={<FavoriteBorder />}
          style={styles.button}
        />
        </div>

      </div>
    )
  }
})

export default Match;