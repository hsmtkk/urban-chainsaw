const ALARM_NAME = "pomodoroTimer"

chrome.alarms.create(ALARM_NAME, {
    periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm: chrome.alarms.Alarm) => {
    if (alarm.name === ALARM_NAME) {
        chrome.storage.local.get(["timer", "isRunning"], (result) => {
            if (result.isRunning) {
                const timer = result.timer + 1
                console.log(timer)
                chrome.storage.local.set({ timer })
            }
        })
    }
})

chrome.storage.local.get(["timer", "isRunning"], (result) => {
    chrome.storage.local.set({
        timer: "timer" in result ? result.timer : 0,
        isRunning: "isRunning" in result ? result.isRunning : false,
    })
})