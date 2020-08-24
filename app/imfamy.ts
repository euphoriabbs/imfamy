load("/euphoria/app/lib.js")

const euphoria = new BBS()

euphoria.renderText({
    file: "assets/welcome.ans",
    clearScreenBefore: true
})

euphoria.say(
    "Welcome to the new Euphoria BBS. You've connected to a prototype of the new Imfamy engine. It's still a real work in progress."
        .color("bright red")
        .center()
)
let login = euphoria.ask("What's your username?".newline().color("green"))
if (login) {
    switch (login) {
        case "new":
            euphoria.renderText({
                file: "assets/newuser.ans",
                clearScreenBefore: false
            })

            euphoria.ask("What would you like your handle to be?".newline().color("white"))
            break
        default:
            euphoria.say(
                `Hey ${login} thanks for signing in, let's move on to the next menu... Welcome to the ${euphoria.name} system.`
                    .newline()
                    .color("white")
                    .center()
            )

            euphoria.renderText({
                file: "assets/welcome2.ans",
                clearScreenBefore: false
            })

            euphoria.say(
                "Now that we know who you are, let's see if you can input the right password..."
                    .newline()
                    .color("green")
                    .center()
            )

            let password = euphoria.ask("Your password".newline().color("white"))
            if (password) {
                euphoria.say("Nice work entering a good password...".newline().color("white"))
            }

            break
    }
}
