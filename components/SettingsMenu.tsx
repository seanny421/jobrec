import type { NextPage } from "next"
import { useSettingsState, useThemeState } from '../state/Global';
import { Box, Switch, Modal, FormControlLabel } from '@mui/material/';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'background.paper',
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
}


const SettingsMenu: React.FunctionComponent = () => {
  const shown = useSettingsState((state) => state.shown);
  const toggle = useSettingsState((state) => state.toggle);
  const isLight = useThemeState((state) => state.isLight);
  const toggleTheme = useThemeState((state) => state.toggle);
  const handleClose = () => toggle();

  return(
    <Modal onClose={handleClose} open={shown}>
      <Box sx={style}>
        <FormControlLabel style={{marginLeft:'auto', marginRight:'auto'}} label='Dark mode' control={<Switch defaultChecked={!isLight} onChange={toggleTheme}/>}/>
      </Box>
    </Modal>
  )
}

export default SettingsMenu;

