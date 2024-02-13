import { useState } from "react"

export default function Popup() {
    const [buttonLabel, setButtonLabel] = useState<string>("Start Timer")

    const buttonClicked = () => {
        chrome.storage.local.get(["isRunning"], (result) => {
            chrome.storage.local.set({ isRunning: !result.isRunning }, (_result) => {
                if (result.isRunning) {
                    setButtonLabel("Start Timer")
                } else {
                    setButtonLabel("Pause Timer")
                }
            })
        })
    }

    return (
        <>
            <img src="icon/icon128.png" />
            <h1>00:00</h1>
            <button onClick={buttonClicked}>{buttonLabel}</button>
        </>
    )
}