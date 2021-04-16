import React, {useState} from "react"
import {NavHashLink} from "react-router-hash-link"
import {activeClass} from "../NavbarTabs"

export interface DropdownItem {
    name: string
    link: string
}

interface DropDownProps {
    name: string
    className: string
    items: DropdownItem[]
    onItemClick: () => void
}

const DropDown: React.FC<DropDownProps> = ({name, className, items, onItemClick}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [isParentActive, setParentActive] = useState<boolean>(false)

    const isActive = (match) => {
        if (!match) {
            setParentActive(false)
            return false
        }
        setParentActive(true)
        return true
    }

    const handleClick = () => {
        onItemClick()
        setOpen(false)
    }

    return (
        <div className={`relative ${className} focus:outline-none cursor-pointer`}
            onClick={() => setOpen(!open)} onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            <div
                className={`inline-flex items-center w-full h-full justify-center uppercase p-2 focus:outline-none ${isParentActive ? activeClass : ""}`}>
                {name}
            </div>
            <div
                className={`${open ? "flex" : "hidden"} flex-col text-right bg-logo-yellow text-logo-blue lg:absolute lg:right-0 last:rounded-b-md`}>
                {
                    items.map((item, index) => (
                        <NavHashLink key={index} to={`${item.link}#${item.name}`} role="menuitem"
                            onClick={handleClick} isActive={isActive}
                            className="w-full pr-1 py-2 hover:bg-logo-blue hover:text-logo-yellow border border-transparent hover:border-logo-yellow font-light text-sm md:text-base lg:text-xl lg:last:rounded-b-md lg:pl-5 lg:py-1">
                            {item.name}
                        </NavHashLink>
                    ))
                }
            </div>
        </div>
    )
}

export default DropDown
