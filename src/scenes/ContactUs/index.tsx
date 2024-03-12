import { HText } from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

export const ContactUs = ({ setSelectedPage }: Props) => {



  const inputStyles = `focus:caret-primary-400 outline-none w-full p-4 rounded-lg bg-primary-300 placeholder-white text-primary-400 border-2 border-primary-300 transition duration-500  focus:border-primary-500 hover:border-primary-500`;

  const {
    register,
    trigger,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    } else reset();   
  };

  return (
    <section id="contactus" className="w-full pt-40 pb-32">
      <motion.div
        className="w-5/6 mx-auto "
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        <motion.div
          className="md:w-3/5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="mt-5">"WHAT SEEMS IMPOSSIBLE TODAY WILL BECOME A REALITY TOMORROW"</p>
        </motion.div>
        {/* Form */}
        <div className="md:flex justify-between pt-20">
          <motion.div
            className="md:w-1/2 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/ola.shevchuk@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="fitness-studio-New submission!" />
              <input type="hidden" name="_next" value="http://localhost:5173/fitness-studio/src/scenes/Thanks/thanks.html"/>
              <input
                className={inputStyles}
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-primary-500 mb-1" style={{ visibility: 'visible' }}>
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 char."}
                </p>
              )}
              {!errors.name && (
                <p className="text-primary-500 mb-1" style={{ visibility: 'hidden' }}>
                  This field is required.
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="E-mail"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                }
                )}
              />
              {errors.email && (
                <p className="text-primary-500 mb-1" style={{ visibility: 'visible' }}>
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              {!errors.email && (
                <p className="text-primary-500 mb-1" style={{ visibility: 'hidden' }}>
                  This field is required.
                </p>
              )}
              <textarea
                className={inputStyles}
                placeholder="Message"
                rows={4}
                cols={5}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="-mt-2 text-primary-500 mb-1" style={{ visibility: 'visible' }}>
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 char."}
                </p>
              )}
              {!errors.message && (
                <p className="-mt-2 text-primary-500 mb-1" style={{ visibility: 'hidden' }}>This field is required.</p>
              )}
              <button
                className="w-52 py-3 text-primary-400 transition duration-500 hover:text-white bg-secondary-500 rounded-lg"
                type="submit"
              >SUBMIT</button>
            </form>

          </motion.div>
          <motion.div
            className="basis-2/5 mt-16 md:mt-0 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <div className="relative z-1 w-full">
              <img className="w-full z-10 relative" alt="Contact Us" src={ContactUsPageGraphic} />
              <div className="after:absolute md:after:content-evolvetext  after:z-0 after:-bottom-20 after:right-20">
              </div>
            </div>
          </motion.div>


        </div>

      </motion.div>

    </section>
  )
}