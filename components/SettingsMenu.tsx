import type { NextPage } from "next"
import { useSettingsState, useThemeState } from '../state/Global';
import { Box, Switch, Modal, FormControlLabel } from '@mui/material/';
import { darkTheme, lightTheme } from "../theming/theme";
import {dark} from "@mui/material/styles/createPalette";

const style = (isLight: boolean) => ({
  position: 'absolute' as 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: (!isLight) ? `2px solid ${darkTheme.palette.primary.main}`: `2px solid  ${lightTheme.palette.primary.main}`,
  borderRadius: 5,
  boxShadow: (!isLight) ? `0px 15px 17px -9px ${darkTheme.palette.primary.main},0px 5px 20px 0px rgba(238,228,233,0.2)`: `0px 13px 17px -9px ${lightTheme.palette.primary.main},0px 5px 25px 9px rgba(238,228,233,0.2)`,
  p: 4,
});

const SettingsMenu: React.FunctionComponent = () => {
  const shown = useSettingsState((state) => state.shown);
  const toggle = useSettingsState((state) => state.toggle);
  const isLight = useThemeState((state) => state.isLight);
  const toggleTheme = useThemeState((state) => state.toggle);
  const handleClose = () => toggle();

  return(
    <Modal onClose={handleClose} open={shown}>
      <Box sx={style(isLight)}>
        <FormControlLabel style={{marginLeft:'auto', marginRight:'auto'}} label='Dark mode' control={<Switch defaultChecked={!isLight} onChange={toggleTheme}/>}/>
      </Box>
    </Modal>
  )
}


export default SettingsMenu;

