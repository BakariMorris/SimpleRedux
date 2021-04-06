# Refs:
    With functional components we can use 'UseRef' from 'react
    ex: import React, {useRef} from 'react';

    const toggleBtnRef = useRef(null)
    useEffect(() => {
        toggleBtnRef.current.click();
    }, )
    <button ref={toggleBtnRef}></button>
