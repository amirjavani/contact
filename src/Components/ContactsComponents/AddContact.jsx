import React from "react";

class AddContact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            errorMassage:undefined,
            successMassage:undefined
        }
    }
    
    contactAdder=(e)=>{
        e.preventDefault();
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const phone = document.getElementById('phone').value
        const status = this.props.handelerAddContact({name:name,email:email,phone:phone})
        this.setState({errorMassage:status.errorMassage,successMassage:status.successMassage});

    }


    render(){
        return(
            <div className="d-flex  flex-column container border rounded text-white ">
                <p className="p-1">Add Contact</p> 
                <form onSubmit={this.contactAdder} >
                    <div className="d-flex flex-row">
                        <input type="text" placeholder="name" id="name" className="flex-fill rounded p-1"></input>
                        <input type="text" placeholder="email" id="email" className="flex-fill rounded mx-2"></input>
                        <input type="text" placeholder="phone" id="phone" className="flex-fill rounded"></input>
                    </div>
                    {this.state.errorMassage===undefined ?<div></div>:<div className="text-danger">{this.state.errorMassage}</div>}
                    {this.state.successMassage===undefined ?<div></div>:<div className="text-success">{this.state.successMassage}</div>}
                    <div>
                        <button className="btn btn-secondary m-3">Add contact</button>
                    </div>
                </form>
            </div>
        )
    }    


}

export default AddContact;