import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(

            <header className=" fixed top-0 right-0 z-20 left-0 shadow-black shadow-lg bg-gradient-to-r from-black via-violet-800 to-black py-2 px-10 3xm:px-2 flex justify-between items-center">
                <div>
                <h1 className="rounded-[50%] text-[0px]" title="Artso"><Link className=" inline-block rounded-[50%] " href={"/"}><Image className=" rounded-[50%] sm:w-[68px] sm:h-[68px] xm:w-[60px] xm:h-[60px] 4xm:w-[50px] 4xm:h-[50px] " src="/assets/images/artso.jpg" width={80} height={80} alt="logo" /></Link></h1>
                </div>
                <div>
                <ul className=" flex">
                    <li className=" mr-8 3xm:mr-2 " title="Home"><Link href={"/"}>Home</Link></li>
                    <li className=" mr-8 3xm:mr-2" title="Works"><Link href={"#work"}>Works</Link></li>
                    <li title="Contact"><Link href={"#contact"}>Contact</Link></li>
                </ul>
                </div>
            </header>
    )
}