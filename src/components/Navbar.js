import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping,faBell,faUser,faBars,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"


function Navbar()
{
 return(
    <div class="navbar">

    <div class="navbar__s1">
        <h1 class="navbar__s1__title">Udemy</h1>
    </div>

    <div class="navbar__s2">
    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} />
        <input type="text" placeholder="Search for anything"></input>
    </div>

    <div class="navbar__s3">
        <p>Courses</p>
       
        <div class="mylearning">
            <p>My learnings</p>
            <div class="mylearning__popup">
                <p>You did not purchase anything yet</p>
            </div>
        </div>
        <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} />
        <FontAwesomeIcon icon={faBell} style={{color: "#000000",}} />
        <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} />
    </div>
    <div class="navbar__s4">
    <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
    </div>

</div>

 )
}

export default Navbar