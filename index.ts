export default function delay(delay:number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, delay);
  });
}
