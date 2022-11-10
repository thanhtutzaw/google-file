import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import { BiArrowBack } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'

import Card from '../component/Card';


function Selectbar(props) {
  return (
    <>
      <div className={styles.trashNav_count}>
        {
          /* <BiArrowBack className={styles.backBtn} /> */
        }
        <IoMdClose onClick={(e)=>{props.setselectedId([])}} className={styles.backBtn} />
        <div>
          <p>{props.length} selected</p>
          <p>2 GB</p>
        </div>
      </div>
      <button className={styles.deleteBtn}>Delete</button>
    </>
  );
}



function Backbar(props) {
  return (<div className={styles.trashNav_count}>
    {
      /* <BiArrowBack className={styles.backBtn} /> */
    }
    <BiArrowBack className={styles.backBtn} />
    <div>
      <p>Trash</p>
    </div>
  </div>);
}


export default function Home() {
  const files = [
    {
      "id": 1,
      "filename": "name1",
      "size": "20 GB"
    },
    {
      "id": 2,
      "filename": "name2",
      "size": "20 GB"
    },
    {
      "id": 3,
      "filename": "name3",
      "size": "20 GB"
    }
  ];
  const [selectedId, setselectedId] = useState([]);

  useEffect(() => {
    console.log(selectedId)
  }, [selectedId]);
  return (
    <>
      <Head>
        <title>Google File ✨</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.container}>
          <section className={styles.trashNav}>
            {
              selectedId.length >= 1 ?
                <Selectbar length={selectedId.length} setselectedId={setselectedId} />
                :
                <Backbar />
            }
          </section>


          <section className={styles.allSelect}>All Select
            <input style={{ scale: '1.5', Accentcolor: 'green' }} type="checkbox" ></input>
          </section>
          <ul>
            {files.map((f) => (
              <Card files={files} f={f} key={f.id} setselectedId={setselectedId} selectedId={selectedId} />
            ))}
          </ul>
        </div>

      </main>
    </>
  )

  
}