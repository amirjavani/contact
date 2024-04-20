import React from "react";

class AddContact extends React.Component{
    constructor(props){
        super(props);
        this.formRef = React.createRef();
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
        this.formRef.current.reset();
        var status = undefined;
        if(this.props.isUpdating){
            status = this.props.handelerUpdateContact({name:name,email:email,phone:phone})
        }else{
            status = this.props.handelerAddContact({name:name,email:email,phone:phone})
        }
        this.setState({errorMassage:status.errorMassage,successMassage:status.successMassage});

    }

    canceler=()=>{
        this.formRef.current.reset();
        this.props.cancelUpdate()
    }


    render(){
        return(
            <div className="d-flex flex-column container border rounded text-white ">
                <p className="p-1">{this.props.isUpdating?"Updating":"Add Contact"}</p> 
                <form ref={this.formRef} onSubmit={this.contactAdder} >
                    <div className="d-flex flex-row">
                        <input type="text" placeholder="name" id="name" className="flex-fill rounded p-1" defaultValue={this.props.isUpdating?this.props.selectedContact.name:""}></input>
                        <input type="text" placeholder="email" id="email" className="flex-fill rounded mx-2" defaultValue={this.props.isUpdating?this.props.selectedContact.email:""}></input>
                        <input type="text" placeholder="phone" id="phone" className="flex-fill rounded" defaultValue={this.props.isUpdating?this.props.selectedContact.phone :""}></input>
                    </div>
                    {this.state.errorMassage===undefined ?<div></div>:<div className="text-danger">{this.state.errorMassage}</div>}
                    {this.state.successMassage===undefined ?<div></div>:<div className="text-success">{this.state.successMassage}</div>}
                    <div>
                    </div>
                        
                        {this.props.isUpdating?<button className="btn btn-danger m-3" onClick={this.canceler}>Cancel</button>:<div></div>}
                        <button type="submit" className="btn btn-success m-3">{this.props.isUpdating?"submit":"Add Contact"}</button>
                </form>
            </div>
        )
    }    


}

export default AddContact;