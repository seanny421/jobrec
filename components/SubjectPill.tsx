import {Box} from '@mui/material';
import React, {useState} from 'react';
import {darkTheme, lightTheme} from '../theming/theme';


type Props = {
  subject: string;
  isLight: boolean;
}

const SubjectPill = ({subject, isLight} : Props) => {
  const [clicked, setClicked] = useState(false); 
  return(
  <Box sx={style(isLight, clicked)} onClick={() => setClicked(!clicked)}>
    <div>{subject}</div>
  </Box>
  )

}

const style = (isLight: boolean, clicked: boolean) => ({
  display: 'flex',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  border: (!isLight) ? `2px solid ${darkTheme.palette.primary.main}`: `2px solid  ${lightTheme.palette.primary.main}`,
  borderRadius: 10,
  textAlign: 'center',
  padding: 1,
  width: '100%',
  margin: 1,
  backgroundColor: (clicked) ? ((!isLight) ? `${darkTheme.palette.primary.main}` : `${lightTheme.palette.primary.main}`): (``),
  color: (clicked) ? ((!isLight) ? `black` : 'white'): ``,
});

export default SubjectPill;
