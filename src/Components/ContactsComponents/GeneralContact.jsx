import Contact from "./Contact";

const GeneralContacts =(props)=>{

    return(
        <div className="text-white">
            <h1>Contacts</h1>
            {props.contacts.map((contact,index) => (
                <Contact contact={contact} key={index} > </Contact>
            ))}
        </div>
    )
}

export default GeneralContacts;