import loading from "loading-cli"

const load = loading("Loading")

export const startLoading = (text) => {
    load.text = text;
    load.color = "green";
    load.stream = process.stdout
    load.start()
}

export const stopLoading = () => {
    load.stop()
}