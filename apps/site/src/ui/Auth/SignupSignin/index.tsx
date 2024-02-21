"use client";

import { useGlobalContext } from "@/context/store";
import { LoginForm, SignUpForm } from "@/ui";
import { useState } from "react";

export const SignupSignin = ({ dictionary }: { dictionary: any }) => {
	const [active, setActive] = useState<number>(0);
	const { loginModal, toggleLoginModal } = useGlobalContext()
	return (
		<div>
			<div
				className={`fixed w-full h-full left-0 top-0 z-20 bg-[#18181B] opacity-50  ${loginModal ? "opacity-40 visible" : "invisible scale-0 opacity-0"
					}`}
			/>
			<div
				className={`fixed w-full h-full left-0 top-0 z-50 flex items-center justify-center transition-all ease-in duration-300 ${loginModal ? "scale-100 visible opacity-100" : "invisible scale-0 opacity-0"
					}`}
			>
				<div className="p-5 md:p-10 rounded-2xl w-[340px] sm:w-[440px] xl:w-[480px] overflow-y-auto z-50 bg-white relative transition-all ease-in-out duration-300 max-h-[calc(100vh-2rem)]">
					<div>
						{/* close icon  */}
						<svg
							onClick={toggleLoginModal}
							className="text-xl cursor-pointer text-base-200 font-bold absolute top-4 md:top-6 right-4 hover:text-primary transition hover:duration-700 z-10"
							stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"
							height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
						</svg>
						<div className="flex items-center justify-between relative mb-7">
							<span
								onClick={() => {
									setActive(0);
								}}
								className={`${active === 0 ? "text-primary border-primary" : "text-base-200 border-neutral-content"} w-full flex justify-center items-center border-b-2 cursor-pointer py-4 font-medium text-base`}>
								{dictionary?.sign_in?.title}
							</span>
							<span
								onClick={() => {
									setActive(1);
								}}
								className={`${active === 1 ? "text-primary border-primary" : "text-base-200 border-neutral-content"} w-full flex justify-center items-center border-b-2 cursor-pointer py-4 font-medium text-base`}>
								{dictionary?.sign_up?.title}
							</span>
						</div>

						{(active === 0 && <LoginForm dictionary={dictionary} />) ||
							(active === 1 && <SignUpForm dictionary={dictionary} setActive={setActive} />)}
					</div>
				</div>
				<div
					className={`fixed w-full h-full left-0 top-0 z-20 transition-all ease-in-out duration-300 ${loginModal ? "block" : "hidden"
						}`}
					onClick={toggleLoginModal}
				/>
			</div>
		</div>
	)
}
