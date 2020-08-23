load("sbbsdefs.js")

/**
 * BBS
 * A whole bunch of functions
 */
class BBS {
    constructor() {
        console.inactivity_warning = 30
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

        if (options.clearScreen === true) {
            console.line_counter = 0
            console.clear()
        }

        if (options.path) {
            // @ts-ignore
            let file = new File(`/euphoria/app/${options.path}`)

            console.line_counter = 0

            // @ts-ignore
            if (!file.open("r")) {
                alert("error opening file: " + options.path)
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

    say(word: string) {
        // @ts-ignore
        console.print(word)
    }

    pause() {
        // @ts-ignore
        console.pause()
    }

    sleep(speed: number) {
        // @ts-ignore
        sleep(speed)
    }
}
