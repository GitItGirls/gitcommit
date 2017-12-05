import React from 'react';
import createReactClass from 'create-react-class';

import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import FontIcon from 'material-ui/FontIcon';

const style = {width: 200, height:200};

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const Matches = createReactClass({
  render() {
    return (
      <div>
         <Paper style={style} zDepth={2} circle={true}>
        <Avatar
          src="http://i272.photobucket.com/albums/jj198/DublinDub69/Default%20Album/SeriousCatAvatar.jpg"
          size={30}
          style={style}
        />
        </Paper>

        <RaisedButton
          label="    -D    "
          labelPosition="before"
          icon={<HighlightOff />}
          style={styles.button}
        />
        <RaisedButton
          label="  --save  "
          labelPosition="before"
          icon={<FavoriteBorder />}
          style={styles.button}
        />
        
      </div>
    )
  }
})

export default Matches;