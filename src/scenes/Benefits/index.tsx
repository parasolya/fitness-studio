import { HText } from '@/shared/HText';
import { BenefitType } from '@/shared/types';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Benefit } from '@/scenes/Benefits/Benefit';


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className='min-h-full'>
    <div className='py-20 mx-auto items-center justify-center w-5/6'>
      <div>
      <HText>MORE THAN JUST GYM.</HText>
      <p className='text-sm my-5'>
        We provide world class fitness equipment, trainers and classes to
        get you to your ultimate fitness goals with ease. We provide true
        care into each and every member.</p>
    </div>
    <div className='mt-5 items-center justify-between md:flex gap-5' >
{ benefits.map((benefit: BenefitType) => (
  
  <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description}/>
  
  
)

)
}
</div>
    </div>
    </section>
  )
}