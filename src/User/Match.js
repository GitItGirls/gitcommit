import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Paper from 'material-ui/Paper';

function Match(props) {
  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      
      <div>
        Way to go, Idaho! Great job writing high quality code.

        {/* Please click below to add a git commit -m and submit your pull request. */}
      </div>

    </ReactCSSTransitionGroup>
  );
}

export default Match;
