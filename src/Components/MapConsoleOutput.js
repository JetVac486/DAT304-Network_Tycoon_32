import React, {useEffect, useRef} from "react";
import Prompt from "./Prompt";
import './console.css';

const MapConsoleOutput = ({ consoleOutput }) => {
    const scrollRef = useRef();

    useEffect(() => {
        if (scrollRef.current)
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });

    return (
        <div className="console-output" ref={scrollRef}>
            {consoleOutput.map((item, index) => (
                <div key={index}>
                    <Prompt />
                    <span>{item}</span>
                </div>
            ))}
        </div>
    );
};

export default MapConsoleOutput;