name = "Manoj";

console.log(name);
console.log(typeof name);

function run() {
  var foo = "Foo";
  let bar = "Bar";
  console.log(foo, bar);
  {
    var moo = "moo";
    let baz = "bazz";
    console.log(moo, baz);
  }
  console.log(moo);
  //   console.log(baz);
}
// console.log(moo);

run();
