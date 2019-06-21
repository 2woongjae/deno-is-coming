export function decorator1(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) {
  console.log('decorator1');
}
