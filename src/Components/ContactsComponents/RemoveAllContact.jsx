const RemoveAllContact =(props)=>{
    


    return(
        <div className="d-flex" >
            <button className="flex-fill btn btn-danger" onClick={()=>props.removeAllContacts()}>Remove All Contact</button>
        </div>
    )
}

export default RemoveAllContact;