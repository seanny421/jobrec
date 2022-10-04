import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, ThemeProvider, styled, CssBaseline } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsMenu from '../components/SettingsMenu';
import { darkTheme, lightTheme } from '../theming/theme';
import {useState} from 'react';
import {useSettingsState, useThemeState} from '../state/Global';

const Home: NextPage = () => {
  //state and fields
  const [light, setLight] = useState(false); //between light and dark
  const isLight = useThemeState((state) => state.isLight);
  const toggleSettings = useSettingsState((state) => state.toggle);
  const settingsShown = useSettingsState((state) => state.shown);

  return (
  <ThemeProvider theme={isLight ? lightTheme : darkTheme }>
    <CssBaseline/>
    <div className={styles.container}>
      <Head>
        <title>JobRec</title>
        <meta name="JobRec" content="JobRec will help suggest you modern and up to date jobs based on your favourite subjects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section id='settingsmenu' className={styles.settingsmenu}>
          <SettingsIcon onClick={toggleSettings} style={{cursor: 'pointer', margin: '10px', opacity: settingsShown ? 1.0 : 0.3}}/>
          <SettingsMenu/>
        </section>

        <h1 className={styles.title}>JobRec.</h1>
        <p className={styles.description}>
          {/*Get started with your future <CustomButton onClick={() => setLight((prev) => !prev)} variant='contained'><ChevronRightIcon/></CustomButton>*/}
          <span style={{marginRight: '0.5rem'}}>Get started with your future </span><CustomButton href="/pick" variant='contained'><ChevronRightIcon/></CustomButton>
        </p>
      </main>

    </div>
  </ThemeProvider>
  )
}


const CustomButton = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
}));



export default Home
