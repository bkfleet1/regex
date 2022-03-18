# Title (replace with your title)

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

### Quantifiers
Quantifiers are used to represent the times the preeceding character or group of characters to appear in our match. By default, a quantifier matches as many instances of its quantified token or subpattern as possible, often refered to as "greedy". In contrast, a "lazy" or "reluctant" quantifier matches on as few quantified tokens as relevant. 

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
Below is sample javacript code using the match() function and the * quantifier, both lazy and greedy versions.

>> const  articleTitle = 'Stock market is supposed to drop when the Fed hikes interest rates. So why are the markets rallying now?'

>> const quantifyLazy = /markets*?/g
>> console.log( articleTitle.match(quantifyLazy))
>> // expected output: Array ['market', 'market']

>> const quantifyGreedy = /markets*/g
>> console.log( articleTitle.match(quantifyGreedy))
>> // expected output: Array ['market', 'markets']

### OR Operator
The alternation operator, also known as the OR operator, has the lowest precedence of all regex operators. In other words, it tells the regex engine to match either everything to the left of the vertical bar, or everything to the right of the vertical bar. If you want to limit the reach of the alternation, you need to use parentheses for grouping.

#### List of OR Operators
Below are a list of OR operators and their usage.
| OR Operators | Use |
|:-----------:|:-----------|
|   a|b   | Matches any string that contains either ‘a’ or ‘b’. |

#### Examples
Below are a few OR operator examples.
| Example | Description | Matching string examples |
|:-----------|:-----------|:-----------|
|   se(a|e) | Matches any string that contains the text ‘se’ followed either by an ‘a’ or an ‘e’ | “see”, “sea” |

#### Sample Code
Below is sample javacript code using the match() function and the OR operator.

>> const  articleTitle = 'Stock market is supposed to drop when the Fed hikes interest rates. So why are the markets rallying now?'

>> const orOperator = /marke(ts|t)/g
>> console.log( articleTitle.match(orOperator))
>> // expected output: Array ['market', 'markets']

### Character Classes
A character class, also known as a character set is one of the most commonly used components of regex. It tells the regex engine to match on any of the characters located within the square brackets. The order of the characters inside a character class does not matter. 

You can also create a range of character by utilize a hyphen inside a character class. For example [0-9] matches a single digit between 0 and 9, which is much more efficient than entering each intiger. You may also concatenate multiple ranges within a single character class, including upper and lower case letters and numbers - like this ([A-Za-z0-9-]+).

Special characters may also be included within the character class. Some special characters to consider include **-!#$%()/:?@[]^_{}~+.**, which are supported by OWASP, Oracle Identity Manager and Microsoft Active Directory.



### Flags


### Grouping and Capturing


### Bracket Expressions

### Greedy and Lazy Match

### Boundaries

### Back-references

### Look-ahead and Look-behind

## Author
**Brad Kelley**
Brad has over 25 years of consulting and business development experience serving private and public-sector organizations throughout North America, Caribbean, Europe, Middle East, and Australia. Extensive expertise in business processes, supply chain, fleet management, workforce management, automation and change management, vehicle technologies, IoT, predictive analytics, and Cloud services. Brad is also a full-stack developer focused on edge-computing and mobile solutions, RESTful API integrations, artificial intelligence, and actionable analytics models. 

Connect with Brad on LinkedIn or by email.
[LinkedIn Profile](https://www.linkedin.com/in/brad-kelley-bab30a39/)
[Brad Kelley's Email](mailto:bradkelleytech@gmail.com)

View Brad's development work & portfolio.
[Github Repository](https://github.com/bkfleet1)
[Development Portfolio](https://bkfleet1.github.io/class-portfolio/)
