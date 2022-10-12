import type { NextPage } from 'next'
import Head from 'next/head'
import {Box, ThemeProvider, CssBaseline, styled, Button} from '@mui/material'
import { useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../theming/theme'
import SettingsMenu from '../components/SettingsMenu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import SubjectPill from '../components/SubjectPill'
import useStore from '../state/Global'
import styles from '../styles/Home.module.css'
import pickStyles from '../styles/Pick.module.css'
//backend
import { createClient} from '@supabase/supabase-js'
import type {definitions} from '../backend/generated-types'


const Pick: NextPage = () => {
  const store = useStore(); 
  const [isLight, setIsLight] = useState(false);
  const [subjectList, setSubjectList] = useState<definitions["Subject"][]>([]);
  //backend
  const supabase = createClient(String(process.env.NEXT_PUBLIC_SUPABASE_URL), String(process.env.NEXT_PUBLIC_ANON));

  //run on store.isLight update
  useEffect(() => {
    setIsLight(store.isLight);
  }, [store.isLight]);

  //run once on component load
  useEffect(() => {
    getSubjectList()
  }, []);

  useEffect(() => {
    console.log(subjectList);
  }, [subjectList])

  async function getSubjectList(){
     const y = await supabase.from('Subject').select('*')
     if(y.data) //if y is not null
       setSubjectList(y.data);
  }

  return(
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <CssBaseline/>
      <div className={styles.container}>
        <Head>
          <title>JobRec</title>
          <meta name="JobRec" content="JobRec will help suggest you modern and up to date jobs based on your favourite subjects" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <main className={styles.main}>
          <SettingsMenu/>
          <h1 className={styles.title}>Pick your favourites</h1>
          <p className={styles.description}>
            Pick your favourite subjects from the list below. <br/>Try to pick somewhere between 3-6 subjects.
          </p>

          {/* subject list */}
            <div className={pickStyles.subjectlist_container}>
            {subjectList.map(function(subject, i){
              return(
                <Box key={i} sx={{margin: 0.5}}>
                  <SubjectPill subject={subject.name} isLight={isLight}/>
                </Box>
              );
            })}
            </div>
          {/* end subject list */}
          <p style={{alignSelf: 'end'}}><span style={{marginRight: '0.5rem'}}>Continue once your ready</span><CustomButton href="/results" variant='contained'><ChevronRightIcon/></CustomButton></p>
        </main>
      </div>
    </ThemeProvider>
  )
}

const CustomButton = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  alignSelf: 'end',
  marginRight: '2rem'
}));

export default Pick;
