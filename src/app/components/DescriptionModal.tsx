import { Box, Modal, Typography } from "@mui/material";
import { Taste } from "app/types";

type Props = {
	isOpen: boolean
	toggleModalOpen: () => void
	taste: Taste
}

const DescriptionModal = (props: Props) => {

	const {
		isOpen,
		toggleModalOpen,
		taste: {
			description,
			name,
		},
	} = props;


	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	return (
		<Modal
			open={ isOpen }
			onClose={ toggleModalOpen }
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>

			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					{ name }
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{ description }
				</Typography>
			</Box>
		</Modal>
	);
}

export default DescriptionModal;