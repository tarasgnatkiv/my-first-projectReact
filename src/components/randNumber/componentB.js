import React from 'react';
import ComponentC from './componentC'

// import ComponentC from './componentC';

// class ComponentB extends React.Component {
//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         number: props.number
//     //     }

//     // }


//     render() {
//         return(
//             <>
//                 <h1>rndnbr {this.number}</h1>
//             </>
//         )
//     }
    
// }

class ComponentB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // randNumB: this.props.randNumA,
            randNumFuncB: this.props.randNumFuncA 
        }
    }

    render() {
        return(
            <div className='B'>
                {/* <h1>{this.state.randNumB}</h1> */}
                <ComponentC randNumC = {this.props.randNumA} randNumFuncC = {this.state.randNumFuncB}/>
            </div>
        )
    }
}

export default ComponentB;

