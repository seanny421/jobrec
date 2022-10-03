import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles'
import { Button, TextField } from '@mui/material'
import { orange } from '@mui/material/colors';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    }
  }
}

const theme = createTheme({
  status: {
    danger: orange[500],
  },
})

const Home: NextPage = () => {

  function callBackend(){
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data.name));
  }

  useEffect(() => {
    callBackend();
  }, []);

  return (
  <ThemeProvider theme={theme}>
    <div className={styles.container}>
      <Head>
        <title>JobRec</title>
        <meta name="JobRec" content="JobRec will help suggest you modern and up to date jobs based on your favourite subjects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>JobRec.</h1>
        <p className={styles.description}>
          Get started with your future <Button variant='contained'><ChevronRightIcon/></Button>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  </ThemeProvider>
  )
}

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 100,
  border: 'none',
}));


export default Home
