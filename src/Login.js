import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';
import { Route, Redirect } from 'react-router';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';

function mapStateToProps(state) {
    return {
      currentUser: state.currentUser
    }
  }
  
function mapDispatchToProps(dispatch) {
return bindActionCreators(actionCreators, dispatch);
}

const paperStyle = {
    customWidth: {
      width: 400,
      marginLeft: 450, 
      marginTop: 150     
    },
    display: 'inline-block'
    
  };

const buttonStyle = {
    marginLeft: 120,
    marginTop: 15,
    marginBottom: 15

    // backgroundColor: #28a745;
    // backgroundImage: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
};

const centerStyle = {
    // alignContent: center,
};


class Login extends Component {
    constructor(props) {
        super(props);

    
        
    }

    handleGithub(event) {
        console.log('running handleGithub');
        axios.get('https://github.com/login/oauth/authorize?scope=user:email&amp;client_id=188d348aea165458e1d1', { crossdomain: true })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(err) {
                console.log('git error: ' + err);
            })
    }

    stargazerOrCandace (accesstoken) {
        console.log(accesstoken);
        if (accesstoken === 'Candace\'s Access Token' ) {
            this.props.currentUserCandace();
        //   this.setState({ whoIsIt: Candace });
        } else {
            this.props.currentUserUser();
        //   this.setState({ whoIsIt: User });
        }
      }
    

    render () {
    
        return (
            <div className="Login">
                   
                   <Paper
                    name="myprofile"
                    onChange={this.handleChange}
                    className="my-profile"
                    style={paperStyle.customWidth}
                   >
                   <div style={centerStyle}>
                        <img src="./profile.jpg" alt="profile" width="150" height="auto"/>
                        <br/>
                        <a href="https://github.com/login/oauth/authorize?scope=user:email&amp;client_id=188d348aea165458e1d1">
                            <RaisedButton 
                            label="Login with GitHub" 
                            primary={true} 
                            style={buttonStyle} 
                            />
                            
                            </a>
                    </div>
                </Paper>

                <button onClick={this.props.currentUserCandace}>go to candace side</button>
                <button onClick={this.props.currentUserUser}>go to user side</button>
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);
