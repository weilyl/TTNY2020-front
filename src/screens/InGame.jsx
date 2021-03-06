import React from 'react';
import PlayerHand from './../components/PlayerHand';

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
            <PlayerHand />
        )
      }

}

export default Welcome;