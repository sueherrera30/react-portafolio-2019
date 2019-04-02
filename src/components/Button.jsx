import React, {Component} from 'react';

class ButtonTest extends Component {
    state = {
        active: true,
    }
    handleEvent = () => {
        this.setState({
            active: !this.state.active,
        })  
    }

    render(){
        return (
            <>
                <button onClick={this.handleEvent}>Show me!</button>
                {
                    this.state.active && <h1>HELLO SEÑORA</h1>
                }
            </>
        )
    }
}
export default ButtonTest;








