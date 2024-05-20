import ReactGA from "react-ga4";

ReactGA.initialize("G-RCKC26CWB5");
ReactGA.send(window.location.pathname);

function App() {

	return (
		<main className="w-screen">
			<header className="h-14 shadow-md flex items-center pl-5 text-4xl">
				GVAPE
			</header>
			<div className="w-full flex justify-center items-center mt-10">
				<img
					src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19707.png"
					alt="BMW"
					className="w-20 h-20"
				/>
				<span className="text-3xl ml-4"> - <b className="text-sky-500">B</b>yło <b className="text-blue-500">M</b>iło <b className="text-red-500">W</b>ypierdalam</span>
			</div>
		</main>
	);
}

export default App;
