import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>  
        <div className=" transition-all delay-100 duration-500 absolute z-0 bg-[url('/assets/images/exterior1.jpg')] bg-cover bg-no-repeat w-[100%] h-[100%] opacity-[0.04]"></div>
        <div id="home" className=" relative px-8 3xm:px-4 pt-10 4xm:pt-6 pb-10 2xm:pb-5 z-10 ">
          <h1 title="Hii" className=" transition-all transition-bg duration-500 delay-100 w-[144px] h-[144px] xm:w-[114px] xm:h-[114px] 4xm:w-[80px] 4xm:h-[80px] hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-400 hover:w-[148px] hover:h-[148px] border-2 rounded-[50%] border-yellow-400 m-auto p-1 hover:p-0"><Image className=" rounded-[50%]" src="/assets/images/abj.png" alt="photo" width={144} height={144} /></h1>
          <h1 className="mt-4 3xm:mt-2 inline-block bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-100 bg-transparent bg-clip-text text-transparent ">ABHIJITH TV</h1>
          <h2 className="mt-2 3xm:mt-1">Civil engineer, Interior designer, 3D Visualiser</h2>
          <h4 className="mt-4 3xm:mt-2">DOB :- 03/06/2002</h4>
          <div className="a-s mt-14 3xm:mt-8 flex items-center justify-between lg:block">
            <div className="lg:mb-10 3xm:mb-6">
              <h2 className=" underline underline-offset-2 text-yellow-200">ABOUT</h2>
              <p className="mt-2">Hii, I'm ABHIJITH TV, I'm a passionate and hardworking Civil Engineer with expertise in Interior Design, and 3D Visualization. I'm a quick learner and more excited to complete projects that satisfies the clients requirements with in time and budget. I have skills in AutoCad, Lumion, SketchUp, 3dx Max,etc. I specialize in transforming complex ideas into functional, beautiful, and well-visualized projects, ensuring every detail is aligned with client goals and industry standards.</p>
              <Link href={'#work'} className=" text-yellow-400 hover:underline hover:text-yellow-600">Lets see some of my works</Link>
            </div>
            <div>
              <h2 className=" underline underline-offset-2 text-yellow-200">SKILLS</h2>
              <ul className="skills mt-2 text-left inline-block list-disc">
                <li><p>AutoCad</p></li>
                <li><p>Lumion</p></li>
                <li><p>SketchUp</p></li>
                <li id="work"><p>3dx Max</p></li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
}
