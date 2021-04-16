import React, {useState} from "react"
import {Link} from "react-router-dom"
import { RouterUrl, staticImgFolder } from "../../constants"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import NavbarTabs from "../NavbarTabs"
import Wave from "../Wave"

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <aside className="relative h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 2xl:h-96">
            <Wave className="lg:-top-10 top-0" text="CINEMA ET CONCERTS EN PLEIN AIR"/>
            <nav
                className="absolute z-20 flex flex-row justify-start lg:justify-between text-logo-blue lg:items-center w-full p-2">
                <Link id="logo" to={RouterUrl.home}
                    className="flex lg:flex-col flex-row justify-center md:text-xl uppercase z-20">
                    <img src={`${staticImgFolder}/logo_mazette_150x150.png`} alt="Logo" className="w-16 sm:w-20 md:w-24 lg:w-36 h-auto"/>
                </Link>

                <span className="block lg:hidden">
                    <div className="text-2xl md:text-4xl absolute right-2 text-logo-yellow"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        {!menuOpen ? <AiOutlineMenu/> : <AiOutlineClose/>}
                    </div>
                    <NavbarTabs setMenuOpen={setMenuOpen} isMenuOpen={menuOpen}
                        className="absolute w-full uppercase px-2 mt-5 top-8 left-0 md:top-12 text-3xl text-center bg-logo-blue"/>
                </span>

                <span className="hidden lg:block">
                    <NavbarTabs isMenuOpen={menuOpen} setMenuOpen={setMenuOpen}
                        className="lg:uppercase lg:flex lg:flex-row lg:justify-end lg:text-3xl"/>
                </span>

            </nav>
        </aside>
    )
}

export default Navbar
