import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'; 

// export default function Hello(){
const Hello: NextPage = () => {
  useEffect(() => {
    callHello();
    console.log(isTwo(2));
  }, []);

  const callHello = () => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function isTwo(x: number): boolean {
    return x === 2;

  }

  const isThree = (x:number): string => {
    if(x === 3) {
      return 'Yes';
    }
    return 'NO';
  }


  return(
    <div style={{marginLeft: 100}}>
      <h1>yo</h1>
      <h1>{isThree(4)}</h1>
      <h1>{isThree(3)}</h1>
    </div>
  );
}

export default Hello
