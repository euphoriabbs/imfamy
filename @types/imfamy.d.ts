/**
 * Render options
 */
interface IRenderOptions {
    path: string
    speed?: number
    encoding?: "CP437" | "UTF8"
    mode?: "line" | "character"
    clearScreen?: boolean
}

/**
 * Ibbsconfig params
 * @param name Means this
 */
interface IBBSConfigParams {
    name: string
    sysop: string
}
