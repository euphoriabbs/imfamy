load("/euphoria/app/lib.js")

const euphoria = new BBS({
    name: "Euphoria BBS",
    sysop: "ispyhumanfly"
})

euphoria.renderText({
    path: "imfamy.ans",
    encoding: "CP437",
    mode: "line",
    speed: 5,
    clearScreen: true
})

let response = euphoria.ask("Enter your username")
if (response) {
    euphoria.say(`\n\rHey ${response} thanks for signing in, let's move on to the next menu...`)
}

euphoria.execScriptPopen("terminal-kit").forEach((line: string) => {
    euphoria.say(line)
})

euphoria.execScript("terminal-kit")
