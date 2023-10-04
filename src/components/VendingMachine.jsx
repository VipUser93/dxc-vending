import React from "react";
import Products from "./products/Products";
import Terminal from "./terminal/Terminal";

const VendingMachine = (props) => {
    return (
        <div className="vending-machine">
          <div className="vm-products">
            <Products />
          </div>
          <div className="vm-terminal">
            <Terminal />
          </div>
        </div>
    )
}

export default VendingMachine;