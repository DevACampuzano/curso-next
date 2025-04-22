import Link from "next/link"

import {HomeIcon} from '@primer/octicons-react'
import { ActiveLink } from "../active-link/ActiveLink"


const navItem = [
    {path:"/about", text: "About"},
    {path:"/contact", text: "Contact"},
    {path:"/pricing", text: "Pricing"},
]

export const Navbar = async () => {

  return (
    <nav className="flex bg-blue-950 bg-opacity-30 p-2 m-2 rounded" >
        <Link href="/" className="flex items-center gap-2">
        <HomeIcon size={16} />
        <span>Home</span>
        </Link>
        <div className="flex flex-1"></div>
        <div className="flex gap-2 pr-2">
            {
                navItem.map((navItem)=>(<ActiveLink key={navItem.path} {...navItem}/>))
            }
        </div>
    </nav>
  )
}