import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import {SignUp} from "./app/SignUp";

interface User {
    id: number;
    email: string;
}

interface AppProps {
}

interface AppState {
    users: Array<User>;
    isLoading: boolean;
}

class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = {
            users: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(data => this.setState({users: data, isLoading: false}));
    }

    render() {
        // public render() {

        // return (
        //   <div className="App">
        //     <header className="App-header">
        //       <img src={logo} className="App-logo" alt="logo" />
        //       <h1 className="App-title">Welcome to React</h1>
        //     </header>
        //     <p className="App-intro">
        //       To get started, edit <code>src/App.tsx</code> and save to reload.
        //     </p>
        //   </div>
        // );

        return (

            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                          crossOrigin="anonymous"/>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                              integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                              crossOrigin="anonymous"/>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"/>
                        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>

                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {/*<UserList/>*/}
                {/*<SignIn/>*/}
                <SignUp/>
            </div>
        );
    }
}

export default App;
