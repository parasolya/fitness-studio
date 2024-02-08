import { HText } from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

export const ContactUs = ({ setSelectedPage }: Props) => {

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const inputStyles = `w-full p-4 rounded-lg bg-primary-300 mb-5 placeholder-white text-primary-400`;

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="w-full pt-24 pb-32">
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
          <p className="mt-5">Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
        </motion.div>
        {/* Form */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <form
              className="w-3/5 pt-20"
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/ola.shevchuk@gmail.com"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="E-MAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                }
                )}
              />
              {errors.email &&
                <p>
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              }
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("massage", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.massage &&
                <p>
                  {errors.massage.type === "required" && "This field is required."}
                  {errors.massage.type === "maxLength" && "Max length is 200 char."}
                </p>
              }
              <button
                className="text-primary-400 transition duration-500 hover:text-white bg-secondary-500 rounded-lg px-20 py-3 "
                type="submit"
              >SUBMIT</button>
            </form>
          </motion.div>
          <motion.div>
            <div>
              <img />
            </div>
          </motion.div>
        </div>

      </motion.div>

    </section>
  )
}