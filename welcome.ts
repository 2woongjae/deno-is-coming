function decorator(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) {
  console.log('decorator');
}

class Welcome {
  @decorator
  hello() {
    console.log('Welcome to Deno 🦕');
  }
}

function main() {
  new Welcome().hello();
}

main();
