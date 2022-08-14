import React from 'react';
import cl from './loader.module.scss';

const Loader = () => {
    return (
        <div className={cl.loader}>
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" style={{
                margin: 'auto',
                background: '#fff',
                display: 'block',
            }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <path d="M20 25L80 25L80 75L20 75Z" fill="#36c2e4" stroke="#1c6e82" strokeWidth="2"></path><path d="M50 25L80 25L80 75L50 75" fill="#36c2e4" stroke="#1c6e82" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1.075268817204301s" repeatCount="indefinite" begin="0s" keyTimes="0;0.5;0.501;1" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"></animate>
                <animate attributeName="opacity" dur="1.075268817204301s" repeatCount="indefinite" begin="0s" keyTimes="0;0.5;0.5001;1" values="1;1;0;0"></animate>
            </path><path d="M50 25L80 25L80 75L50 75" fill="#36c2e4" stroke="#1c6e82" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1.075268817204301s" repeatCount="indefinite" begin="-0.17849462365591398s" keyTimes="0;0.5;0.501;1" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"></animate>
                <animate attributeName="opacity" dur="1.075268817204301s" repeatCount="indefinite" begin="-0.17849462365591398s" keyTimes="0;0.5;0.5001;1" values="1;1;0;0"></animate>
            </path><path d="M50 25L80 25L80 75L50 75" fill="#36c2e4" stroke="#1c6e82" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1.075268817204301s" repeatCount="indefinite" begin="-0.3548387096774194s" keyTimes="0;0.5;0.501;1" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"></animate>
                <animate attributeName="opacity" dur="1.075268817204301s" repeatCount="indefinite" begin="-0.3548387096774194s" keyTimes="0;0.5;0.5001;1" values="1;1;0;0"></animate>
            </path><path d="M50 25L80 25L80 75L50 75" fill="#36c2e4" stroke="#1c6e82" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1.075268817204301s" repeatCount="indefinite" begin="-0.3548387096774194s" keyTimes="0;0.499;0.5;1" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"></animate>
                <animate attributeName="opacity" dur="1.075268817204301s" repeatCount="indefinite" begin="-0.3548387096774194s" keyTimes="0;0.4999;0.5;1" values="0;0;1;1"></animate>
            </path><path d="M50 25L80 25L80 75L50 75" fill="#36c2e4" stroke="#1c6e82" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1.075268817204301s" repeatCount="indefinite" begin="-0.17849462365591398s" keyTimes="0;0.499;0.5;1" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"></animate>
                <animate attributeName="opacity" dur="1.075268817204301s" repeatCount="indefinite" begin="-0.17849462365591398s" keyTimes="0;0.4999;0.5;1" values="0;0;1;1"></animate>
            </path><path d="M50 25L80 25L80 75L50 75" fill="#36c2e4" stroke="#1c6e82" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1.075268817204301s" repeatCount="indefinite" begin="0s" keyTimes="0;0.499;0.5;1" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"></animate>
                <animate attributeName="opacity" dur="1.075268817204301s" repeatCount="indefinite" begin="0s" keyTimes="0;0.4999;0.5;1" values="0;0;1;1"></animate>
            </path>
            </svg>
        </div>
    );
};

export default Loader;