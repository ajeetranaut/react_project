"use client";

import {BottomNavbarMenu, MiddleNavbar, NavbarBottom, TopNavbar} from '@/ui';

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
	dictionary: any;
}

export const Navbar = ({dictionary}: ComponentProps) => {
	
	return (
		<>
			<TopNavbar dictionary={dictionary.header}/>
			
			<MiddleNavbar dictionary={dictionary.header}/>
			<NavbarBottom dictionary={dictionary.header}/>
			<div className="fixed bottom-0 md:hidden z-10 w-full">
				<BottomNavbarMenu dictionary={dictionary.header}/>
			</div>
		</>
	)
}
