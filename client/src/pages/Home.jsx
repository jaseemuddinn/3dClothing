import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { CustomButton } from '../components'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'


const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img
                            // src='./threejs.png'
                            src='./threejs_1.png'
                            alt='logo'
                            className='w-24 h-24 object-contain'
                        />
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation}>
                        <h1 className='head-text'>
                            LET'S <br className="xl:block hidden" /> DO IT.
                        </h1>
                    </motion.div>
                    <motion.div {...headContainerAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                            Create your unique and exclusive shirt with our brand-new 3D customisation tool. <strong>Unleash your imagination</strong> {' '} and define your own style.<br />Designed by Adrian Hajdin and Coded by <strong>Jaseemuddin</strong> 
                        </p>

                        <CustomButton
                            type='filled'
                            title='Customize it'
                            handleClick={() => state.intro = false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />

                    </motion.div>
                    {/* <p>Design by Adrian Hajdin and Coded by Jaseemuddin Naseem</p> */}
                </motion.section>
            )}
            
        </AnimatePresence>
        

    )
}

export default Home