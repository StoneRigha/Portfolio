import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {BsFillEmojiSmileFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillFacebook,
  AiFillGithub,
} from 'react-icons/ai'
import ras from '../public/Avatar.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'
import logo from '../public/download.svg'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? "dark" : ""} >
      <title>Stonified</title>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <main className='bg-white text-black text-md py-5 leading-8 md:text-xl px-10 md:px-20 lg:px-40 dark:bg-gray-700'>
            <section className='min-h-screen'>
              <nav className='py-10 mb-12 flex justify-between'> 
                <h1 className='text-xl text-black dark:text-white'><Image src={logo} alt='logo' /></h1>
                <ul className='flex items-center'>
                  <li>
                    <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-black dark:text-white'/>
                  </li>
                  <li>
                    <a className='bg-gradient-to-r from-cyan-500 to teal-500 text-black px-4 py-2 rounded-md ml-8 dark:text-white' href="https://www.linkedin.com/in/livingstone-righa-a4747867/">Resume</a>
                    </li>
                </ul>
              </nav>
              
              {/* front section */}
              <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl' >Righa Maghanga</h2>
                <h3 className='text-2xl text-black py-2 md:text-3xl dark:text-white'>Fullstack Web Developer</h3>
                <p className='text-gray-800 text-md py-5 leading-8 md:text-xl max-w-xl mx-auto dark:text-white'>
                  Freelancer providing services for programming and content designing needs.
                  <BsFillEmojiSmileFill className='cursor-pointer text-2xl text-yellow-300'/>
                  Join me om my socials and lets get cracking
                </p>
              </div>
              <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
                <AiFillTwitterCircle className='' />
                <AiFillLinkedin className='' />
                <AiFillFacebook className='' />
                <AiFillGithub className='' />
              </div>
              <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt=20 overflow-hidden md:h-96 md:w-96'>
                <Image className='' src={ras} alt='image' layout='fill' objectFit='cover'  />
              </div>
            </section>
            {/* end of first page */}

            {/* second page */}
            <section>
              <div>
                <h3 className='text-3xl text-black py-12'>Services I offer</h3>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Since the beginning of my journey as a web developer, I have done remote work for <span className='text-teal-500'>agencies</span> consulted for <span className='text-teal-500'>start ups</span> and collaborated with talented people to create digital products for both digital and consumer use.</p>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>I offer from a wide range of services, including programming of desktop and mobile systems, database managment,and web deployment</p>
              </div>
              <div className='lg:flex gap-10'>
                <div className='text-center shadow-lg pd-10 rounded-xl my-10'>
                  < Image src={design} alt='image' width={100} height={100} />
                  <h3 className='text-lg font-medium pt-8 pb-2'>Mockup</h3>
                  <p className='py-2 text-black dark:text-white'>
                    Elegant mockup designs suited for your needs
                  </p>
                  <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                  <p className='text-gray-800 py-1 dark:text-white'>Adobe Photoshop</p>
                  <p className='text-gray-800 py-1 dark:text-white'>Adobe Illustrator</p>
                  <p className='text-gray-800 py-1 dark:text-white'>Figma</p>
                </div>
                <div className='text-center shadow-lg pd-10 rounded-xl my-10'>
                  < Image src={code} alt='image' width={100} height={100} />
                  <h3 className='text-lg font-medium pt-8 pb-2'>Code</h3>
                  <p className='py-2 text-black dark:text-white'>
                    As a developer
                  </p>
                  <h4 className='py-4 text-teal-600'>Languages and framework that I use</h4>
                  <p className='text-gray-800 py-1 dark:text-white'>Next Js</p>
                  <p className='text-gray-800 py-1 dark:text-white'>Laravel</p>
                  <p className='text-gray-800 py-1 dark:text-white'>Vue Js</p>
                </div>
                <div className='text-center shadow-lg pd-10 rounded-xl my-10'>
                  < Image src={consulting} alt='image' width={100} height={100} />
                  <h3 className='text-lg font-medium pt-8 pb-2'>DevOps</h3>
                  <p className='py-2 text-black dark:text-white'>
                    Talk of my engineering skills
                  </p>
                  <h4 className='py-4 text-teal-600'>Engennering tools I use</h4>
                  <p className='text-gray-800 py-1 dark:text-white'>Git</p>
                  <p className='text-gray-800 py-1 dark:text-white'>Docker</p>
                  <p className='text-gray-800 py-1 dark:text-white'>kubernetes</p>
                </div>
              </div>
            </section>
            {/* end of second section */}

            {/* start of third section */}
            <section> 
              <div>
                <h3 className='text-3xl text-black py-1'>Portfolio</h3>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>I am a Full Stack Software Developer using <span className='text-teal-500'>LAMPP Stack</span>(Linux, Apache, MySQL, PHP, & Python) for my whole development process. As a Fromt End developer I am convient with <span className='text-teal-500'>HTML 5, CSS 3, Javascript, Bootstrap 4, Semantics UI, Tailwind CSS, Vue Js, and React</span>. Also I am very convinient with Back End Development as well having my strong hold on <span className='text-teal-500'>PHP and Laravel a framework by PHP</span>.</p>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>As a <span className='text-teal-500'>Developer</span>, I transform high-fidelity mockup designs by creating the front end, back end, and database of a website, web application, and mobile applications</p>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>As an <span className='text-teal-500'>Engineer</span>, I can deploy a complete product utilizing cloud services, virtulization, and containerization with Docker, Kubernetes, and CI/CD using Agile methodology and DevOps approach.</p>
              
              </div>
              <div className='flex flex-col gap-10 py-10 lg:flex-row LG:flex-wrap'>
                <div className='basis-1/3 flex-1'> <Image src={web1} alt='' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/> </div>
                <div className='basis-1/3 flex-1'> <Image src={web2} alt='' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/> </div>
                <div className='basis-1/3 flex-1'> <Image src={web3} alt='' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/> </div>
                <div className='basis-1/3 flex-1'> <Image src={web4} alt='' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/> </div>
                <div className='basis-1/3 flex-1'> <Image src={web5} alt='' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/> </div>
                <div className='basis-1/3 flex-1'> <Image src={web6} alt='' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/> </div>
              </div>
            </section>
        </main>
    </div>
  );
}
