import Logo from '@/assets/Logo.png';

export const Footer = () => {
    return (
        <footer className='bg-primary-100 py-12'>
            <div className='justify-between mx-auto w-5/6 gap-16 md:flex'>
                <div className='basis-1/2'>
                    <img className='mb-8' alt="logo" src={Logo} />
                    <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum ipsum eum quae. Autem perferendis adipisci, provident a reiciendis distinctio ex nemo repellat rem id iste ducimus iure, asperiores fugiat.</p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div>
                    <h4 className="font-bold mb-8 mt-16 md:mt-0">Links</h4>
                    <p className='mb-2'>Fitness, crossfit, gym</p>
                    <p className='mb-2'>Yoga for beginners</p>
                    <p>Massage room</p>
                </div>
                <div>
                    <h4 className="font-bold mb-8 mt-16 md:mt-0">Contact Us</h4>
                    <p className='mb-4'>Email: <a href="mailto:example@example.com">example@example.com</a></p>
                    <p >Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                </div>
            </div>
        </footer>
    )
}