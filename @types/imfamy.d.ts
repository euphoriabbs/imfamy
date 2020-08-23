declare function load(library: string): void;
declare function alert(library: string): void;
declare let console = {
  print: any,
  inactivity_warning: number,
  putmsg: string,
  line_counter: number,
  clear: any,
};
/**
 * Render options
 */
interface IRenderOptions {
  path: string;
  speed?: number;
  encoding?: "CP437" | "UTF8";
  mode?: "line" | "character";
  clearScreen?: boolean;
}
