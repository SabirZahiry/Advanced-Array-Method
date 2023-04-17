 const colors = ['teal', 'cyan', 'peach', 'purple'];

// // colors.forEach(function(val, i){
// //  const caps = (val.toUpperCase())
// //  console.log(`At index of ${i}, ${caps}`)
// //})

// //  another way to do it 
// function yell(val, i){
//     const caps = (val.toUpperCase())
//     console.log(`At index of ${i}, ${caps}`)
// }
// colors.forEach(yell);

// // another Example
// // const prices = [3.5, 4.6, 5.7, 6.8, 7.9];
// // let total = 0;
// // prices.forEach(function(prices) {
// //     total += prices;
// // })
// // console.log(total);

// //Another way with for loop
// const prices = [3.5, 4.6, 5.7, 6.8, 7.9];
// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);

// write my own foreach callback function;
function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i++)
    callback(arr [i], i);
}
// call back function colors
forEach(colors, function(colors, i){
    console.log(colors.toUpperCase(), 'At index of:', i);
});
// another way to call function
colors.forEach(function(colors, i){
    console.log(colors.toUpperCase(), 'at index of:', i);
})