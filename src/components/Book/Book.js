import React, {useEffect, useState} from 'react';
import cl from './book.module.scss';
import Line from "../Line/Line";
import { collection, addDoc, getDocs, updateDoc, orderBy, query } from "firebase/firestore";
import {auth, db} from '../../firebase';
import Loader from "../Loader/Loader";
import {FIRESTORE_UPDATE_INTERVAL} from "../../utils/constants";
import {useSelector} from "react-redux";

const Book = () => {

    const [loading, setLoading] = useState(true);
    const [lines, setLines] = useState([]);
    const uid = auth.currentUser.uid;
    const activeCollection = useSelector(state => state.activeCollection)

    useEffect(() => {
        // Interval for automatic update of data in firestore
        const interval = setInterval(() => {
            updateFirebase(activeCollection.collection)
        }, FIRESTORE_UPDATE_INTERVAL)

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect( () => {
        setLoading(true)

        // if there are new lines, save them to firebase
        if (lines.length !== 0)
            updateFirebase(activeCollection.prevCollection);
        getLines()

    }, [activeCollection])


    // gets docs from firestore and sets in lines
    const getLines = async () => {
        const firestoreLines = [];
        const querySnapshot = await getDocs(
            query(
                collection(db, 'users', uid, activeCollection.collection),
                orderBy('index')
            )
        );
        querySnapshot.forEach((doc) => {
            firestoreLines.push({...doc.data(), docRef: doc.ref})
        })
        setLoading(false)
        setLines(firestoreLines)
    }

    // event when a line changes
    const changeLine = (text, index, isKanji) => {
        setLines(lines => lines.map(line => {
            if (line.index === index) {
                return {
                    rawNihongo: isKanji ? text : line.rawNihongo,
                    translation: isKanji ? line.translation : text,
                    index: line.index,
                    docRef: line.docRef,
                }
            } else {
                return line
            }
        }))
    }

    // updates data in firestore
    const updateFirebase = (coll) => {
        lines.forEach(async (line) => {
            if (line.docRef !== '') {
                await updateDoc(line.docRef, {
                    rawNihongo: line.rawNihongo,
                    translation: line.translation,
                })
            } else {
                await addDoc(
                    collection(db, 'users', uid, coll), {
                        rawNihongo: line.rawNihongo,
                        translation: line.translation,
                        index: line.index,
                    }
                );
            }
        })
    }

    // JSX lines to display
    const linesJSX = lines.map((line, index) =>
        <div className={cl.lines} key={index}>
            <Line
                value={line.rawNihongo}
                number={line.index}
                changeLine={changeLine}
            />
            <Line
                value={line.translation}
                isKanji={false}
                number={line.index}
                changeLine={changeLine}
            />
        </div>
    )

    // event when a new line is added
    const addLine = async () => {
        setLines(lines => [...lines, {
            rawNihongo: '',
            translation: '',
            index: lines.length + 1,
            docRef: '',
        }])
    }

    const onSave = async () => {
        // updates remote data and retrieves it
        await updateFirebase(activeCollection.collection);
        await getLines();
    }

    if (loading) return <Loader />

    return (
        <div className={cl.book}>
            {linesJSX}
            <div className={cl.buttons}>
                <button onClick={addLine} className={cl.button}>Add line</button>
                <button onClick={onSave} className={cl.button}>Save</button>
            </div>
        </div>
    );
};

export default Book;