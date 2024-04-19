import Contact from "./Contact";

const FavoriteContacts =(props)=>{

    return(
        <div className="w-100 text-white"> 
            <h1>Favorite Contacts</h1>
            {props.contacts.map((contact,index) => (
                <Contact contact={contact} key={index} toggelContact={props.toggelContact} removeContact={props.removeContact} > </Contact>
            ))}
            {props.contacts.length===0?<div>there is no Favorite contact</div>:<div></div>}
        </div>
    )
}

export default FavoriteContacts;