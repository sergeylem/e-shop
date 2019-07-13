import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handlerSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    };

    handlerChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlerSubmit}>
                    <FormInput name='email'
                        type='email'
                        value={this.state.email} required 
                        handleChange={this.handlerChange} 
                        label='email'
                    />
                    <FormInput name='password'
                        type='password'
                        value={this.state.password} required 
                        handleChange={this.handlerChange} 
                        label='password'
                        />

                    <input type='submit' value='Submit form' />
                </form>

            </div>
        );
    }
}

export default SignIn;