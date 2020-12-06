import React from 'react';
import CreateGame from '../components/CreateGame';
import Header from '../components/Header';
import JoinRoom from '../components/JoinRoom';
import Ycard from '../components/Ycard';
<<<<<<< HEAD
import Xcard from '../components/Xcard';
=======
import SomeComponent from '../components/test'
>>>>>>> ad75e211e8d37f39f11aa8a9589b9621d2b48dc4


class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            uid: '',
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async event => {
        event.preventDefault();
        /*
        const resp = await login(this.state);
        if (!resp) {
            this.setState({
                error: 'Invalid login.'
            })
        } else {
            await this.props.setUser({token: resp.token});
            this.props.history.push(`/account`);
        }
        */
      }
     

      render() {

        if (localStorage.uid === undefined) {
            localStorage.removeItem('uid')
        }

        return(
            <>
                <Header></Header>
                <CreateGame/>
                <JoinRoom/>
                <SomeComponent onClick={() => this.signin()}/>
                <Ycard />
                <Xcard/>
            </>
        )
      }

}

export default Welcome;