/**
 * Iniquity
 */
export class Iniquity {
  public root: string;

  constructor(root: string) {
    this.root = root;
  }

  render(options: RenderOptions) {
    let mode = options.mode || "line";
    let encoding = options.encoding || "CP437";
    let speed = options.speed || 30;

    if (options.text) {
      // @ts-ignore
      let file = new File(`${this.root}/artwork/${options.text}`);

      // @ts-ignore
      if (!file.open("r")) {
        alert("error opening file: " + options.text);
        return;
      }
      // @ts-ignore
      let text = file.readAll();

      text.forEach((line: string) => {
        switch (mode) {
          // For character-at-a-time rendering...
          case "character": {
            line.split("").forEach((character: any) => {
              this.say(character);
              this.sleep(speed);
            });
          }

          // For line-at-a-time rendering...
          case "line": {
            this.say(line);
            this.sleep(speed);
          }
        }
      });

      // @ts-ignore
      file.close();
    }
  }

  say(word: string) {
    // @ts-ignore
    console.print(word);
  }

  pause() {
    // @ts-ignore
    console.pause();
  }

  sleep(speed: number) {
    // @ts-ignore
    sleep(speed);
  }
}

const iq = new Iniquity("/euphoria/boards/iniquity");

iq.render({
  text: "art.phoenix.welcome.ans",
  encoding: "CP437",
  mode: "line",
  speed: 50,
});

iq.say("\r\n");
iq.pause();
