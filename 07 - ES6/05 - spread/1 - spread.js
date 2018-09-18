var parts0 = ['head', 'shoulder', 'knees'];
//var lyrics = ['head', ...parts, 'and', 'toes'];
var parts1 = ['and', 'toes'];
console.log('parts0 =>', parts0);
console.log('parts1 =>', parts1);

// parts1.forEach(x => { parts0.push(x) })

// parts0.push(...parts1);
// console.log('parts0 =>', parts0);

console.log('parts0 =>', [...parts0, ...parts1]);
