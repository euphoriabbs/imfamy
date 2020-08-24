load("/euphoria/app/lib.js")

const euphoria = new BBS()

euphoria.renderText({
    file: "imfamy.ans",
    clearScreenBefore: true
})

let response = euphoria.ask("Enter your username")
if (response) {
    euphoria.say(`\n\rHey ${response} thanks for signing in, let's move on to the next menu...`)
    euphoria.say(`\n\rWelcome to the ${euphoria.name} system.`)
}
