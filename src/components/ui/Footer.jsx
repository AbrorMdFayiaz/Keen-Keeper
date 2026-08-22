import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='bg-success-content pt-20 pb-8 '>
            <section className='px-3 sm:px-0 container mx-auto text-center text-[#ffffff]'>
                <h1 className='text-2xl sm:text-4xl font-extrabold'>Keen<span className='font-semibold'>Keeper</span></h1>
                <p className='pt-4 pb-6 opacity-80'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h4 >Social Links</h4>
                <div className='flex gap-3 justify-center text-black pb-10 pt-4'> 
                    <span className=' p-3  bg-amber-50 rounded-full'><span className='text-[18px]'><TbBrandInstagramFilled/></span></span>
                    <span className=' p-3  bg-amber-50 rounded-full'><span className='text-[18px]'><FaFacebookSquare /></span></span>
                    <span className=' p-3  bg-amber-50 rounded-full'><span className='text-[18px]'><FaXTwitter /></span></span>
                </div>
                <div className='space-y-2 sm:flex justify-between text-[#fafafa] pt-8 border-t border-[#1A8862] opacity-50'>
                    <section>© 2026 KeenKeeper. All rights reserved.</section>
                    <section className='space-x-6'>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookies</span>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Footer;