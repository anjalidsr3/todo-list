import React from "react";
class User extends React.Component{
    constructor(){
        super();
        this.state={
         inputValue:""
        };
        this.handleInput=this.handleInput.bind(this);
    }
    handleInput(event){
        alert("");
        console.log("new value:",event.target.value);
        this.setState({ ...this.state, inputValue:event.target.value});
    }
    render(){
        return(
            <>
            <h2>User</h2>
            <div>
<input value={this.state.inputValue} onChange={this.handleInput}/>
            </div>
            </>
        );
    }
};
export default User;