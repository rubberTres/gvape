import { Dropdown } from "antd";
import CartDropdownBody from "app/components/CartDropdownBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { Taste } from "app/types";

type Props = {
	cartItems: Taste[]
	handleCartDelete: (cartItem: Taste) => void
}

const CartDropdown = ({ cartItems, handleCartDelete }: Props) => (
	<Dropdown
		dropdownRender={ () => cartItems.length !== 0 ? <CartDropdownBody cartItems={ cartItems } handleCartDelete={ handleCartDelete }/> : <></> }
		placement="bottomLeft"
	>
		<div className="relative cursor-pointer">
			<FontAwesomeIcon
				icon={ faCartShopping }
				size="2xs"
			/>
			<div className="absolute rounded-full flex items-center justify-center bg-green text-2xs bg-green-500 w-4 h-4 -top-0.5 -right-2 text-white">
				{ cartItems.length }
			</div>
		</div>
	</Dropdown>
)

export default CartDropdown;