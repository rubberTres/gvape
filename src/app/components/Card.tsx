import { Taste } from "app/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
	taste: Taste
	selectedCardId: string | null
	handleCartAdd: (taste: Taste) => void
	isAddedToCart: boolean
	// setSelectedCardId: Dispatch<SetStateAction<string | null>>
}

function Card(props: Props) {

	const {
		taste,
		selectedCardId,
		handleCartAdd,
		isAddedToCart,
		// setSelectedCardId,
	} = props;

	return (
		<>
			<div
				// onClick={ () => setSelectedCardId(id) }
				className="shadow-md w-52 h-80 p-3 relative overflow-hidden"
			>
				<img src={ taste.imageURL } alt={ taste.name } className="card__image"/>

				<div className="flex justify-between ">
					<span className="text-2xl font-medium font-light">{ taste.name }</span>
					<FontAwesomeIcon
						icon={ isAddedToCart ? faXmark : faCartPlus }
						size={ isAddedToCart ? "xl" : "lg" }
						color={ isAddedToCart ? "red" : "" }
						className="mt-1 cursor-pointer"
						onClick={ () => handleCartAdd(taste) }
					/>
				</div>
			</div>
			{/*<motion.div*/}
			{/*	layoutId={ id }*/}
			{/*	onClick={ () => setSelectedCardId(id) }*/}
			{/*	className="shadow-md w-52 h-80 p-3 relative overflow-hidden cursor-pointer"*/}
			{/*>*/}
			{/*	<motion.span className="text-4xl font-light">{ name }</motion.span>*/}
			{/*	<motion.img src={ imageURL } alt="" className=""/>*/}
			{/*</motion.div>*/}
			{/*<AnimatePresence>*/}
			{/*	{*/}
			{/*		selectedCardId*/}
			{/*			&&*/}
			{/*			<motion.div layoutId={ id }>*/}
			{/*				<motion.span className="text-4xl font-light">{ name }</motion.span>*/}
			{/*				<motion.img src={ imageURL } alt="" className=""/>*/}
            {/*                <motion.button onClick={() => setSelectedCardId(null)} />*/}
			{/*			</motion.div>*/}
			{/*	}*/}
			{/*</AnimatePresence>*/}
		</>
	);
}

export default Card;