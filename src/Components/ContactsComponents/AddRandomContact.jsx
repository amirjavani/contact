import { GetRandomUser } from "../../Utility/api";



const GetRandomContact= async (props)=>{
    const randomUser =  await GetRandomUser();
    return props.addRandomContact({
        name:randomUser.data.first_name + " "+ randomUser.data.last_name,
        email:randomUser.data.email,
        phone:randomUser.data.phone_number
    });
}

const AddRandomContact =(props)=>{
    
    return(
        <div className="d-flex">
            <button className="flex-fill btn btn-secondary" onClick={()=>GetRandomContact(props)}>Add Random Contact</button>
        </div>
    )
}

export default AddRandomContact;