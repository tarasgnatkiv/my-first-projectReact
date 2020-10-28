import React from 'react';
import ComponentB from './componentB'

// import ComponentB from './componentC';

// function ComponentA()  {
//         return (
//             <>
//                 <h1>AAAA </h1>
//                 <ComponentС lol={123} />
//             </>
//         )
// }

class ComponentA extends React.Component {
    constructor() {
        super();
        this.state = {
            randNum: Math.random()
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        this.setState({
            randNum: Math.random()
        })
    }

    render() {
        return (
            <div className='A'>
                {/* <h1>{this.state.randNum}</h1> */}
                <ComponentB randNumFuncA={this.handleChange} randNumA={this.state.randNum} />
                {/* <p>-------------------------</p>
                <button onClick={this.handleChange}>
                    Change
                </button>
                <h1>{this.state.randNum}</h1> */}
            </div>
        )
    }
}

export default ComponentA;