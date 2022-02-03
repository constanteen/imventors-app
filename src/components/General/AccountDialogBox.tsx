import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";

export default function AccountDialogBox(): ReactElement {
	const [accountDialogBox, setaccountDialogBox] = useState(false);

  useEffect(() => {
    const closeDialogBox = () => {
      if (!accountDialogBox) return; 
      setaccountDialogBox(false);
    }
    
    window.addEventListener('click', closeDialogBox)
    
    return () => {
      window.removeEventListener('click', closeDialogBox)
    }
  }, [accountDialogBox])

	return (
		<div className="relative z-40">
			<button onClick={() => setaccountDialogBox(!accountDialogBox)} className="text-primary border-primary border-2 rounded-xl py-1 px-3 text-sm flex items-center">
				Account
				<i className="bx bx-chevron-down text-primary ml-2" />
			</button>
			<div
				className={`${accountDialogBox ? 'block' : 'hidden'} origin-top-right absolute right-0  mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabIndex={-1}
			>
				<div className="py-3" role="none">
					<Link href="/auth/login">
						<a
							className="px-4 py-2 flex items-center text-primary hover:bg-blue-400 hover:text-white"
							role="menuitem"
							tabIndex={-1}
							id="menu-item-0"
						>
							<i className="bx bx-log-in-circle" />
							&nbsp; Login
						</a>
					</Link>
					<Link href="/auth/inventor-registration">
						<a
							className="px-4 py-2 flex items-center text-primary hover:bg-blue-400 hover:text-white"
							role="menuitem"
							tabIndex={-1}
							id="menu-item-0"
						>
							<i className="bx bx-user" />
							&nbsp; Register As Inventor
						</a>
					</Link>
					<Link href="/auth/investor-registration">
						<a
							className="px-4 py-2 flex items-center text-primary hover:bg-blue-400 hover:text-white"
							role="menuitem"
							tabIndex={-1}
							id="menu-item-0"
						>
							<i className="bx bx-user-pin" />
							&nbsp; Register As Investor
						</a>
					</Link>
					<Link href="/auth/investor-registration">
						<a
							className="px-4 py-2 flex items-center text-primary hover:bg-blue-400 hover:text-white"
							role="menuitem"
							tabIndex={-1}
							id="menu-item-0"
						>
							<i className="bx bxs-grid" />
							&nbsp; Go to Dashboard
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
