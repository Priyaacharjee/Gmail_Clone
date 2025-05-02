import React, { useEffect, useState } from 'react'
import { CiCircleQuestion, CiSettings } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';
import { PiDotsNineBold } from 'react-icons/pi';
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../redux/appSlice';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';


const Navbar = () => {
    const [input, setInput] = useState();
    const [toggle, setToggle] = useState(false);
    const {user}=useSelector(store=>store.appSlice)
    const dispatch = useDispatch();

    const signOutHandler=()=>{
        signOut(auth).then(()=>{
            dispatch(setUser(null));
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    useEffect(() => {
        dispatch(setSearchText(input))
    }, [input])

    return (
        <div className='flex items-center justify-between mx-3 h-16'>
            <div className='flex items-center gap-20 w-full'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <RxHamburgerMenu size={"20px"} />
                    </div>
                    <img className='w-8' src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-512.png" alt="gmaillogo" />
                    <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
                </div>
                <div className='md:block hiddden w-[50%] mr-60'>
                    <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                        <IoIosSearch size={"24px"} className='text-gray-700' />
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Search Mail'
                            className='rounded-full w-full bg-transparent outline-none px-1' />
                    </div>

                </div>
                <div className='md:block hidden'>
                    <div className='flex items-center gap-2'>
                        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <CiCircleQuestion size={'20px'} />
                        </div>
                        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <CiSettings size={'20px'} />
                        </div>
                        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <PiDotsNineBold size={'20px'} />
                        </div>
                        <div className='cursor-pointer'>
                            <img
                                onClick={() => setToggle(!toggle)}
                                src={user?.photoURL}
                                alt="user avatar"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <AnimatePresence>
                                {
                                    toggle && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.1 }}
                                            className='absolute right-2 z-20 shadow-lg bg-white rounded-md'>
                                            <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar