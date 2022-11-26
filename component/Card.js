import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { RiCheckboxCircleFill } from 'react-icons/ri'
export default function Card({playOn,playOff, f, files, setselectedId, selectedId }) {
    const [isSelect, setisSelect] = useState(false);

    function handleSelect(e) {
        // setisSelect(true)
        // setselectedId([...selectedId, f.id])  
        // setselectedId('1')
        // console.log([f.id])
        // if(selectedId.includes(f.id)){
        //   setisSelect(true)
        // }

        // if(selectedId.includes(f.id)){
        //   console.log(selectedId)
        // }

        // setisSelect( prev => !prev);
        // setisSelect(true)
        // setselectedId([...selectedId,f.id])  
        // const fil = selectedId.filter(id => {
        //   if(id === f.id){
        //     return id
        //   }
        // })
        // if (selectedId.includes(f.id)){
        //   setisSelect(true)
        // }else{
        //   setselectedId([...selectedId, f.id])
        //   setisSelect(false)
        //   // setselectedId(selectedId.filter(id => id !== f.id))

        // }



        // setselectedId([...selectedId, f.id])  

        // console.log(Array.isArray(selectedId))
    }
    function reduceSelect(e) {
        console.log("remove id")
        // setselectedId(selectedId.filter( id => id !== f.id))
        // setisSelect(false)
        // console.log(e.target)
    }
    useEffect(() => {
        if (selectedId.length === 0) {
            setisSelect(false)
            // setisChecked(false)
            // setisChecked(prev => !prev)
        }
        if (selectedId.length === files.length) {
            setisSelect(true)
            // setisChecked(true)
            // setisChecked(false)
            // setselectedId([todo.id])
        }
        // setisChecked(false)
        // else if(selectedId.length){
        //   setisSelect(true) 
        // }
        // console.log(todo.id)
    }, [selectedId]);
    function check() {
        setisSelect(prev => !prev);
        setselectedId([...selectedId, f.id])
        playOn()
    }
    function unCheck() {
        setisSelect(prev => !prev);
        setselectedId(selectedId.filter(id => id !== f.id))
        playOff()
    }
    return (
        <div onClick={(e) => {
            if (selectedId.length >= 1 && !isSelect) {
                check()
            } else if (isSelect) {
                unCheck()
            }
        }} className={styles.cardContainer}>
            <li  style={isSelect ? { backgroundColor: 'rgb(26 114 230)' } : {}} className={styles.card} >
                <div style={{ border: '0 solid red' }} className={styles.cardLeft}>
                    <div className={styles.photo}>file {f.id}</div>
                    <div className={styles.fileInfo}>
                        <div>File: file {f.filename}</div>
                        <div>Size: {f.size}</div>
                    </div>
                </div>
                {/* <input checked={isSelect}  style={{ scale: '1.5'}} onChange={(e)=>{if(e.target.checked === true){
            handleSelect(e)
          }else{
            reduceSelect(e)
            setisSelect(false)
          }
          
          }} type="checkbox" value={f.id} /> */}
                {(isSelect && selectedId.length !== 0) ?
                    <RiCheckboxCircleFill className={styles.checkbox}  /> :
                    <RiCheckboxBlankCircleLine className={styles.checkbox} onClick={() => {if (selectedId.length === 0){check()}}} />}
            </li>
        </div>
    );
}