declare function load(library: string): void
declare function alert(library: string): void

declare function log(level: LOG_INFO | LOG_WARN, value: string): string
declare let console = {
    print: any,
    inactivity_warning: number,
    putmsg: string,
    line_counter: number,
    clear: any
}
