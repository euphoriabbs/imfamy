load("sbbsdefs.js")

/**
 * BBS
 * A whole bunch of functions
 */
class BBS {
    // public config: IBBSConfigParams

    public name: string

    constructor() {
        console.inactivity_warning = 9999999
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
                            this.say(character)
                            this.sleep(speed)
                        })
                    }

                    // For line-at-a-time rendering...
                    case "line": {
                        this.say(text[i])
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
