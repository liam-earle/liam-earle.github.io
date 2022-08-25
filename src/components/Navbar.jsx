/*  ./components/Navbar.jsx     */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export const Navbar = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className='flex items-center sticky top-0 z-50 flex-wrap bg-black/50 p-3'>
				<a href="/" className='inline-flex items-center p-2 mr-4'>
					<span className='text-2xl text-white font-code-font tracking-wide'>
					<TypeAnimation
    					sequence={[
    						'Hi there,',
							2000,
							'I\'m Liam'
    					]}
    					wrapper="div"
    					cursor={true}
    				/>
					</span>
				</a>
				<motion.div className="ml-auto" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
					<button
						className=' inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white outline-none'
						onClick={handleClick}
					>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<NavbarHamburger isOpen={active}/>
						</svg>
					</button>
				</motion.div>
				{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
				<div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
					<div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
						<motion.div className="py-2"whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
							<a href="/" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-900 hover:text-white `}>
								Home
							</a>
						</motion.div>
						<motion.div className="py-2"whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
							<a href="/projects" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-900 hover:text-white `}>
								Projects
							</a>
						</motion.div>
						<motion.div className="py-2"whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
							<a href="https://liamearle.ca/resume" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-900 hover:text-white `}>
								Resume
							</a>
						</motion.div>
					</div>
				</div>
			</nav>
		</>
	);
};

export const NavbarHamburger = (props) => {
	if(props.isOpen) {
		return(
			<>
				<path
					stroke-linecap="round" 
					stroke-linejoin="round"
					strokeWidth={2} 
					d="M6 18L18 6M6 6l12 12" 
				/>
			</>
		);
	}
	return(
		<>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M4 6h16M4 12h16M4 18h16'
			/>
		</>
	);
}
