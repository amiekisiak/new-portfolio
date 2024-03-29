import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import ola from '../../public/picture5.svg';
import comp from '../../public/web1.png';
import im from '../../public/web2.png';
import im2 from '../../public/web3.png';
import proj1 from '../../public/proj1.png';
import proj2 from '../../public/proj2.png';
import proj3 from '../../public/proj3..png';
import proj4 from '../../public/proj4..png';
import proj5 from '../../public/proj5.png';
import proj6 from '../../public/proj6.png';
import proj7 from '../../public/btr.png';
import proj8 from '../../public/wp.png';

export default function Home() {
   
   return (
      <div>
         <Head>
            <title>Aleksandra Miekisiak Portfolio</title>
            <meta name="description" content="Generated by me"></meta>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className='bg-black px-10'>
            <section className=" bg-purple-900 px-10 pb-10">
               <nav className="py-10 mb-12 flex justify-between">
                  <h1 className="text-xl font-syne">Aleksandra's Portfolio</h1>
                  <ul className="flex items-center">
                     <li>
                        <BsFillMoonStarsFill className="cursor-pointer"></BsFillMoonStarsFill>
                     </li>
                     
                     <li>
                     <a className='transition duration-500 ease-in-out bg-cyan-500 hover:bg-slate-400 bg-gradient-to-tr from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href='https://dochub.com/m/shared-document/mylegalworldsite/6mO8oy7Kp2gG2L4wqg5p9J/aleksandram-cv-pdf?dt=PdJLnxXfG-R8fk7E8oSD' target="_blank" rel="noopener noreferrer">Resume</a>

                     </li>
                  </ul>
               </nav>
               <div className="text-center p-10 py-10">
                  <h2 className='text-5xl py-2 text-teal-100 font-medium md:text-6xl'>Aleksandra Miekisiak</h2>
                  <h3 className='text-2xl py-2 md:text-3xl'>Developer and Designer.</h3>
                  <p className='text-md py-5 leading-8 text-white md:text-xl max-w-xl mx-auto'>
                     I am a highly motivated Front-End Web Developer with a solid foundation in HTML, CSS and JavaScript,
                     recently graduated from a rigorous front-end web development bootcamp with hands-on experience in crafting responsive websites and applications. I am enthusiastic about expanding my knowledge in back-end development and in languages such as PHP, C# and Python. I am eager to contribute my front-end skills and rapidly learn and apply new technologies to create innovative and seamless web solutions for your organisation.
                  </p>
               </div>
               <div className='text-5xl flex justify-center gap-16 py-3 text-grey-300'>
  <a href="https://github.com/amiekisiak" target="_blank" rel="noopener noreferrer">
    <AiFillGithub />
  </a>
  <a href="https://www.linkedin.com/in/aleksandra-m-ab9a4111a/" target="_blank" rel="noopener noreferrer">
    <AiFillLinkedin />
  </a>
</div>
               <div className='relative mb-20 mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
                  <Image src={ola} layout="fill" objectFit="cover"/>
               </div>
            </section>
            <section className="px-4 lg:px-20 py-8">
  <div>
    <h3 className="text-center text-3xl py-1">Services I offer</h3>
    <p className="text-center text-md py-2 leading-8 text-white">
      I offer a variety of services relating to web development and designing websites.
      Work that I've done includes designing websites and small projects.
    </p>
  </div>

  <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:gap-10">
    <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:my-0 dark:bg-teal-500 flex-1 flex flex-col items-center">
      <Image src={im} width={100} height={100} className="flex text-center" />
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p className="py-2">Creating beautiful designs.</p>
      <h4 className="py-4 text-teal-400">My design tools</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>

    <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:my-0 dark:bg-teal-500 flex-1 flex flex-col items-center">
      <Image src={comp} width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p className="py-2">Creating beautiful designs.</p>
      <h4 className="py-4 text-teal-400">My design tools</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>

    <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:my-0 dark:bg-teal-500 flex-1 flex flex-col items-center">
      <Image src={im2} width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p className="py-2">Creating beautiful designs.</p>
      <h4 className="py-4 text-teal-400">My design tools</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>
  </div>
</section>

            <section>
               <div>
                  <h3 className='text-2xl py-2'>Portfolio</h3>
                  <p className='text-md py-10 leading-8 text-white'>
                     I am a highly motivated Front-End Web Developer with a solid foundation in HTML, CSS and JavaScript,
                     recently graduated from a rigorous front-end web development bootcamp with hands-on experience in crafting responsive websites and applications. I am enthusiastic about expanding my knowledge in back-end development and in languages such as PHP, C# and Python. I am eager to contribute my front-end skills and rapidly learn and apply new technologies to create innovative and seamless web solutions for your organisation.
                  </p>
               </div>
               <div className='bg-purple-900 text-center shadow-lg p-10 rounded-xl my-10 flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
               <a href="https://amiekisiak.github.io/workday-planner/" target="_blank" rel="noopener noreferrer" className='basis-1/3 flex-1'>
    <Image src={proj1} className='shadow-lg p-10 rouned-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
</a>
               <a href="https://amiekisiak.github.io/Bootstrap-Portfolio/" target="_blank" rel="noopener noreferrer" className='basis-1/3 flex-1'>
    <Image src={proj2} className='shadow-lg p-10 rouned-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
</a>
               <a href="https://github.com/amiekisiak/Ingredient-Finder" target="_blank" rel="noopener noreferrer" className='basis-1/3 flex-1'>
    <Image src={proj3} className='shadow-lg p-10 rouned-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
</a>
          
               <a href="https://amiekisiak.github.io/my-react-portfolio/" target="_blank" rel="noopener noreferrer" className='basis-1/3 flex-1'>
    <Image src={proj4} className='shadow-lg p-10 rouned-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
</a>
               <a href="https://amiekisiak.github.io/my-coding-quiz/" target="_blank" rel="noopener noreferrer" className='basis-1/3 flex-1'>
    <Image src={proj5} className='shadow-lg p-10 rouned-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
</a>
               <a href="https://vaselisk999.github.io/tasty-facts/" target="_blank" rel="noopener noreferrer" className='basis-1/3 flex-1'>
    <Image src={proj6} className='shadow-lg p-10 rouned-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
</a>

<a href="https://bound2read.netlify.app/" target="_blank" rel="noopener noreferrer" className='basis-1/3 flex-1'>
    <Image src={proj7} className='shadow-lg p-10 rouned-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
</a>
<a href="https://cro-codile.com/" target="_blank" rel="noopener noreferrer" className='basis-1/3 flex-1'>
    <Image src={proj8} className='shadow-lg p-10 rouned-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
</a>


               </div>
            </section>
         </main>
      </div>
   );
}
