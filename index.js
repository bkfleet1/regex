
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

const array = '(832)999-1111,832-999-1111,832-abc-1111'

const backRef = /\(?([0-9]{3})\)?([.-]?)([0-9]{3})\2([0-9]{4})/g;
console.log(array.match(backRef));
// expected output: Array [ '832-999-1111' ]