import React, {useEffect, useRef} from "react";
import Prompt from "./Prompt";
import UseOnEnter from "./UseOnEnter";
import MapConsoleOutput from "./MapConsoleOutput";
import './console.css';


const Console = () => {

    const inputText = useRef();
    const [consoleOutput, onEnter] = UseOnEnter();

    useEffect(() => {
        inputText.current.value = "";
        inputText.current.focus();
    });

    return (
    <div className="console">
        <div className="output-console">
        <MapConsoleOutput consoleOutput={consoleOutput} />
        </div>
        <div className="input-prompt">
            <Prompt />
            <input
                type="text"
                ref={inputText}
                onKeyPress={({ target: { value }, key }) => onEnter(value, key)}
            />
        </div>
    </div>
    );
};


export default Console;