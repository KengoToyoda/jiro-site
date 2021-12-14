import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { OpenIconDial } from '../Dial/OpenIconDial';
import { QuizAddContent } from './QuizAddContent';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'rgb(242, 242, 242)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const QuizAddModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleAddModalOpen = () => setOpen(true);
  const handleAddModalClose = () => setOpen(false);

  return (
    <div>
        <OpenIconDial handleOpen={handleAddModalOpen}/>
        <Modal
            keepMounted
            open={open}
            onClose={handleAddModalClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
              <QuizAddContent />
            </Box>
        </Modal>
    </div>
  );
}
