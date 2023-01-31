import { Taste } from "app/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
	cartItems: Taste[]
	handleCartDelete: (cartItem: Taste) => void
}

const CartDropdownBody = ({ cartItems, handleCartDelete }: Props) =>
	<div className="flex flex-col bg-white rounded shadow-md p-3 w-52 gap-3">
		{
			cartItems.map(cartItem =>
				<div className="flex justify-between">
					<div className="flex gap-2">
						<img src={ cartItem.imageURL } alt={ cartItem.name } className="w-5"/>
						<span>{ cartItem.name }</span>
					</div>
					<FontAwesomeIcon
						icon={ faXmark }
						color="red"
						className="cursor-pointer"
						onClick={ () => handleCartDelete(cartItem) }
					/>
				</div>
			)
		}
	</div>

export default CartDropdownBody;