# Regex Tutorial & Cheat Sheet
Regular expressions (regex) are patterns used to match character combinations in strings (numbers, letters, and special characters). In JavaScript, regular expressions are also objects and used in search algorithms, find-replace functions, and data validation. Moreover, regex are used with **exec()** and **test()** methods of RegExp, and with the **match()**, **matchAll()**, **replace()**, **replaceAll()**, **search()**, and **split(**) methods of String.

The following regex pattern, for example, defines the pattern of a valid email address by its segments (i.e., account, domain, and domain extension), as well as the min & max length of the domain extension (ie., min=2, max=6).

>>> **/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/**

A practical use of this regex definition would be in the validation of user input in an application or an API endpoint prior to writing to a database.

The content of a regular expression is entirely up to the developer, however, there are certain components that are needed for them to function properly. The following tutorial takes a deeper dive into the structure and syntax of regular expressions, and includes example code for reference.


## Summary
As noted in the introduction, a regex is basically a the definition of a pattern, which used in search algorithms, find-replace functions, and data validation. The content of this gist provides a reference guide for the development of regex patterns, providing definitions, syntax lists, examples, and sample code for the various regex components.


## Table of Contents
- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)


## Regex Components

### [Anchors](#anchors)
An anchor specifies the position in the string on which a match must occur. When an anchor is used in a search expression, the regex engine does not advance through the string or consume characters; it looks for a match in the specified position only. For example, **^** specifies that the match must start at the beginning of a string. Therefore, the regular expression **^https:** matches **"https:"** only when it occurs at the beginning of a string.

#### List of Anchors
| Anchor | Usage |
|:-----------:|:-----------|
| ^ | Must occur at the beginning of a regex string. |
| $ | Must occur at the end of the string, or before \n at the end of the string. |
| \A | Must occur at the beginning of the string only (no multiline support). |
| \Z | Must occur at the end of the string, or before \n at the end of the string. |
| \z | Must occur at the end of the string only. |
| \G | Must start at the position where the previous match ended. |
| \b | Must occur on a word boundary. View the [boundaries](#boundaries) section for more details. |
| \B | Must not occur on a word boundary. View the [boundaries](#boundaries) section for more details. |
| \< | Must occur at the start of word. |
| \> | Must occur at the end of word. |

In the introduction, you were presented with a regex pattern to validate the different segments of an email address (shown again below). Notice the use of the **^** and **$** anchors at the beginning and end of the expression.

>>> **/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/**

### [Quantifiers](#quantifiers)
Quantifiers define the number of times a character, pattern, or group appears in a regex match. For example, if you wanted to match as many characters in the group [a-zA-Z] as possible, you can use the plus symbol **+** after the group. Use of the **+** quantifier provides for matching one or more of the preceding characters. Below is an illustration of this example.

>>> **/[a-zA-A]+/**

By default, a quantifier matches as many instances of its quantified pattern or sub-pattern as possible, often referred to as "greedy". In contrast, a "lazy" or "reluctant" quantifier matches on as few quantified pattern or sub-pattern as possible. Refer to the [Greedy and Lazy Match](#greedy-and-lazy-match) section for a deeper dive into these quantifiers.  

#### List of Quantifiers
| Quantifier | Description |
|:-----------:|:-----------|
| * | 0 or more |
| *? | 0 or more, lazy |
| + | 1 or more |
| +? | 1 or more, lazy |
| ? | 0 or 1 |
| ?? | 0 or 1, lazy |
| {3} | Exactly 3 |
| {3,} | 3 or more |
| {3,5} | 3, 4 or 5 |
| {3,5}? | 3, 4 or 5, lazy |

In the introduction, you were presented with a regex pattern to validate the different segments of an email address (shown again below). Notice the use of the **+** and **{2,6}** quantifiers. The **+** character in that there are 1 or more characters matching the values in the preceding [bracket expression](#bracket-expressions). Whereas the quantifier **{2,6}** indicates a minimum of 2 and maximum of 6 characters in the third group or segment of an email address, which is the domain extension after the **.** (e.g., com, net, info, uk).

Note that the regex pattern is **greedy** as it lacks an **?** to limit its matching scope.

>>> **/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/**


#### Examples
| Example | Description | Results |
|:-----------|:-----------|:-----------|
| A+ | Matches one or more A characters | "A", "AA", "AAA", "AAAA" |
| welcome!* | Matches any string ‘welcome’ followed by zero or more ‘!’ characters | “welcome”, “welcome!”,"welcome!!" |
| welcome!+ | Matches any string ‘welcome’ followed by one or more ‘!’ characters | “welcome!”, “welcome!!” |
| welcome!? | Matches any string ‘welcome’ followed by zero or one ‘!’ characters | “welcome”, “welcome!” |
| (oh){2,4} | Matches any string that repeats the group of characters ‘ha’ two up to four times | “ohoh”, “ohohoh”, “ohohohoh” |

#### Sample Code
The Javascript code below demonstrates both **Greedy** and **Lazy** quantifier matching on the same variable.

>> **const  articleTitle = 'Stock market is supposed to drop when the Fed hikes interest rates. So why are the markets rallying now?'**

Greedy Quantifier Match

>> **const quantifyGreedy = /markets\*/g**

>> **console.log( articleTitle.match(quantifyGreedy))**

>> **// expected output: Array ['market', 'markets']**

Lazy Quantifier Match

>> **const quantifyLazy = /markets\*?/g**

>> **console.log( articleTitle.match(quantifyLazy))**

>> **// expected output: Array ['market', 'market']**


### [OR Operator](#or-operator)
The **alternation** operator, also known as the **OR operator**, has the lowest precedence of all regex operators. In other words, it tells the regex engine to match either everything to the left of the vertical bar, or everything to the right of the vertical bar. If you want to limit the reach of the alternation, you need to use parentheses for grouping.

#### List of OR Operators
Below are a list of OR operators and their usage.
| OR Operators | Description |
|:-----------:|:-----------|
|   (a\|b)   | Matches any string that contains either ‘a’ or ‘b’. |

#### Example
Below is an example of an OR operator.
| Example | Description | Results |
|:-----------|:-----------|:-----------|
|   se(a\|e) | Matches any string that contains the text ‘se’ followed either by an ‘a’ or an ‘e’ | “see”, “sea” |

#### Sample Code
The Javascript code below uses a match() function and an OR operator.

>> **const  articleTitle = 'Stock market is supposed to drop when the Fed hikes interest rates. So why are the markets rallying now?'**

>> **const orOperator = /marke(ts|t)/g**

>> **console.log( articleTitle.match(orOperator))**

>> **// expected output: Array ['market', 'markets']**


### [Character Classes](#character-classes)
A character class, also known as a character set is one of the most commonly used components of regex. [Bracket Expressions](#bracket-expressions), including positive and negative character groups, are considered character classes. The order of which characters are defined inside a class does not matter. 

#### List of other Character Classes
| Character Class | Description |
|:-----------:|:-----------|
| . | Matches any character except the newline character (\n) |
| \c | Control character. |
| \s | Matches a single whitespace character, including tabs and line breaks. |
| \S | Matches on non-whitespace. |
| \d | Matches any integer. This class is equivalent to the bracket expression [0-9]. |
| \D | Matches any non-integer character. |
| \w | Matches any alphanumeric character, including the underscore (_). This class is equivalent to the bracket expression [A-Za-z0-9_]. |
| \W | Matches any non-alphanumeric character (e.g., special characters). |
| \xhh | Matches on hexadecimal character hh |
| \Oxxx | Matches on octal character xxx |


In the introduction, you were presented with a regex pattern to validate the different segments of an email address (shown again below). Notice the use of the **\d** character class, which is equivalent to the bracket expression [0-9].

>>> **/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/**


### [Flags](#flags)
Flags define additional capabilities or limitation of an expression and can be combined or used independently; order does not matter. They are placed at the end of a regex pattern, after the closing forward-slash as illustrated below.

>>> **const bracketExpression = /([A-Za-z0-9-]+)/g;**

Notice the **g**, known as the **global flag** occurs after the closing forward-slash;

Below is a list of the six (6) regex flags available to developers. However, the first three flags listed (i, g, m) are the most commonly used.

#### List of Flags
| Flag | Description |
|:-----------:|:-----------|
| i | Makes the expression search case-insensitively. |
| g | Makes the expression search for all occurrences (global). |
| m | Makes the boundary characters ^ and $ match the beginning and ending of every single line instead of the beginning and ending of the whole string. |
| s | Makes the wild character . match newlines as well. |
| y | Makes the expression start its searching from the index indicated in its lastIndex property (sticky). |
| u | Makes the expression assume individual characters as code points, not code units, and thus match 32-bit characters as well. |


### [Grouping and Capturing](#grouping-and-capturing)
You can **group** part of a regular expression by placing characters inside of parenthesis **()**, also known as a  a sequence or sub-expression. Use of groups allows you to apply [quantifiers](#quantifiers) or restrict [alternations](#or-operator) to a portion of a pattern.

#### List of Grouping Methods
| Grouping | Description |
|:-----------:|:-----------|
| (xyz) | Capture group of characters. |
| (?:xyz) | Non-capturing group of characters. |
| [xyz] | Square brackets, known as a [bracket expression](#bracket-expressions) are used to group characters (e.g. x or y or z). |

In the introduction, you were presented with a regex pattern to validate the different segments of an email address (shown again below). Notice the use of **()** and **[]** to create groupings.

>>> **/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/**


### [Bracket Expressions](#bracket-expressions)
A bracket expression, also known as a positive character group, is any characters inside a set of square brackets **[]** to be matched by the regex engine. 

>> * **Lowercase Letters** - lowercase letters can be matched individual or expressed in a range [a-z].

>> * **Uppercase Letters** - uppercase letters can be matched individual or expressed in a range [A-Z].

>> * **Numbers** - numbers can be matched individual or expressed in a range [0-9].

>> * **Special Characters** - special characters can include any non-alphanumeric characters, such as punctuation or symbols. It's important to note that the hyphen used in a alpha or numeric range is not included in the regex engine's pattern matching. To include a hyphen in a regex pattern match, add the hyphen after any declared ranges like the following **[a-zA-Z0-9_-%]**. Special characters may also be included within the character class. Some special characters to consider include **-!#$%()/:?@^_{}~+.**, which are supported by OWASP, Oracle Identity Manager and Microsoft Active Directory.

#### List of Bracket Expressions
| Bracket Expression | Description |
|:-----------:|:-----------|
| [xyz] | Matches a range of characters (e.g. x or y or z). |
| [^xyz] | Matches a character other than x or y or z. |
| [a-q] | Matches a character from within a specified range. |
| [0-9] | Matches a digit from within a specified range. |
| [$@!] | Matches a digit from within a specified range. |


In the introduction, you were presented with a regex pattern to validate the different segments of an email address (shown again below). Notice the use of **[]** to create bracket expressions, which contain character ranges (alpha and numeric) and character classes on which to match. 

>>> **/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/**

#### Sample Code
The Javascript code below uses a match() function and a bracket expression. Notice in the example each individual word in the **const array** variable is returned seperately with the response array.

>> **const array = 'Stock market is supposed to drop when the Fed hikes interest rates. So why are the markets rallying now?';**

>> **const bracketExpression = /([A-Za-z0-9-]+)/g;**

>> **console.log(array.match(bracketExpression));**

>> **// expected output: Array ['Stock', 'market', 'is', 'supposed', 'to', 'drop', 'when', 'the', 'Fed', 'hikes', 'interest', 'rates', 'So', 'why', 'are', 'the', 'markets', 'rallying', 'now']**


### [Greedy and Lazy Match](#greedy-and-lazy-match)
To find a match, the regex engine will process characters one at a time. When a partial match begins, the engine will remember the start position so it can go back in the event that the following characters don't produce a complete match (i.e., backtracking). Greedy & lazy [quantifiers](#quantifiers) only exist in backtracking regex engines.

By default, all quantifiers are **greedy**, which means that the regex engine will attempt to repeat the sub-pattern as many times as possible before exploring shorter matches. In other words, a greedy pattern will match the longest possible string.

Conversely, a **lazy** quantifier, also called non-greedy or reluctant quantifier always attempts to repeat the sub-pattern as few times as possible, before exploring longer matches by expansion. In other words, a lazy pattern will match the shortest possible string. To make quantifier **lazy**, append a **?** to the end of an existing quantifier (e.g., *?, +?, {0,8}?).

Checkout the list of [Quantifiers](#quantifiers) availabe for use.


### [Boundaries](#boundaries)
Boundaries, known as word boundaries, are useful for matching a sequence of letters (e.g., an entire word) or numbers, or to ensure that characters occur at the beginning or end of a sequence. Boundaries are designated using **\b** meta-character to wrap the characters, like this - **\bdeveloper\b**. The use of a boundary in this example enforces a match on the entire word **developer**.

#### Sample Code
The Javascript code below uses a match() function and a word boundary to search for the word **developer**.

>> **const search = 'A developer maliciously altered Open Source Software code to wipe files in a well known foreign country.'**

>> **const boundary = /\bdeveloper\b/;**

>> **console.log(search.match(boundary));**

>> **// expected output: Array [ 'developer' ]**


### [Back-references](#back-references)
Back references are used to match the same text previously matched by a capturing group, which provides for consistence and less coding. 

For example, if you are want a regex function to validate a a phone number pattern of ###-###-####, a back-reference can be used to match the hyphen separater defined in the second grouping, which looks like **?([-]?)**. The code below illustrates the aforementioned example.

>> **const array = '(832)999-1111,832-999-1111,832 999 1111'**

>> **const backRef = /\(?([0-9]{3})\)?([-]?)([0-9]{3})\2([0-9]{4})/g;**

>> **console.log(array.match(backRef));**

>> **// expected output: Array [ '832-999-1111' ]**

#### List of Back-references
| Back-references | Description |
|:-----------:|:-----------|
| $n | nth non-passive group |
| $2 | "xyz" in /^(abc(xyz))$/ |
| $1 | "xyz" in //v(?:abc)(xyz)$/ |
| $' | Before matched string |
| $’ | After matched string |
| $+ | Last matched string |
| $& | Entire matched string |
| $_ | Entire input string |
| $$ | Literal "$" |



### [Look-ahead and Look-behind](#look-ahead-and-look-behind)
**Look-ahead** and **Look-behind**, collectively are known as **look-around**, are zero-length assertions that returning only a result of **match** or **no match**. The matching of **Look-ahead** and **Look-behind** are useful for validating data or checking if a condition exists, similar to a Boolean function.

An example of a look-ahead would be **A(?=B)** meaning to return a **match** if **A** is found, but only if followed by **B**.

In a look-behind the expression **(?<=A)B** would return a **match** if **A** is found, but only if **B** came before it.


## Author
**Brad Kelley**

Brad has over 25 years of consulting and business development experience serving private and public-sector organizations throughout North America, Caribbean, Europe, Middle East, and Australia. Extensive expertise in business processes, supply chain, fleet management, workforce management, automation and change management, vehicle technologies, IoT, predictive analytics, and Cloud services. Brad is also a full-stack developer focused on edge-computing and mobile solutions, RESTful API integrations, artificial intelligence, and actionable analytics models. 

Connect with Brad on LinkedIn or by email.

> [LinkedIn Profile](https://www.linkedin.com/in/brad-kelley-bab30a39/)

> [Brad Kelley's Email](mailto:bradkelleytech@gmail.com)

View Brad's development work & portfolio.

> [Github Repository](https://github.com/bkfleet1)

> [Development Portfolio](https://bkfleet1.github.io/class-portfolio/)
