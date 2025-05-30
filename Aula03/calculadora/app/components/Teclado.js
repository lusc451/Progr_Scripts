"use-client";

import Botoes from "./Botoes";
import styles from "../page.module.css";

export default function Teclado({ onClickNum, onClickClearAll, onClickClearCurrent, onClickEqual, onClickOperation }) {
    return (
        <div className={styles.teclado}>
            <Botoes valor={"CE"} onClick={() => onClickClearAll()} />
            <Botoes valor={"C"} onClick={() => onClickClearCurrent()} />
            <Botoes valor={"/"} onClick={() => onClickOperation("/")} />
            <Botoes valor={"="} onClick={() => onClickEqual()} />
            <Botoes valor={7} onClick={() => onClickNum('7')} />
            <Botoes valor={8} onClick={() => onClickNum('8')} />
            <Botoes valor={9} onClick={() => onClickNum('9')} />
            <Botoes valor={"X"} onClick={() => onClickOperation("*")} />
            <Botoes valor={4} onClick={() => onClickNum('4')} />
            <Botoes valor={5} onClick={() => onClickNum('5')} />
            <Botoes valor={6} onClick={() => onClickNum('6')} />
            <Botoes valor={"-"} onClick={() => onClickOperation("-")} />
            <Botoes valor={1} onClick={() => onClickNum('1')} />
            <Botoes valor={2} onClick={() => onClickNum('2')} />
            <Botoes valor={3} onClick={() => onClickNum('3')} />
            <Botoes valor={"+"} onClick={() => onClickOperation("+")} />
            <Botoes valor={0} onClick={() => onClickNum('0')} />
        </div>
    )
}