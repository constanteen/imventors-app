type loginToast = {
	show: boolean,
}

export default function LoginSuccessfulToast({show}: loginToast) {
	return (
		<div className={`${show ? "absoluteCenter block shadow-xl" : "hidden"}`}>
			<div className="flex space-x-2 justify-center">
				<div
					className="bg-white shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block"
					id="static-example"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
					data-mdb-autohide="false"
				>
					<div className="bg-white flex justify-between items-center text-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
						<p className="font-bold text-gray-500">Login Successful</p>
						<div className="flex items-center">
							<button
								type="button"
								className=" btn-close box-content w-4 h-4 ml-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
								data-mdb-dismiss="toast"
								aria-label="Close"
							></button>
						</div>
					</div>
					<div className="p-6 py-8 bg-white rounded-b-lg break-words text-gray-700 flex items-center justify-center">
						<p>Redirecting you to your dashboard</p>
					</div>
				</div>
			</div>
		</div>
	);
}
