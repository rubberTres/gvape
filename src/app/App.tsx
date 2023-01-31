import Card from "app/components/Card";
import { useEffect, useState } from "react";
import { Taste } from "app/types";
import { db } from "firebase.config";
import { collection, getDocs } from "@firebase/firestore";
import CartDropdown from "app/components/CartDropdown";

function App() {

	const [ tastes, setTastes ] = useState<Taste[]>([]);

	const [ selectedCardId, setSelectedCardId ] = useState<string | null>(null);

	const [ cart, setCart ] = useState<Taste[]>([]);

	const tastesCollectionRef = collection(db, "tastes");

	const getTastes = async () => {
		const data = await getDocs(tastesCollectionRef);
		const mappedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id })) as unknown as Taste[];
		setTastes(mappedData);
	}

	useEffect(() => {
		getTastes();
	}, []);

	const handleCart = (taste: Taste) => {
		if (!!cart.find(cartItem => cartItem.id === taste.id)) {
			setCart(prevState => prevState.filter(cartItem => cartItem.id !== taste.id));
			return;
		}
		setCart(prevState => [ ...prevState, taste ]);
	}

	return (
		<main>
			<header className="h-14 shadow-md flex items-center px-5 text-4xl justify-between">
				<span>GVAPE</span>
				<CartDropdown cartItems={ cart } handleCartDelete={ handleCart }/>
			</header>
			<div className="grid gap-10 place-items-center p-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
				{
					tastes.map(taste =>
						<Card
							key={ taste.id }
							taste={ taste }
							selectedCardId={ selectedCardId }
							handleCartAdd={ handleCart }
							isAddedToCart={ !!cart.find(cartItem => cartItem.id === taste.id) }
							// setSelectedCardId={ setSelectedCardId }
						/>
					)
				}
			</div>
		</main>
	);
}

export default App;
