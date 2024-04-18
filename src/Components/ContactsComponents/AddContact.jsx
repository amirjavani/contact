import React from "react";

class AddContact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            errorMassage:undefined,
            successMassage:undefined
        }
    }


    render(){
        return(
            <div className="border">
                AddContact
            </div>
        )
    }    


}

export default AddContact;