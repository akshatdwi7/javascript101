function a(b) {
  let c = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] % 2 == 0) c += b[i];
  }
  return c;
}
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
