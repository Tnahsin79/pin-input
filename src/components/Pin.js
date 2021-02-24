import React, { useState } from "react";
import PinInput from "react-pin-input";

const Pin = () => {
    const [value, setValue] = useState("");
    const [pin, setPin] = useState("");
    const onChange = (value) => {
        setValue(value);
    }
    const onClear = () => {
        setValue("");
        pin.clear();
    }
    return (
        <div className="app">
            <PinInput
                length={3}
                focus
                // disabled
                secret
                ref={p => (setPin(p))}
                type="numeric"
                onChange={onChange}
            />
            <h3>{value}</h3>
            <button onClick={onClear}>Clear</button>
        </div>
    );
}
export default Pin;