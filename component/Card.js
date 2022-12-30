import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { RiCheckboxCircleFill } from 'react-icons/ri'
export default function Card({ playOn, playOff, f, files, setselectedId, selectedId }) {
    const [isSelect, setisSelect] = useState(false);
    // function handleSelect(e) {
    // }
    // function reduceSelect(e) {
    //     console.log("remove id")
    // }
    useEffect(() => {
        if (selectedId.length === 0) {
            setisSelect(false)
        }
        if (selectedId.length === files.length) {
            setisSelect(true)
        }
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
        <li onClick={(e) => {
            if (selectedId.length >= 1 && !isSelect) {
                check()
            } else if (isSelect) {
                unCheck()
            }
        }} className={styles.cardContainer}>
            <div style={isSelect ? { backgroundColor: 'rgb(26 114 230)' } : {}} className={styles.card} >
                <div style={{ border: '0 solid red' }} className={styles.cardLeft}>
                    <div className={styles.photo}>file {f.id}</div>
                    <div className={styles.fileInfo}>
                        <div className={styles.fileName}>{f.filename} {f.filename} {f.filename} {f.filename} {f.filename} {f.filename} {f.filename}{f.filename}{f.filename} {f.filename}</div>
                        <div className={styles.fileSize}>{f.size} , <span>3 days ago</span></div>
                    </div>
                </div>
                {(isSelect && selectedId.length !== 0) ?
                    <RiCheckboxCircleFill className={styles.checkbox} /> :
                    <RiCheckboxBlankCircleLine className={styles.checkbox} onClick={() => { if (selectedId.length === 0) { check() } }} />}
            </div>
        </li>
    );
}