import React from 'react';
import Title from '../title/title'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name   
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    } 

    render() {
        return(
            <>
                <input 
                    type='text'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <Title title={this.state.name}/>
            </>   
        )
    }
}

export default Input;