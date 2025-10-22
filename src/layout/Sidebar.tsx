import {NavLink} from "react-router";
import {nav} from "../assets/constants.ts";
import {Settings} from "../assets/icons/Settings.tsx";
import {User} from "../assets/icons/User.tsx";

const Sidebar = () => {
    return (
        <aside
            className="col-md-3 bg-white text-white py-5 order-md-1 order-2 shadow-right position-relative h-100 z-1">
            <div style={{width: "max-content"}}
                 className='position-relative m-auto d-flex flex-column align-items-center justify-content-center'>
                <User size={40} background='#333333'/>
                <Settings size={12} className='position-absolute bottom-0 end-0' background='#FFFFFF' color='#333333'/>
            </div>

            <nav className="mt-5 d-flex flex-column justify-content-center align-items-center gap-4 text-uppercase ">
                {nav.map((item) => (
                    <NavLink
                        className={({isActive}) =>
                            `text-decoration-none text-dark 
                            ${isActive ? "nav-active" : ""}`
                        }
                        to={item.href}
                        key={item.name}>
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar;