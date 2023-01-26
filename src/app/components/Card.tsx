import { Taste } from "app/types";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type Props = {
	taste: Taste
	selectedCardId: string | null
	setSelectedCardId: Dispatch<SetStateAction<string | null>>
}

function Card(props: Props) {

	const {
		taste: {
			id,
			name,
			imageURL,
			description,
		},
		selectedCardId,
		setSelectedCardId,
	} = props;

	return (
		<>
			<div
				onClick={ () => setSelectedCardId(id) }
				className="shadow-md w-52 h-80 p-3 relative overflow-hidden cursor-pointer"
			>
				<span className="text-4xl font-light">{ name }</span>
				<img src={ imageURL } alt="" className="card__image"/>
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