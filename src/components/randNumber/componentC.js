import React from 'react';

// class ComponentC extends React.Component {
//     constructor(props) {
//         super()
//         this.state = {
//             number: props.lol
//         }
//         // this.handleChange = this.handleChange.bind(this)
//     }

//     // handleChange() {
//     //     this.setState({
//     //         number: Math.random()
//     //     })
//     // } 

//     render() {
//         return (
//             <>
//                 <h1>{this.state.number*10}</h1>
//             </>
//         )
//     }
// }

class ComponentC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randNumC: this.props.randNumC,
            randNumFuncC: this.props.randNumFuncC
        }
    }

    render() {
        return(
            <div className='C'>
                <h1>{this.props.randNumC*1000}</h1>
                <button onClick={this.state.randNumFuncC}>
                    Change
                </button>
            </div>
        )
    }
}

export default ComponentC;

// export default ComponentC;