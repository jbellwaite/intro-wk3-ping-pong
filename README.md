# Ping-Pong Game

#### A game that allows a user to enter a number and return a count of the number, excluding numbers divisible by 3 and five, which return "ping", "pong", or "ping-pong". Created 9/22/2017.

#### By **Jessie Waite**

## Description

A website created with HTML, CSS, Bootstrap, Javascript and jQuery to allow a user to play a simple ping-pong game. The game allos the user to enter a number and return a count of the number, starting at 1. The game replaces numbers divisible by 3 with the word "ping", numbers divisible by 5 with the word "pong", and numbers divisible by 15 with the word "ping-pong". The game uses an HTML/CSS/Bootstrap user-interface, and javaScript/jQuery to process the user's entry into the appropriate output.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Webpage** | Ping-Pong Game | Webpage with user input form |
| **The program takes the number input by the user and returns a count, starting at 1. **| User Input: "4" | Output: "1,2,3,4" |
| **The program replaces numbers divisible by 3 with the word “ping”.**| Input: "4" | Output: "1, 2, “ping”, 4" |
| **The program replaces numbers divisible by 5 with the word “pong”.** | Input: "6" | Output: "1, 2, “ping", 4, “pong”, 6" |
| **The program replaces numbers divisible by 15 are replaced with “ping-pong”.**| Input: "16" | Page Displays: 1, 2, “ping”, 4, “pong”, “ping”, 7, 8, “ping”, “pong”, 11, “ping”, 13, 14, 	“ping-pong”, 16
 |

## Setup/Installation Requirements

1. To run this program, you must have a C# compiler. I use [Mono](http://www.mono-project.com).
2. Install the [Nancy](http://nancyfx.org/) framework to use the view engine. Follow the link for installation instructions.
3. Clone this repository.
4. Open the command line--I use PowerShell--and navigate into the repository. Use the command "dnx kestrel" to start the server.
5. On your browser, navigate to "localhost:5004" and enjoy!

## Known Bugs
* No known bugs at this time.

## Technologies Used
* C#
  * Nancy framework
  * Razor View Engine
  * ASP.NET Kestrel HTTP server
  * xUnit

* HTML

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Marilyn Carlin, David Wilson}_**
