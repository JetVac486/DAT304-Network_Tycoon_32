import {useState} from "react";

const commands = {
    help: "help entry",
    quit: "Good bye"
};

const UseOnEnter = () => {
    const [consoleOutput, updateConsoleOutput] = useState([]);

    const onEnter = (value, key) => {
        if (key === "Enter") {
            const newConsoleLine = commands[value] || "Invalid Command";
            return updateConsoleOutput(consoleOutput =>consoleOutput.concat(newConsoleLine));
        }
    };

    return [consoleOutput, onEnter];
};

export default UseOnEnter;