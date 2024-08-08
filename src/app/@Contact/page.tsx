import Link from "next/link";
import Image from "next/image";

export default function Contact(){
    return(
            <div id="contact" className="  px-8">
                <h2 className=" underline underline-offset-4 mb-4 mt-4 text-yellow-200">CONTACT</h2>
                <h4 className="pt-2">Email :- <Link  target="blank" href={"mailto:abhijithabhi0936@gmail.com"}>abhijithabhi0936@gmail.com</Link></h4>
                <h4 className="mt-2">Phone :- <Link target="blank" href={"https://api.whatsapp.com/send?phone=7559026128&text=Hii"}>+91 7559026128</Link></h4>
                <ul className="social flex items-center justify-center mt-6 3xm:mt-3">
                <li title="Whatsapp" className=" sm:mr-8"><Link target="blank" href={"https://api.whatsapp.com/send?phone=7559026128&text=Hii"} ><Image className=" xm:w-[50px] xm:h-[50px]" src="/assets/images/whatsapp.svg" alt="whatsapp" width={40} height={40}/></Link></li>
                <li title="Instagram"><Link target="blank " href={"https://www.instagram.com/_ab_jth/"} ><Image src="/assets/images/instagram.svg" className=" xm:w-[50px] xm:h-[50px]" alt="insta" width={40} height={40}/></Link></li>
                </ul>
            </div>
    )
}