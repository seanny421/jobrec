import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, ThemeProvider, styled, CssBaseline } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsMenu from '../components/SettingsMenu';
import { darkTheme, lightTheme } from '../theming/theme';
import {useEffect, useState} from 'react';
import useStore from '../state/Global';

const Home: NextPage = () => {
  //state and fields
  const store = useStore();
  const [isLight, setIsLight] = useState(false);

  //run on update of store.isLight
  useEffect(() => {
   setIsLight(store.isLight);
  }, [store.isLight])

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
        <SettingsMenu/>
        <h1 className={styles.title}>JobRec.</h1>
        <p className={styles.description}>
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
