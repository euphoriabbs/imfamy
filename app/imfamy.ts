load("/euphoria/app/lib.js")

const euphoria = new BBS()

euphoria.renderText({
    path: "imfamy.ans",
    encoding: "CP437",
    mode: "line",
    speed: 50,
    clearScreen: true
})

euphoria.say("\r\n")
euphoria.pause()
