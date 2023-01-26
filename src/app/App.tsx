import Card from "app/components/Card";
import { useEffect, useState } from "react";
import { Taste } from "app/types";
import { db } from "firebase.config";
import { collection, getDocs } from "@firebase/firestore";

function App() {

	const [ tastes, setTastes ] = useState<Taste[]>([]);

	const [ selectedCardId, setSelectedCardId ] = useState<string | null>(null);

	const tastesCollectionRef = collection(db, "tastes");

	const getTastes = async () => {
		const data = await getDocs(tastesCollectionRef);
		const mappedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id })) as unknown as Taste[];
		setTastes(mappedData);
	}

	useEffect(() => {
		getTastes();
	}, []);


	return (
		<main className="w-screen">
			<header className="h-14 shadow-md flex items-center pl-5 text-4xl">
				GVAPE
			</header>
			<div className="grid grid-cols-5 gap-10 place-items-center p-5">
				{ tastes.map(taste => <Card taste={ taste } selectedCardId={ selectedCardId } setSelectedCardId={ setSelectedCardId }/>) }
			</div>
		</main>
	);
}

export default App;
