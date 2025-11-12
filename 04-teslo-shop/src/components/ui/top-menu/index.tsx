import { titleFont } from "@/config/fonts"
import Link from "next/link"


export const TopMenu = () => {
    return (
        <nav className="flex px-5 justify-between items-center w-full">
            <div>
                <Link href="/">
                    <span className={`font-bold antialiased ${titleFont.className}`}> Teslo</span>
                </Link>
            </div>

        </nav>
    )
}
