import PropTypes from 'prop-types';

function UserGreeting(props){
    // if(props.isLoggedIn){
        //  return <h2>Welcome {props.name}</h2>
      return(props.isLoggedIn ? <h2>Welcome {props.name}</h2> :
                                <h2>Please Log In to Continue</h2>);
   // }
    // else{
    //     return <h2>Please Log In to Continue</h2>
    // }
}
UserGreeting.prototypes={
    isLoggedIn:PropTypes.bool,
    name:PropTypes.string,
}
export default UserGreeting