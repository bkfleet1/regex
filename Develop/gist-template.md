# Regex Tutorial & Cheatsheet

Introductory paragraph (replace this with your text)

## Summary
Regular expressions (regex) are patterns used to match character combinations in strings (numbers, letters, and special characters). In JavaScript, regular expressions are also objects and used in search alorithms, find-replace functions, and data validation. Moreover, regex are used with **exec()** and **test()** methods of RegExp, and with the **match()**, **matchAll()**, **replace()**, **replaceAll()**, **search()**, and **split(**) methods of String.

For example, the following regex patterb defines the valid characters for each segment of an email address (i.e., account, domain, and domain extension), as well as the min & max length of the domain extension (ie., min=2, max=6).

> > > **/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/**

A practical use of this regex definiton would be in the validation of user input in an application or an API endpoint prior to writing to a database.

The content of a regular expression is entirely up to the developer, however, there are certain components that are needed for them to function properly. The following tutorial takes a deeper dive into the structure and syntax of regular expressions, and includes example code for reference.

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
A regex is considered a literal, so the pattern must be wrapped in slash characters (/). 

### [Anchors](#anchors)
An anchor specifies the position in the string on which a match must occur. When an anchor is used in a search expression, the regex engine does not advance through the string or consume characters; it looks for a match in the specified position only. For example, **^** specifies that the match must start at the beginning of a string. Therefore, the regular expression **^https:** matches **"https:"** only when it occurs at the beginning of a string.

Below are a list of anchors and their usage.
| Anchor | Usage |
|:-----------:|:-----------|
| ^ | Must occur at the beginning of a regex string. |
| $ | Must occur at the end of the string, or before \n at the end of the string. |
| \A | Must occur at the beginning of the string only (no multiline support). |
| \Z | Must occur at the end of the string, or before \n at the end of the string. |
| \z | Must occur at the end of the string only. |
| \G | Must start at the position where the previous match ended. |
| \b | Must occur on a word boundary. |
| \B | Must not occur on a word boundary. |
| \< | Must occur at the start of word. |
| \> | Must occur at the end of word. |

### [Quantifiers](#quantifiers)
Quantifiers are used to represent the times the preeceding character or group of characters to appear in our match. By default, a quantifier matches as many instances of its quantified token or subpattern as possible, often refered to as "greedy". In contrast, a "lazy" or "reluctant" quantifier matches on as few quantified tokens as relevant. Refer to the [Greedy and Lazy Match](#greedy-and-lazy-match) section for a deeper dive into these quantifiers.  

#### List of Quantifiers
Below are a list of quantifiers and their usage.
| Quantifiers| Usage |
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

#### Examples
Below are a few quantifier examples.
| Example | Description | Results |
|:-----------|:-----------|:-----------|
| A+ | Matches one or more A characters | "A", "AA", "AAA", "AAAA" |
| welcome!* | Matches any string ‘welcome’ followed by zero or more ‘!’ characters | “welcome”, “welcome!”,"welcome!!" |
| welcome!+ | Matches any string ‘welcome’ followed by one or more ‘!’ characters | “welcome!”, “welcome!!” |
| welcome!? | Matches any string ‘welcome’ followed by zero or one ‘!’ characters | “welcome”, “welcome!” |
| (oh){2,4} | Matches any string that repeats the group of characters ‘ha’ two up to four times | “ohoh”, “ohohoh”, “ohohohoh” |

#### Sample Code
Below is sample javacript code with both Greedy and Lazy quantifier matching on the same variable.

>> **const  articleTitle = 'Stock market is supposed to drop when the Fed hikes interest rates. So why are the markets rallying now?'**

Greedy Quantifier Match

>> **const quantifyGreedy = /markets*/g**

>> **console.log( articleTitle.match(quantifyGreedy))**

>> **// expected output: Array ['market', 'markets']**

Lazy Quantifier Match

>> **const quantifyLazy = /markets*?/g**

>> **console.log( articleTitle.match(quantifyLazy))**

>> **// expected output: Array ['market', 'market']**

### [OR Operator](#or-operator)
The **alternation** operator, also known as the **OR operator**, has the lowest precedence of all regex operators. In other words, it tells the regex engine to match either everything to the left of the vertical bar, or everything to the right of the vertical bar. If you want to limit the reach of the alternation, you need to use parentheses for grouping.

#### List of OR Operators
Below are a list of OR operators and their usage.
| OR Operators | Use |
|:-----------:|:-----------|
|   (a|b)   | Matches any string that contains either ‘a’ or ‘b’. |

#### Examples
Below is an example of an OR operator.
| Example | Description | Results |
|:-----------|:-----------|:-----------|
|   se(a|e) | Matches any string that contains the text ‘se’ followed either by an ‘a’ or an ‘e’ | “see”, “sea” |

#### Sample Code
Below is sample javacript code using the match() function and the OR operator.

>> **const  articleTitle = 'Stock market is supposed to drop when the Fed hikes interest rates. So why are the markets rallying now?'**

>> **const orOperator = /marke(ts|t)/g**

>> **console.log( articleTitle.match(orOperator))**

>> **// expected output: Array ['market', 'markets']**

### [Character Classes](#character-classes)
A character class, also known as a character set is one of the most commonly used components of regex. [Bracket Expressions](#bracket-expressions), including positive and negative character groups, are considered character classes. The order of which characters are defined inside a class does not matter. 

#### List of other Character Classes
| Character Class | Use |
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

### [Flags](#flags)
Flags are placed at the end of a regex and define additional capabilities or limitation of an expression. Flags can be used, either separately or together and in any order, but these are the three you're most likely to encounter:

| Flag | Use |
|:-----------:|:-----------|
| i | Makes the expression search case-insensitively. |
| g | Makes the expression search for all occurrences (global). |
| m | Makes the boundary characters ^ and $ match the beginning and ending of every single line instead of the beginning and ending of the whole string. |
| s | Makes the wild character . match newlines as well. |
| y | Makes the expression start its searching from the index indicated in its lastIndex property (sticky). |
| u | Makes the expression assume individual characters as code points, not code units, and thus match 32-bit characters as well. |

### [Grouping and Capturing](#grouping-and-capturing)
You can **group** part of a regular expression by placing characters inside of parenthesis (). This allows you to apply a [quantifier](#quantifiers) to the group or to restrict [alternation](#or-operator) to a portion of an expression.

#### List of Grouping Methods
| Grouping | Use |
|:-----------:|:-----------|
| (xyz) | Grouping of characters. |
| (?:xyz) | Non-capturing group of characters. |


### [Bracket Expressions](#bracket-expressions)
A bracket expression, also known as a positive character group, is any characters inside a set of square brackets **[]** to be matched by the regex engine. 

>> * **Lowercase Letters** - lowercase letters can be matched individual or expressed in a range [a-z].

>> * **Uppercase Letters** - uppercase letters can be matched individual or expressed in a range [A-Z].

>> * **Numbers** - numbers can be matched individual or expressed in a range [0-9].

>> * **Special Characters** - special characters can  include any non-alphanumeric characters, such as punctuation or symbols. It's important to note that the hyphen used in a alpha or numeric range is not included in the regex engine's pattern matching. To include a hyphen in a regex pattern match, add the hyphen after any declared ranges like the following [a-zA-Z0-9_-%]. Special characters may also be included within the character class. Some special characters to consider include **-!#$%()/:?@^_{}~+.**, which are supported by OWASP, Oracle Identity Manager and Microsoft Active Directory.

#### List of Bracket Expressions
| Bracket Expression | Use |
|:-----------:|:-----------|
| [xyz] | Matches a range of characters (e.g. x or y or z). |
| [^xyz] | Matches a character other than x or y or z. |
| [a-q] | Matches a character from within a specified range. |
| [0-9] | Matches a digit from within a specified range. |
| [$@!] | Matches a digit from within a specified range. |


#### Sample Code
Below is sample javacript code using the match() function and a bracket expression.

>> **const array = 'Stock market is supposed to drop when the Fed hikes interest rates. So why are the markets rallying now?';**

>> **const bracketExpression = /([A-Za-z0-9-]+)/g;**

>> **console.log(array.match(bracketExpression));**

>> **// expected output: Array ['Stock', 'market', 'is', 'supposed', 'to', 'drop', 'when', 'the', 'Fed', 'hikes', 'interest', 'rates', 'So', 'why', 'are', 'the', 'markets', 'rallying', 'now']**

### [Greedy and Lazy Match](#greedy-and-lazy-match)
To find a match, the regex engine will process characters one at a time. When a partial match begins, the engine will remember the start position so it can go back in the event that the following characters don't produce a complete match (i.e., backtracking). Greedy & lazy quantifiers only exist in backtracking regex engines.

By default, all quantifiers are **greedy**, which means that the regex engine will attempt to repeat the sub-pattern as many times as possible before exploring shorter matches. In other words, a greedy pattern will match the longest possible string.

Conversely, a **lazy** quantifier, also called non-greedy or reluctant quantifier always attempts to repeat the sub-pattern as few times as possible, before exploring longer matches by expansion. In other words, a lazy pattern will match the shortest possible string. To make quantifier **lazy**, append a **?** to the end of an existing quantifier (e.g., *?, +?, {0,8}?).



### [Boundaries](#boundaries)



### [Back-references](#back-references)
Back references are used to match the same text previously matched by a capturing group. For example, if you are want a regex function to validate a a phone number pattern of ###-###-####, a back-reference can be used to match the hyphen separater desfined in the second grouping . The sample code below illustrates this regex logic.

>> **const array = '(832)999-1111,832-999-1111,832 999 1111'**

>> **const backRef = /\(?([0-9]{3})\)?([.-]?)([0-9]{3})\2([0-9]{4})/g;**

>> **console.log(array.match(backRef));**

>> **// expected output: Array [ '832-999-1111' ]**

#### List of Back-references
| Back-references | Use |
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

## Author
**Brad Kelley**

Brad has over 25 years of consulting and business development experience serving private and public-sector organizations throughout North America, Caribbean, Europe, Middle East, and Australia. Extensive expertise in business processes, supply chain, fleet management, workforce management, automation and change management, vehicle technologies, IoT, predictive analytics, and Cloud services. Brad is also a full-stack developer focused on edge-computing and mobile solutions, RESTful API integrations, artificial intelligence, and actionable analytics models. 

Connect with Brad on LinkedIn or by email.

[LinkedIn Profile](https://www.linkedin.com/in/brad-kelley-bab30a39/)

[Brad Kelley's Email](mailto:bradkelleytech@gmail.com)

View Brad's development work & portfolio.

[Github Repository](https://github.com/bkfleet1)

[Development Portfolio](https://bkfleet1.github.io/class-portfolio/)
