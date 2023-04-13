import { Taste } from "app/types";
import { Dispatch, SetStateAction, useState } from "react";
import DescriptionModal from "app/components/DescriptionModal";

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
			count,
		},
		selectedCardId,
		setSelectedCardId,
	} = props;

	const taste = props.taste;

	const [ isDescriptionModalOpen, toggleDescriptionModalOpen ] = useState(false);

	return (
		<>
			<DescriptionModal
				isOpen={ isDescriptionModalOpen }
				toggleModalOpen={ () => toggleDescriptionModalOpen(isOpen => !isOpen) }
				taste={ taste }
			/>
			<div
				onClick={ () => setSelectedCardId(id) }
				className="shadow-md w-52 h-80 p-3 relative overflow-hidden flex flex-col justify-between"
			>
				<img src={ imageURL } alt="" className="card__image"/>
				<div className="flex flex-col">
					<span className="text-4xl font-light">{ name }</span>
					<span>
						{
							count !== undefined ?
								`Ilość: ${ count }`
								:
								<span className="flex gap-1 items-end">
									<span>Ilość:</span>
									<span className="text-sm mb-0.5">Brak danych</span>
								</span>
						}
					</span>
				</div>
				<div
					className="underline ml-auto cursor-pointer"
					onClick={ () => toggleDescriptionModalOpen(true) }
				>
					Opis
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