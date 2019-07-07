import * as React from 'react'
import {Component} from 'react'
import * as PropTypes from 'prop-types'

interface InputProps {
}

interface InputState {
    value: string;
    className: string;
    error: boolean;
}

class Input extends Component<InputProps,InputState> {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value ? props.value : '',
            className: props.className ? props.className : '',
            error: false
        }
    }

    //...

    render() {
        const {handleError, ...opts} = this.props
        this.handleError = handleError
        return (
            <input {...opts} value={this.state.value}
                   onChange={this.inputChange} className={this.state.className}/>
        )
    }
}

Input.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    handleError: PropTypes.func
}

export default Input