import Image from "next/image"
import Link from "next/link"


export default function Footer(){
    return(
            <footer className="bg-black text-white text-center py-4 shadow-white ">
                <h4 className=" text-[14px] 3xm:text-[10px] underline underline-offset-2 mb-2">CONTENT</h4>
                <ul>
                <li><Link href={"/"}><p>Home</p></Link></li>
                <li><Link href={"#work"}><p>Works</p></Link></li>
                <li><Link href={"#contact"}><p>Contact</p></Link></li>
                </ul>
                <h4 className=" text-[14px] 3xm:text-[10px] underline underline-offset-2 mt-3 3xm:mt-1 mb-2">SOCIAL</h4>
                <ul className=" footer flex items-center justify-between">
                <li title="Whatsapp" className="mr-4"><Link target="blank" href={"https://api.whatsapp.com/send?phone=7559026128&text=Hii"} ><Image src="/assets/images/whatsapp_w.svg" alt="whatsapp" width={30} height={30} /></Link></li>
                <li title="Instagram"><Link target="blank " href={"https://www.instagram.com/_ab_jth/"} ><Image src="/assets/images/instagram_w.svg" alt="insta" width={30} height={30}/></Link></li>
                </ul>
                <h6 className="mt-3 3xm:mt-1 text-[13px] 3xm:text-[10px]">Call :- <Link target="blank" href={"https://api.whatsapp.com/send?phone=7559026128&text=Hii"} className=" text-[13px] 3xm:text-[10px] hover:text-gray-300 hover:underline">+91 7559026128</Link></h6>
                <p className=" text-[10px] 3xm:text-[6px] mt-3 3xm:mt-1">© Copyright 2024 Abhijith TV</p>
            </footer>
    )
}