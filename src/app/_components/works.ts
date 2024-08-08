
export type WORKS={
    id:number;
    title:string;
    image:string;
    description:string;
    type:"exterior"|"interior"|"plan";
}


export const Works:WORKS[]=[
    {
        id:1,
        title:"House-1",
        image:"/assets/images/exterior1.jpg",
        description:"This is the one of my exterior house project which built using SketchUp and Lumion.",
        type:"exterior",
    },
    {
        id:2,
        title:"House",
        image:"/assets/images/interior1.jpg",
        description:"Here you can see the Interior design project of night view of a small house with beautiful textures and lights  which I built using SketchUp and VRay.",
        type:"interior",
    },
    {
        id:3,
        title:"Room",
        image:"/assets/images/interior2.jpg",
        description:"This one is the Interior design of a room which I built using SketchUp and VRay.",
        type:"interior",
    },
    {
        id:4,
        title:"House-1",
        image:"/assets/images/plan-1.jpg",
        description:"This is the 2D presentation plan of a small house that contains two bedrooms with attached toilet and dressing room which I built using AutoCad.",
        type:"plan",
    },
    {
        id:5,
        title:"House-2",
        image:"/assets/images/exterior2.jpg",
        description:"This one is another of my exterior house project which built using SketchUp and VRay.",
        type:"exterior",
    },
    {
        id:6,
        title:"House-2",
        image:"/assets/images/plan-2.jpg",
        description:"Here you can see the 2D plan of a small house that contains three bedrooms with attached toilet which I built using AutoCad.",
        type:"plan",
    },
]