import React, {useEffect, useRef, useState} from 'react';
import cl from './selectProduct.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {collection, getDocs, orderBy, query, addDoc, updateDoc} from "firebase/firestore";
import {auth, db} from "../../firebase";
import {addCollection, renameCollection} from "../../store/firebaseCollectionsReducer";
import {changeActiveCollection} from "../../store/activeCollectionReducer";
import renameSVG from '../../images/svg/edit.svg';
import {onKeyDown} from "../../utils/onKeyDown";

const SelectProduct = () => {


    const [value, setValue] = useState('');
    const select = useRef();
    const inputAddRef = useRef();
    const inputRenameRef = useRef();
    const reduxOptions = useSelector(state => state.firebaseCollections);
    const activeCollection = useSelector(state => state.activeCollection);
    const [input, setInput] = useState({
        disabledAdd: true,
        disabledRename: true,
        inputAddClass: cl.input,
        inputRenameClass: cl.input,
    })
    const dispatch = useDispatch();
    const uid = auth.currentUser.uid;

    // on mount gets docs from firebase then sets them in redux state firebaseCollections
    useEffect(() => {
        const getLines = async () => {
            const querySnapshot = await getDocs(
                query(
                    collection(db, 'users', uid, 'collections'), orderBy('name')
                )
            );
            // if the user does not have any remote collections, then it adds one default
            if (querySnapshot.docs.length === 0) {
                await addDoc(
                    collection(db, 'users', uid, 'collections'), {
                        collection: 'dictionary',
                        name: 'Dictionary',
                    }
                )
                getLines();
            } else {
                querySnapshot.forEach((doc) => {
                    dispatch(addCollection({data: doc.data(), docRef: doc.ref}))
                })
            }
        }
        getLines()
    }, [])

    // sets initial active option for select
    useEffect(() => {
        if (reduxOptions.length !== 0) {
            setValue(reduxOptions[0].collection)
        }
    }, [reduxOptions])

    // sets the active collection after the select value changes
    useEffect(() => {
        if (value === '') return
        dispatch(changeActiveCollection(...reduxOptions.filter((collection) => {
            return collection.collection === value
        })))
    }, [value])

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    const optionsJSX = reduxOptions.map((option) =>
        <option value={option.collection} key={option.collection}>{option.name}</option>
    )

    // opens the adding input and closes the modifying one
    const changeInputOnAdd = () => {
        setInput({
            disabledRename: true,
            inputRenameClass: cl.input,
            disabledAdd: !input.disabledAdd,
            inputAddClass: input.inputAddClass.includes(cl.inputActive)
                ? cl.input
                : cl.input + ' ' + cl.inputActive
        })
    }
    // opens the changing input and closes the adding one
    const changeInputOnRename = () => {
        setInput({
            disabledAdd: true,
            inputAddClass: cl.input,
            disabledRename: !input.disabledRename,
            inputRenameClass: input.inputRenameClass.includes(cl.inputActive)
                ? cl.input
                : cl.input + ' ' + cl.inputActive
        })
    }

    const onClickAdd = () => {
        changeInputOnAdd();
    }
    const onClickRename = async () => {
        changeInputOnRename();
    }

    const onSubmitAdd = async () => {
        // checks if the input is empty
        if (inputAddRef.current.value === '') {

        } else {
            // checks if the collection already exists and, if so, prevents the addition
            for (let i = 0; i < reduxOptions.length; i++) {
                if (reduxOptions[i].collection === inputAddRef.current.value) {
                    alert('Already have')
                    return
                }
            }
            // adds a new collection to firebase
            // in order to get a reference to a document in firebase
            await addDoc(
                collection(db, 'users', uid, 'collections'), {
                    collection: inputAddRef.current.value,
                    name: inputAddRef.current.value,
                }
            );
            // gets the collection just added and adds it to the collections array
            const docs = await getDocs(collection(db, 'users', uid, 'collections'))
            const newCollection = {data: {}, docRef: ''};
            docs.forEach((doc) => {
                if (doc.data().collection === inputAddRef.current.value) {
                    newCollection.data.collection = inputAddRef.current.value;
                    newCollection.data.name = inputAddRef.current.value;
                    newCollection.docRef = doc.ref;
                }
            })
            dispatch(addCollection(newCollection))

            // closes input
            setInput({
                ...input,
                inputAddClass: cl.input,
                disabledAdd: true,
            })
        }
    }

    const onSubmitRename = async () => {
        if (inputRenameRef.current.value === '') {

        } else {
            // renames the active collection
            dispatch(renameCollection({
                collection: activeCollection.collection,
                name: inputRenameRef.current.value,
                docRef: activeCollection.docRef,
            }))
            // renames the remote collection
            await updateDoc(activeCollection.docRef, {
                collection: activeCollection.collection,
                name: inputRenameRef.current.value
            })
            // closes input
            setInput({
                ...input,
                inputRenameClass: cl.input,
                disabledRename: true,
            })
        }
    }

    return (
        <div className={cl.wholeBlock}>
            <div className={cl.container}>
                <select className={cl.select} ref={select} onChange={onChangeValue} value={value}>
                    {optionsJSX}
                </select>
                <span className={cl.arrow}></span>
            </div>
            <div className={cl.add}>
                <button className={cl.button} onClick={onClickAdd}><span></span><span></span></button>
                <input
                    type="text"
                    className={input.inputAddClass}
                    disabled={input.disabledAdd}
                    ref={inputAddRef}
                    onBlur={changeInputOnAdd}
                    onKeyDown={e => onKeyDown(e, 13, onSubmitAdd)}
                />
            </div>
            <div className={cl.add + ' ' + cl.rename}>
                <button className={cl.button} onClick={onClickRename}><img src={renameSVG} alt=""/></button>
                <input
                    type="text"
                    className={input.inputRenameClass}
                    disabled={input.disabledRename}
                    ref={inputRenameRef}
                    onBlur={changeInputOnRename}
                    onKeyDown={e => onKeyDown(e, 13, onSubmitRename)}
                />
            </div>
        </div>
    );
};

export default SelectProduct;