import React from "react";

import Display from "./components/Display";
import CashAcceptor from "./components/CashAcceptor";

const Terminal = (props) => {
    return (
        <div>
            <Display />
            <CashAcceptor />
        </div>
    )
}

export default Terminal;