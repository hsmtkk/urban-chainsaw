import { useState } from "react"

export default function Popup() {
    const [buttonLabel, setButtonLabel] = useState<string>("Start Timer")

    const buttonClicked = () => {
        chrome.storage.local.get(["isRunning"], (result) => {
            chrome.storage.local.set({ isRunning: !result.isRunning }, (_result) => {
                if (result.isRunning) {
                    setButtonLabel("Start")
                } else {
                    setButtonLabel("Pause")
                }
            })
        })
    }

    const resetClicked = () => {
        chrome.storage.local.set({
            timer: 0,
            isRunning: false,
        }, (_result) => {
            setButtonLabel("Start")
        })
    }

    return (
        <>
            <img src="icon/icon128.png" />
            <h1>00:00</h1>
            <button onClick={buttonClicked}>{buttonLabel}</button>
            <button onClick={resetClicked}>Reset</button>
        </>
    )
}