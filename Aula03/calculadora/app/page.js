"use client"
import { useState } from "react";
import Display from "./components/Display";
import Teclado from "./components/Teclado";
import styles from "./page.module.css";

export default function Home() {
    //States
    const [currentValue, setCurrentValue] = useState('0')
    const [previousValue, setPreviousValue] = useState('0')
    const [isNewValue, setIsNewValue] = useState(true)
    const [operator, setOperator] = useState('')

    //Funções
    const handleButtonNumber = (num) => {
        setCurrentValue((prev) => (isNewValue || prev === '0' ? num : prev + num))
        setIsNewValue(false)
    }

    const handleButtonOperation = (operation) => {
        setPreviousValue(currentValue)
        setCurrentValue('0')
        setOperator(operation)
        setIsNewValue(true)
    }


    const handleEquals = () => {
        if (!operator || !previousValue) return

        const a = parseFloat(previousValue)
        const b = parseFloat(currentValue)
        let result = 0

        switch (operator) {
            case '+':
                result = a + b
                break
            case '-':
                result = a - b
                break
            case '*':
                result = a * b
                break
            case '/':
                result = b !== 0 ? a / b : NaN
                break
        }

        setCurrentValue(String(result))
        setPreviousValue(null)
        setOperator(null)
        setIsNewValue(true)
    }

    const handleClear = () => {
        setCurrentValue('0')
        setPreviousValue(null)
        setOperator(null)
        setIsNewValue(false)
    }

    const handleClearCurrent = () => {
        setCurrentValue('0')
        setIsNewValue(true)
    }

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Calculadora</h1>
            <div>
                <Display valorDisplay={currentValue} valorDisplayPrev={previousValue + operator} />
                <Teclado
                    onClickNum={handleButtonNumber}
                    onClickClearAll={handleClear}
                    onClickClearCurrent={handleClearCurrent}
                    onClickEqual={handleEquals}
                    onClickOperation={handleButtonOperation}
                />
            </div>
        </div>
    );
}