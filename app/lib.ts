load("sbbsdefs.js")

/**
 * BBS
 * A whole bunch of functions
 */
class BBS {
    // public config: IBBSConfigParams

    public name: string

    constructor() {
        console.inactivity_warning = 9999
        console.inactivity_hangup = 99999
        this.name = system.name
    }
    /**
     * Renders text
     * @param options
     * @returns nothing, but displays the text to the console.
     */
    renderText(options: IRenderOptions): void {
        let mode = options.mode || "line"
        let encoding = options.encoding || "CP437"
        let speed = options.speed || 30

        if (options.clearScreenBefore === true) {
            console.line_counter = 0
            console.clear()
        }

        if (options.file) {
            // @ts-ignore
            let file = new File(`/euphoria/app/${options.file}`)

            console.line_counter = 0

            // @ts-ignore
            if (!file.open("r")) {
                alert("error opening file: " + options.file)
                return
            }
            // @ts-ignore
            let text = file.readAll()

            for (let i = 0; i < text.length; i++) {
                switch (mode) {
                    // For character-at-a-time rendering...
                    case "character": {
                        text[i].split(" ").forEach((character: any) => {
                            console.putmsg(character)
                            this.sleep(speed)
                        })
                    }

                    // For line-at-a-time rendering...
                    case "line": {
                        console.putmsg(text[i])
                        this.sleep(speed)
                    }
                }
                if (i < text.length - 1) console.putmsg("\r\n")
                console.line_counter = 0
            }

            // @ts-ignore
            file.close()
        }
    }

    /**
     * Says bbs
     * @param text
     */
    say(text: string) {
        // @ts-ignore
        console.print(text)
    }

    pause() {
        // @ts-ignore
        console.pause()
    }

    sleep(speed: number) {
        // @ts-ignore
        sleep(speed)
    }

    /**
     * Ask
     * Displays a prompt (value) and returns a string of user input (ala clent-side JS)
     * @param question
     * @returns response
     */
    ask(question: string): string {
        // @ts-ignore
        return prompt(question)
    }
    /**
     * execScriptPopen
     * @param script
     * @returns Output from script executed as an array of strings
     */
    execScriptPopen(script: string): string[] {
        // @ts-ignore
        return system.popen(`node /euphoria/scripts/${script}.js`)
    }

    /**
     * Execs script
     * @param script
     */
    execScript(script: string): void {
        // @ts-ignore
        system.exec(`node /euphoria/scripts/${script}.js`)
        return
    }
}

interface String {
    /**
     * Color
     * Prepends a newline to the beginning of the text
     * @param color Choose from any capable ANSI escape sequence which defines a color
     * @returns The newly formatted string
     */
    color(
        color:
            | "black"
            | "red"
            | "green"
            | "yellow"
            | "blue"
            | "magenta"
            | "cyan"
            | "white"
            | "bright black"
            | "bright red"
            | "bright green"
            | "bright yellow"
            | "bright blue"
            | "bright magenta"
            | "bright cyan"
            | "bright white"
            | "reset"
    ): string
    gotoxy(x: number, y: number): string
    /**
     * Newline
     * Prepends a newline to the beginning of the text
     * @param count The total number of newlines. Default to 1.
     * @returns The newly formatted string
     */
    newline(count?: number): string
    /**
     * Center
     * Will center the text between the available columns on the screen
     * @returns The newly formatted string
     */
    center(): string
}
String.prototype.color = function(color: string): string {
    switch (color) {
        case "black":
            return "\u001b[30m" + this
        case "bright black":
            return "\u001b[30;1m" + this
        case "red":
            return "\u001b[31m" + this
        case "bright red":
            return "\u001b[31;1m" + this
        case "green":
            return "\u001b[32m" + this
        case "bright green":
            return "\u001b[32;1m" + this
        case "yellow":
            return "\u001b[33m" + this
        case "bright yellow":
            return "\u001b[33;1m" + this
        case "blue":
            return "\u001b[34m" + this
        case "bright blue":
            return "\u001b[34;1m" + this
        case "magenta":
            return "\u001b[35m" + this
        case "bright magenta":
            return "\u001b[35;1m" + this
        case "cyan":
            return "\u001b[36m" + this
        case "bright cyan":
            return "\u001b[36;1m" + this
        case "white":
            return "\u001b[37m" + this
        case "bright white":
            return "\u001b[37;1m" + this
        case "reset":
            return "\u001b[0m" + this

        default:
            return "\u001b[0m" + this
    }
}

String.prototype.gotoxy = function(x: number, y: number): string {
    // @ts-ignore
    console.gotoxy(x, y)
    return ""
}

String.prototype.center = function(): string {
    // @ts-ignore
    console.center(this)
    return ""
}

String.prototype.newline = function(count?: number): string {
    let string = ""
    if (count) {
        for (let i = 0; i <= count; i++) {
            string += "\r\n"
        }
    } else {
        string += "\r\n"
    }
    return string + this
}
