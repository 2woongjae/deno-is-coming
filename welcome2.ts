import { decorator1 } from 'https://raw.githubusercontent.com/2woongjae/deno-is-coming/master/decorator1.ts';

class Welcome2 {
  @decorator1
  hello() {
    console.log('Welcome to Deno 🦕');
  }
}

function main() {
  new Welcome2().hello();
}

main();
