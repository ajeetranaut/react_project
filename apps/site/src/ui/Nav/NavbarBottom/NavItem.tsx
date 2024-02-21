import { MenuProps } from "@/dictionaries/en";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";

const NavItem = ({ item }: { item: MenuProps }) => {
	return item.child ? (
		<div className="group">
			<Link
				href={item.link}
				className="font-normal text-xs lg:text-sm uppercase sm:text-smrelative flex items-center justify-center gap-1 text-base-300 whitespace-nowrap group-hover:text-primary transition group-hover:duration-700 py-4"
			>
				{item.name}
				<RiArrowDownSLine className="text-lg  text-base-300 whitespace-nowrap group-hover:text-primary transition group-hover:duration-700" />
			</Link>
			<div
				className=" opacity-0 invisible group-hover:opacity-100 group-hover:visible transition group-hover:duration-500
               absolute  z-10  ease-in-out"
			>
				<div className="bg-white px-4 w-[200px] rounded-b-xl shadow-lg">
					{item.child?.map((singleData: MenuProps, index: number) => (
						<Link href={singleData.link} key={index}>
							<span className="flex items-center justify-between cursor-pointer text-base-content hover:text-primary transition hover:duration-700">
								<span className="font-normal text-xs sm:text-sm text-base-300 whitespace-nowrap hover:text-primary transition hover:duration-700 py-3">
									{singleData.name}
								</span>
								<AiOutlineRight className="text-base" />
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	) : (
		<div>
			<Link
				href={item.link}
				className="font-normal text-xs lg:text-sm uppercase text-base-300 whitespace-nowrap hover:text-primary transition hover:duration-700 py-4"
			>
				{item.name}
			</Link>
		</div>
	)
}
export default NavItem;