import React from "react";

class Contact extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="d-flex flex-row border rounded-2 p-2 m-2">
                {this.props.contact.name}
            </div>
        )
    }

}

export default Contact;

