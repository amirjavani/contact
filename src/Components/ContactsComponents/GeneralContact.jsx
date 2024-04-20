import Contact from "./Contact";

const GeneralContacts =(props)=>{

    return(
        <div className="text-white">
            <h1>Contacts</h1>
            {props.contacts.map((contact,index) => (
                <Contact clickUpdate={props.clickUpdate} contact={contact} key={index}  toggelContact={props.toggelContact} removeContact={props.removeContact}> </Contact>
            ))}
        </div>
    )
}

export default GeneralContacts;