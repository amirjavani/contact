import Contact from "./Contact";

const FavoriteContacts =(props)=>{

    return(
        <div className="w-100 text-white"> 
            <h1>Favorite Contacts</h1>
            {props.contacts.map((contact,index) => (
                <Contact contact={contact} key={index} > </Contact>
            ))}
        </div>
    )
}

export default FavoriteContacts;