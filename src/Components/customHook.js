import React, { useEffect, useState } from 'react'


const useCustomHook = () => {
    var moneys = 145;
    const [money, setMoney] = useState(moneys);
    return { money, setMoney };
};


export default useCustomHook;