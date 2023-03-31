import Link from "next/link";

export default function Navbar(){
    return(
        <div className="navbar bg-base-50 bg-pink-200">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">まいぺーじ</Link>
            </div>
        </div>
    ) 
}
