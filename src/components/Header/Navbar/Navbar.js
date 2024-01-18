import './Navbar.css'
import {Link} from "react-scroll"
const Navbar = function(){
    return (
        <div className="nb" id='navbar'>
            <div className='logo'>
            </div>
            <div className="nb-menu">
                <ul className="nb-menuitems">
                    <Link to={'navbar'} smooth={true}  duration={500} ><li className="menuitem">HOME</li></Link>
                    <Link to={'about'} smooth={true}  duration={500}><li className="menuitem">ABOUT</li></Link>
                    <Link to={'skills'} smooth={true}  duration={500}><li className="menuitem">SKILLS</li></Link>
                    <Link to={'projects'} smooth={true}  duration={500}><li className="menuitem">PROJECTS</li></Link>
                    <Link to={'contact'} smooth={true} offset={50}  duration={500}><li className="menuitem">CONTACT</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar