import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Denied(props) {
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
        {/* Looks like you're a <strong>{props.quizResult}</strong>! */}
        <p>Hmm, well this is awkward.<br/>
    
        CONFLICT (content): Merge conflict in Candace/match<br/>

        Sorry, we're unable to accept your merge request at this time. </p>
      </div>
    </ReactCSSTransitionGroup>
  );
}

export default Denied;
