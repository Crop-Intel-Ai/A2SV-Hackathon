import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from 'next/image';
import { twMerge } from "tailwind-merge";
const testimonials = [
  {
    text: "CropIntel AI's Crop Recommendation feature helped me choose the best crops for my land, significantly improving my yield and profitability.",
    imageSrc: avatar1.src,
    name: "Uwumukiza anitha",
    username: "@anithau",
  },
  {
    text: "Accurate weather forecasts from CropIntel AI help protect my coffee crops from unexpected weather changes.",
    imageSrc: avatar2.src,
    name: "Hakizimana Janvier",
    username: "@hkzjanvier",
  },
  {
    text: "The detailed LLM diagnostic reports from CropIntel AI provide actionable insights, improving my orchard’s health and overall productivity.",
    imageSrc: avatar3.src,
    name: "Manzi  Rwaje",
    username: "@manzixx",
  },
  {
    text: "CropIntel AI optimizes planting schedules and reduces pesticide use with effective pest detection.",
    imageSrc: avatar4.src,
    name: "Zawadi Amina",
    username: "@zwamiina1",
  },
  {
    text: "Accurate data from CropIntel AI supports my organic farming with crop rotations and pest management.",
    imageSrc: avatar5.src,
    name: "Rurangirwa Kassim",
    username: "@kassimmr",
  },
  {
    text: "CropIntel AI optimizes planting schedules and reduces pesticide use with effective pest detection.",
    imageSrc: avatar6.src,
    name: "Kabano Dalia",
    username: "@kab_dalia",
  },
  {
    text: "Early disease detection with CropIntel AI reduces crop loss and improves my wheat farm’s health",
    imageSrc: avatar7.src,
    name: "Mugabo Tito",
    username: "@mutitoo",
  },
  {
    text: "Weather updates and disease alerts from CropIntel AI improve crop health and yields.",
    imageSrc: avatar8.src,
    name: "Mutesi Alice",
    username: "@mutesia",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Nyirazo Adrien",
    username: "@nyiraa1",
  },
];


const firstColumn = testimonials.slice(0,3);
const secondColumn = testimonials.slice(3,6);
const thirdColumn = testimonials.slice(6,9);

const TestimonialsColumn =(props: {className?:string; testimonials: typeof testimonials }) => (
  <div className={twMerge("flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]", 
  props.className
  )}
  >
  {props.testimonials.map(({text, imageSrc, name, username}) => (
    <div className="card">
      <div>{text}</div>
      <div className="flex items-center gap-2 mt-5">
        <Image
        src={imageSrc}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full" 
        />
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5">{name}</div>
          <div className="leading-5 tracking-tight">{username}</div>
            
        </div>
      </div>
    </div>
  ))}
</div>
)

export const Testimonials = () => {
  return(
  <section className="bg-white ">
    <div className="container"> 
      <div className="section-heading"> 
      <div className="flex justify-center">
      <div className="tag">Testimonials</div>
      </div>
      <h2 className="section-title mt-5">What our users say</h2>
      <p className="section-description mt-5">
        From intuitive design to powerful features, our system has became an essential tool for users around africa.
      </p>
      </div>
      <div className="flex justify-center gap-6" >
        <TestimonialsColumn testimonials={firstColumn} />
        <TestimonialsColumn
         testimonials={secondColumn} 
         className="hidden md:flex"
        />
        <TestimonialsColumn
         testimonials={thirdColumn} 
         className="hidden lg:flex"
        />
      </div>
    </div>
  </section>
  );
};