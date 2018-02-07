var context = require.context('./src', true, "*.js$/");
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
console.log(context);
context.keys().forEach(context);