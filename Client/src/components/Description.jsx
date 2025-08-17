import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'


const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold md-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into a visual</p>
    

    <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing AI Image GENERATOR</h2>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quas accuexe hic sequi nihil fugiat voluptatem dolores placeat in, ipsam animi, quasi molestiae dolorem eos dolorum est quod, deleniti aspernatur impedit quis. Facilis temporibus quas labore inventore rerum.</p>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expvel architecto nisi inventore saepe, soluta tenetur commodi dignissimos est doloremque voluptatum alias ab labore nesciunt corporis nemo? Obcaecati quos assumenda ratione animi esse perspiciatis porro consequatur accusamus, aperiam odit iusto!</p>

        </div>
    </div>
  
    </motion.div>
  )
    
}

export default Description
