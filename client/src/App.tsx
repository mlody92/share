import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import {Login} from "./app/start/Login";

type User = {
    id: number;
    email: string;
}

type AppProps = {}

type AppState = {
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
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Login/>
            </div>
        );
    }
}

export default App;
