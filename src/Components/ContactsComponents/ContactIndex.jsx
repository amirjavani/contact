import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer"
import AddRandomContact from "./AddRandomContact";
import RemoveAllContect from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContact";
import GeneralContacts from "./GeneralContact";


class IndexContact extends React.Component{
    constructor (props){
        super(props);
        this.state ={
            contacts:[
                {
                    id:1,
                    name:'Ali Nekoee',
                    email:'alinekoee@gmail.com',
                    phone: '09362540320',
                    isFavorite:false
                },
                {
                    id:2,
                    name:'Morteza Azimi',
                    email:'mortezaAzimi@gmail.com',
                    phone: '09902058302',
                    isFavorite:false
                },
                {
                    id:3,
                    name:'Erfan mahmmodi',
                    email:'Erfanmahmmodi@gmail.com',
                    phone: '09124320532',
                    isFavorite:true
                }
            ]

        }
    }


    toggelContact=(ContactID)=>{
        this.setState((pre)=>{
            const modifiedContacts = pre.contacts.map(contact => {
                if (contact.id === ContactID) {
                  return { ...contact, isFavorite:!contact.isFavorite};
                }
                return contact;
              });

            return{
                contacts: modifiedContacts,
            }
        })
    }

    handelerAddContact=(newContact)=>{
        const dublicat = this.state.contacts.filter((c)=>{
            if (c.email===newContact.email){
                return 1
            }
            return null;
        });
        if (newContact.name===''){
            return {errorMassage:'Name  requered',successMassage:undefined}
        } else if (newContact.email===''){
            return {errorMassage:'Email  requered',successMassage:undefined}
        }else if (newContact.phone===''){
            return {errorMassage:'phone number requered',successMassage:undefined}
        }else if(dublicat.length > 0){
            return {errorMassage:'email is already exist',successMassage:undefined}
        }
        
        else{
            this.setState((pre)=>{
            const newcon = {
                id:pre.contacts.length+1,
                ...newContact,
                isFavorite:false
            }
            console.log(newcon);
                return{
                    contacts: [...pre.contacts, newcon]
            } 
            });
            return{errorMassage:undefined,successMassage:'success'}
        } 
    }

    render(){
        return(
            <div>
                <Header></Header>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",justifyContent:"center",}} className="mx-5">
                    <div  style={{display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center",margin:"20px" ,width:"80s%"}}>
                        <div style={{padding:"10px", flex:"auto" }}>
                            <AddRandomContact />
                        </div>
                        <div style={{padding:"10px", flex:"auto"}}>
                            <RemoveAllContect/>
                        </div>
                    </div>
                    <div style={{padding:"10px" , flex:"auto",width:"80%"}}>
                        <AddContact handelerAddContact={this.handelerAddContact} />
                    </div>
                    <div style={{padding:"10px" ,width:"90%",}}>
                        <FavoriteContacts toggelContact={this.toggelContact} contacts={this.state.contacts.filter((O)=> O.isFavorite === true)} />
                    </div>
                    <div style={{padding:"10px" , width:"90%",}}>
                        <GeneralContacts toggelContact={this.toggelContact} contacts={this.state.contacts.filter((O)=> O.isFavorite === false)}/>
                    </div>

                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default IndexContact;