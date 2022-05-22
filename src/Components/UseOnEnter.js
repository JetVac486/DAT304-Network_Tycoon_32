import {useState} from "react";

const commands = {
    help: "this command shows a list of excisting functions \n quit, terminate commandline, \n inventory, command absent,should have listed owned routers instead lists routers availabe in store, router_enable_routernaame normaaly in real life when you connect a router the prompt would change to router enable for the router you are configuring. here this command replaces the physical connection step and is to be run first, router_configure_terminal ",
    quit: "quitting \n ... \n good bye",
    inventory: "router name 1, cables, idk",
    Router_enable_routername1: "router has been enabled and ready for config. with version ..",
    Router_enable_routername2: "router has been enbled and ready for config with version ..",
    Router_configure_terminal:" Normaly you wouldpick hostnme and ip elected router is running, enabled exec mode, you hve succeeded in configuring the router automaticly with default settings the selected router hostname and ip adress is",
    ping: "ping ip adress on router",
    router_show_running_config:"this should print running routers",
    router_startup_config:"starting router and connecting to the external network. congratulations your new router is online", 
    router_show_flash: "this lists the filesystem on the router currently empty",
    iptable: "this should have let you configure firewall rules currently depricated. ",
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