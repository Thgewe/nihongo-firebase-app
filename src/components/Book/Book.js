import React from 'react';
import cl from './book.module.scss';
import KanjiLine from "../KanjiLine/KanjiLine";
import Line from "../Line/Line";

const Book = () => {

    const lineCount = 20;

    // const lines = [];
    // for (let i = 0; i < lineCount; i++) {
    //     lines.push(
    //         <div className={cl.line}>街</div>
    //     )
    // }
    //街の声をぎゅっと光が包み込む
    return (
        <div className={cl.book}>
            <div className={cl.left + ' ' + cl.sheet}>
                {/*<KanjiLine value={'街[ぎゅ]の声[ぎゅ]'}/>*/}
                {/*<KanjiLine value={'街[ぎゅ]の声[ぎゅ]'}/>*/}
                {/*<KanjiLine value={'街[ぎゅ]の声[ぎゅ]'}/>*/}
                <Line
                    value={'ぎの 街[をぎ] の 声[ぎ] をぎ, ゅっと 光[ひかり] が 包込[をぎり] む. ぎの 街[をぎ] の 声[ぎ] をぎ, ゅっと 光[ひかり] が 包込[をぎり] む.'}
                />
                <Line
                    value={'ぎの 街[をぎ] の 声[ぎ] をぎ, ゅっと 光[ひかり] が 包込[をぎり] む. ぎの 街[をぎ] の 声[ぎ] をぎ, ゅっと 光[ひかり] が 包込[をぎり] む. ぎの 街[をぎ] の 声[ぎ] をぎ, ゅっと 光[ひかり] が 包込[をぎり] む. ぎの 街[をぎ] の 声[ぎ] をぎ, ゅっと 光[ひかり] が 包込[をぎり] む.'}
                />
                {/*<div className={cl.kanji}></div>*/}
                {/*{lines}*/}
            </div>
            {/*<div className={cl.border}></div>*/}
            <div className={cl.right + ' ' + cl.sheet}>
                <Line
                    value={'React Hook useEffect has a missing dependency: Either include it or remove the dependency array'}
                    isKanji={false}
                />
                <Line
                    value={'React Hook useEffect has a missing dependency: Either include it or remove the dependency array'}
                    isKanji={false}
                />
                <Line
                    value={'React Hook useEffect has a missing dependency: Either include it or remove the dependency array'}
                    isKanji={false}
                />
            </div>
        </div>
    );
};

export default Book;