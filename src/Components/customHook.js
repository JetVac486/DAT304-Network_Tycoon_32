import React, { useEffect, useState } from 'react'


const useCustomHook = () => {
    var moneys = 145;
    const [money, setMoney] = useState(moneys);
    return { money, setMoney };  //curly brackets? ikke []?

};


export default useCustomHook;