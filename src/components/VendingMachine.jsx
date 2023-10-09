import React from "react";
import Products from "./products/Products";
import Terminal from "./terminal/Terminal";

const VendingMachine = (props) => {
    return (
        <div className="vending-machine">
          <div className="products-wrap">
            <Products />
          </div>
          <div className="terminal-wrap">
            <Terminal />
          </div>
        </div>
    )
}

export default VendingMachine;