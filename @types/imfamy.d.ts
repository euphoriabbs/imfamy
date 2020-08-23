declare function load(library: string): void;
declare function alert(library: string): void;
};

/**
 * Render options
 */
interface RenderOptions {
  text?: string;
  encoding?: string;
  menu?: string;
  speed?: number;
  mode?: string;
  align?: string;
  file?: string;
}
