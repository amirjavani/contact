import logo from "../../images/logo192.png"

function Header() {

    return(
    <div className="border p-4 " style={{display:"flex",flexDirection:"row", backgroundColor:"black", height:"100px" ,}}>
        <img className="" alt="" src={logo}></img>
        <h1 style={{color:"gray" , paddingLeft:"20px"}}>
            react curse
        </h1> 
    </div>
    )
}

export default Header;