import React from 'react';



class ClickCounter extends React.Component{

    constructor(props){
        super(props);
        this.state={clicks: 0};

        this.props={
            a:3
        }

 this.increment= () => this.setState({clicks: this.state.clicks+1});



    }

    render(){
        return(
        <div>
            <button onClick={this.increment}>increment</button> <br>
            </br>
            this is counter {this.state.clicks}

            
        </div>
        );
    }
}
export default ClickCounter;