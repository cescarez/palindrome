# Palindromes

_Epicodus Week 10, last updated Oct. 2, 2018_

##### By _**Christabel Escarez**_

## Description

A webpage that will confirm whether a user input is a palindrome.

## Setup/Installation Requirements

* _Clone repository:_ https://github.com/cescarez/palindrome.git
* _Open index.html_
* _Enter and submit word._


## Specifications
| Specification | Example User Input | Expected Output |
| :-------------| :----------------- | :-------------- |
| Program gathers user input | _Input:_ "word" | _Output:_ "word" |
| Program does not allow empty input to be submitted | _Input:_ "" | _Output:_ Input box becomes outlined in red with displayed text "Please enter a number." |
| Program converts input to lowercase | _Input:_ "SCREAMING AHhHhH" | _Output:_ "screaming ahhhhh" |
| Program parses input into array of characters | _Input:_ "word word" | _Output:_ [w, o, r, d, , w, o, r, d]|
| Program creates second array that is a duplicate of the previous, but in reverse order | _Input:_ "word word" | _Output:_ [d, r, o, w, , d, r, o, w]|
| Program collates this reverse array into a string. | _Input:_ [d, r, o, w, , d, r, o, w] | _Output:_ "drow drow" |
| Program returns false if user input and string generated from reverse array are not equal | _Input:_ "n00b" |  _Output:_ false |
| Program returns true if user input and string generated from reverse array are not equal | _Input:_ "b00b" |  _Output:_ true |

## Known Bugs

_No known bugs, to date._

## Support and contact details

_Contact christabel.escarez@gmail.com with any technical issues._

## Technologies Used

* _HTML_
* _CSS_
  * _Bootstrap 3.3.7_
* _JavaScript_
  * _jQuery 3.3.1_

### License

Copyright (c) 2018 **Christabel Escarez** :dog:

*This software is licensed under the GPL license.*

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
