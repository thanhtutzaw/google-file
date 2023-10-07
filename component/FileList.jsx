import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
export default function FileList({
  playOn,
  playOff,
  f,
  files,
  setselectedId,
  selectedId,
}) {
  const [isSelect, setisSelect] = useState(false);
  const [longtext, setLongtext] = useState(false);
  // function handleSelect(e) {
  // }
  // function reduceSelect(e) {
  //     console.log("remove id")
  // }
  useEffect(() => {
    if (selectedId.length === 0) {
      setisSelect(false);
    }
    if (selectedId.length === files.length) {
      setisSelect(true);
    }
  }, [selectedId]);
  function select() {
    setisSelect((prev) => !prev);
    setselectedId([...selectedId, f.id]);
    playOn();
  }
  function deSelect() {
    setisSelect((prev) => !prev);
    setselectedId(selectedId.filter((id) => id !== f.id));
    playOff();
  }
  return (
    <li
      onClick={(e) => {
        if (selectedId.length >= 1 && !isSelect) {
          select();
        } else if (isSelect) {
          // } else if (isSelect && !longtext) {
          deSelect();
        }
      }}
      className={styles.cardContainer}
    >
      <div
        style={isSelect ? { backgroundColor: "rgb(26 114 230)" } : {}}
        className={styles.card}
      >
        <div style={{ border: "0 solid red" }} className={styles.cardLeft}>
          <div className={styles.photo}>file {f.id}</div>
          <div className={styles.fileInfo}>
            <div
              onClick={(e) => {
                if(selectedId < 1){
                setLongtext((prev) => !prev);

                }
              }}
              className={`${longtext ? styles.longtext : styles.fileName}`}
            >
              {f.filename}
            </div>
            <div className={styles.fileSize}>
              {f.size} , <span>3 days ago</span>
            </div>
          </div>
        </div>
        {isSelect && selectedId.length !== 0 ? (
          <RiCheckboxCircleFill className={styles.checkbox} />
        ) : (
          <RiCheckboxBlankCircleLine
            className={styles.checkbox}
            onClick={() => {
              if (selectedId.length === 0) {
                select();
              }
            }}
          />
        )}
      </div>
    </li>
  );
}
