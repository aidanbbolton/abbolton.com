import './Skills.css'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

type skill = {
    name: string;
    path: string;
}

function Skill(props: skill) {
    const altText = `${props.name} logo`
    return(
        <div className='scale-[0.85] 2xl:scale-100 flex flex-col items-center justify-evenly space-y-2'>
            <Image 
                src={props.path}
                alt={altText}
                width={50}
                height={50}
            />

            <h3 className='w-20 flex font-montserrat items-center justify-center text-center selectionwhite text-base 2xl:text-lg'>
                {props.name}
            </h3>
        </div> 
    )
}

export default function Skills() {
    return (
        <div className='skills-section'>
            <div className='format-container'>
                <div className='skillTitle'>Skills</div>
                <div className='wrapper'>
                   <hr className='rounded'></hr>
                </div>
                {/* <div className='skills-spacer'></div> */}
            
                <div className='mx-auto items-start justify-center space-y-10 md:space-y-16 xl:space-y-0 xl:grid xl:grid-cols-4 md:mx-20 bg-transparent'>
                    <div className='flex flex-col items-center justify-between space-y-5 bg-transparent outline'>
                        <motion.h2 className=' font-medium text-center text-3xl'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            Languages
                        </motion.h2>

                        <motion.div className='flex flex-wrap justify-evenly gap-5 2xl:gap-10'
                            initial={{ 
                                y: 100,
                                opacity: 0 
                            }}
                            whileInView={{ 
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            <Skill name="Python" path='/logos/python.svg'/>
                            <Skill name="Java" path='/logos/java.svg'/>
                            <Skill name="MySql" path='/logos/mysql.svg'/>
                            <Skill name='HTML5' path='logos/html5.svg'/>
                            <Skill name='C' path='logos/c.svg'/>
                            <Skill name='C#' path='logos/csharp.svg'/>
                            <Skill name='Bash' path='logos/bash.svg'/>
                            <Skill name='JavaScript' path='logos/javascript.svg'/>
                        </motion.div>
                    </div>
                    
                    <div className='skill-box flex flex-col items-center justify-between space-y-5 bg-transparent'>
                        <motion.h2 className='font-medium text-center text-3xl'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            ML / EDA
                        </motion.h2>

                        <motion.div className='flex flex-wrap justify-evenly gap-5 wxl:gap-10'
                            initial={{ 
                                y: 100,
                                opacity: 0 
                            }}
                            whileInView={{ 
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            <Skill name="Hugging Face" path='/logos/huggingface.svg'/>
                            <Skill name="Keras" path='/logos/keras.svg'/>
                            <Skill name="PyTorch" path='/logos/pytorch.svg'/>
                            <Skill name="TensorFlow" path='/logos/tensorflow.svg'/>
                            <Skill name='Pandas' path='logos/pandas.svg'/>
                            <Skill name='Seaborn' path='logos/seaborn.svg'/>
                            <Skill name='SpaCy' path='logos/SpaCy.svg'/>
                            <Skill name='Scikit-learn' path='logos/sklearn.svg'/>
                            <Skill name='NumPy' path='logos/numpy.svg'/>
                        </motion.div>
                    </div>

                    <div className='flex flex-col items-center justify-between space-y-5 xl:space-y-10 outline'>
                        <motion.h2 className='font-medium text-center text-3xl'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            Full Stack Dev
                        </motion.h2>

                        <motion.div className='flex flex-wrap justify-evenly gap-5 2xl:gap-10'
                            initial={{ 
                                y: 100,
                                opacity: 0 
                            }}
                            whileInView={{ 
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            <Skill name="React.js" path='/logos/reactjs.svg'/>
                            <Skill name="Next.js" path='/logos/nextjs.png'/>
                            <Skill name='Matter.js' path='logos/matterjs.svg'/>
                            <Skill name='RabbitMQ' path='logos/rabbitmq.svg'/>
                            <Skill name='postgresql' path='logos/postgresql.svg'/>
                            <Skill name='Django' path='logos/django.svg'/>
                            <Skill name='Flask' path='/logos/flask.png'/>
                            <Skill name='CSS3' path='logos/css3.svg'/>
                        </motion.div>
                    </div>

                    <div className='flex flex-col items-center justify-between space-y-5 xl:space-y-10'>
                        <motion.h2 className='font-medium text-center text-3xl'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            Other Tools
                        </motion.h2>

                        <motion.div className='flex flex-wrap justify-evenly gap-5 2xl:gap-10'
                            initial={{ 
                                y: 100,
                                opacity: 0 
                            }}
                            whileInView={{ 
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            <Skill name="Docker" path='/logos/docker.svg'/>
                            <Skill name="Git" path='/logos/git.svg'/>
                            <Skill name="Heroku" path='/logos/heroku.svg'/>
                            <Skill name='Vercel' path='logos/Vercel.svg'/>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}


// export default function Skills() {

//     return (
//         <header className='skills-section'>
//             <div className='format-container'>
//                 <div className='skillTitle'>Skills</div>
//                 <div className='wrapper'>
//                     <hr className='rounded'></hr>
//                 </div>

//                 <div className='skills-spacer'>
//                 </div>
//                 {/* <div className='skill-container'>
//                     <div>Test</div>
//                     <div>Test</div>
//                     <div>Test</div>
//                     <div>Test</div>
//                 </div> */}
//             </div>
//         </header>
//     )
// }