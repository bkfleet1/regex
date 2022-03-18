
const modifiedQuote = 'Stock market is supposed to drop when the Fed hikes interest rates. So why are the markets rallying now?';


const regexpModifications = /markets*?/g;
console.log(modifiedQuote.match(regexpModifications));
// expected output: Array ['market', 'market']

const regexpTooGreedy = /markets*/g;
console.log(modifiedQuote.match(regexpTooGreedy));
// expected output: Array ['market', 'markets']

const regexpModificationss = /marke(ts|t)/g;
console.log(modifiedQuote.match(regexpModificationss));
// expected output: Array ['market', 'markets']

const bracketExpression = /([A-Za-z0-9-]+)/g;
console.log(modifiedQuote.match(bracketExpression));
// expected output: Array ['Stock', 'market', 'is', 'supposed', 'to', 'drop', 'when', 'the', 'Fed', 'hikes', 'interest', 'rates', 'So', 'why', 'are', 'the', 'markets', 'rallying', 'now']