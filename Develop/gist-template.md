# Title (replace with your title)

Introductory paragraph (replace this with your text)

## Summary
Regular expressions (regex) are patterns used to match character combinations in strings (numbers, letters, and special characters). In JavaScript, regular expressions are also objects and used in search alorithms, find-replace functions, and data validation. Moreover, regex are used with **exec()** and **test()** methods of RegExp, and with the **match()**, **matchAll()**, **replace()**, **replaceAll()**, **search()**, and **split(**) methods of String. 

For example, the following regex patterb defines the valid characters for each segment of an email address (i.e., account, domain, and domain extension), as well as the min & max length of the domain extension (ie., min=2, max=6).

>>> **/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/**

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
An anchor specifies the position in the string on which a match must occur. When an anchor is used in a search expression, the regex engine does not advance through the string or consume characters; it looks for a match in the specified position only. For example, **^** specifies that the match must start at the beginning of a line or string. Therefore, the regular expression **^https:** matches **"https:"** only when it occurs at the beginning of a line.

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

| Quantifiers| Usage |
|:-----------:|:-----------|
| * | 0 or more |
| *? | 0 or more, ungreedy |
| + | 1 or more |
| +? | 1 or more, ungreedy |
| ? | 0 or 1 |
| ?? | 0 or 1, ungreedy |
| {3} | Exactly 3 |
| {3,} | 3 or more |
| {3,5} | 3, 4 or 5 |
| {3,5}? | 3, 4 or 5, ungreedy |


### OR Operator

### Character Classes

### Flags

### Grouping and Capturing

### Bracket Expressions

### Greedy and Lazy Match

### Boundaries

### Back-references

### Look-ahead and Look-behind

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)