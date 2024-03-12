import { HText } from '@/shared/HText';
import { BenefitType } from '@/shared/types';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Benefit } from '@/scenes/Benefits/Benefit';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import ActionButton from '@/shared/ActionButton';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae rem architecto, harum dolorem inventore quidem!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas reprehenderit impedit rem. Possimus!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, totam perspiciatis? Quo fugit non consectetur!",
  },
];

export const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className='min-h-full'>
      <motion.div
        className='pt-40 pb-24 mx-auto items-center justify-center w-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className='text-sm my-5'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        <motion.div
          className='mt-5 items-center justify-between md:flex gap-5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container} >

          {benefits.map((benefit: BenefitType) => (
            <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description}
              setSelectedPage={setSelectedPage} />
          ))
          }
        </motion.div>

        {/* Grafic and description */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>

          <img className='mx-auto' alt='grafic-benefits' src={BenefitsPageGraphic} />

          {/* DESCRIPTION */}
          <div className='relative'>
            <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
              <motion.div

                initial='hidden'
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>

            <motion.div
              initial='hidden'
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates omnis, error dolore quo repellat aut quasi sed, saepe voluptatum expedita mollitia laborum earum quod praesentium quidem aperiam voluptatibus perspiciatis reprehenderit unde commodi quam ea dolorum, dolorem illum. Ducimus quia saepe repellendus sequi deserunt sed ab.
              </p>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto fuga culpa distinctio aliquid repudiandae incidunt quod, recusandae ex eveniet accusantium quisquam quibusdam deserunt. Distinctio!
              </p>
            </motion.div>

            {/* Button */}
            <div className='relative mt-16 z-[2]'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  )
}