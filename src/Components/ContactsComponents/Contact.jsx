import React from "react";

class Contact extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    toggel=()=> {
        this.props.toggelContact(this.props.contact.id)
    }

    render(){
        return(
            <div className={`d-flex flex-row ${this.props.contact.isFavorite?"border-info":""} border rounded-2 p-2 m-2 text-white justify-content-between `}>
                <div className="d-flex flex-row flex-fill ">
                    <div className="">
                        <img className="h-100 rounded" src={`https://ui-avatars.com/api/?name=${this.props.contact.name}`}  alt=""></img>
                    </div>
                    <div className="d-flex flex-column px-2 align-items-start ">
                        <h2 className="mb-auto"> {this.props.contact.name}</h2>
                        <div><i class="bi bi-envelope"></i>   {this.props.contact.email}</div>
                        <div><i class="bi bi-telephone"></i>   {this.props.contact.phone}</div>
                    </div>
                </div>
                <div className="d-flex flex-column ">
                    <i class={`fs-4 bi ${this.props.contact.isFavorite?"bi-bookmark-fill":"bi-bookmark"} btn btn-outline-secondary py-0`} style={{backgroundColor:"transparent",border:'none'}} onClick={this.toggel} ></i>
                    <i class="fs-4 bi bi-pencil-square btn btn-outline-secondary py-0" style={{backgroundColor:"transparent",border:"none"}}
                    ></i>
                    <i class="fs-4 bi bi-trash btn btn-outline-danger py-0" style={{backgroundColor:"transparent",border:'none'}}></i>
                </div>

            </div>
        )
    }

}

export default Contact;

