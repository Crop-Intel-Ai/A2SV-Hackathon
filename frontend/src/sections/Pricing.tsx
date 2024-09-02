import CheckIcon from '@/assets/check.svg';
import {twMerge} from 'tailwind-merge';

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Basic Weather Forecasts",
      "Limited Pest Detection",
      "Access to Crop Library",
      "Basic support",
    ],
  },
  {
    title: "Premium Plan",
    monthlyPrice: 200,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Detailed Pest Analysis",
      "Comprehensive Weather Forecasts",
      "Personalized Crop Recommendations",
      "Plant Disease Detection",
      "Access to Expert Webinars",
      "Priority Customer Support",
    ],
  },
  {
    title: "Enterprise Plan",
    monthlyPrice: "custom",
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "All Premium Features",
      "Tailored Solutions for Larger Farms",
      "Advanced Data Analytics",
      "Integration with Farm Management Software",
      "On-site Training and Support",
      "Dedicated Account Manager",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
   <section className="py-24 bg-white">
     <div className="container">
      <div className='section-heading'>
       <h2 className="section-title">Pricing</h2>
       <p className="section-description mt-5">
        Free , Upgrade for unlimited tasks, better security, and exclusive features.
        </p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {pricingTiers.map(
           ({
             title,
             monthlyPrice,
             buttonText, 
             popular, 
             inverse,
             features,
           }) => (
             <div className={twMerge('card',inverse === true && 'border-black bg-black text-white')}>
              <div className='flex justify-between'>
               <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && "text-white/60")}>{title}</h3>
               {popular === true && (
                <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                <span className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium'>Popular</span>
              </div>
               )}
               
               </div>
               <div className='flex items-baseline gap-1 mt-[30px]'>
                <span className='text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
                <span className='tracking-tight font-bold text-black/50'>/year</span>
               </div>
               <button className='btn btn-primary w-full mt-[30px]'>
                {buttonText}
                </button>
               <ul className='flex flex-col gap-5 mt-8'>
                {features.map(feature => (
                  <li className='text-sm flex items-center gap-4'>
                    <CheckIcon className="h-6 w-6"/>
                    <span>{feature}</span>
                  </li>
                ))}
               </ul>
              </div>
           )
          )}
        
        </div>
      </div>   
    </section>
  );
};
