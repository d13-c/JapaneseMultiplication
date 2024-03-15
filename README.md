# JapaneseMultiplication

  This repository contains a fully frontend implementatiom of the japanese multiplication method. The project is built using only HTML, CSS, and JavaScript. 

  On the initial page I have also included some general information about this method and how it works. It is within a 'dropdown' div that the user can choose to display it or not. Further on this page, the user is requested to insert two number inputs between 0 and 99. Once the button is clicked, the display of this part is turned to 'none' and another container with the output is displayed on the same place (whose display was initially set to 'none'. 

  My idea of building this project was to split the digits of the numbers inserted by the user and to consider each of them as a single-digit number. The program then proceeds to draw horizontal lines (slightly transformed for stylistic reasons) for the first number, using different colors for each digit, e.g., red lines for the value of the tens and orange lines for the ones position in the number. And, simultaneously, it draws vertical lines for the second number: blue for the tens and green for the ones. 

  The next step is to count the intersections between lines. 
  The result is as follows: 
          - the value of the ones is obtained by counting the intersected points between the ones of both numbers (i.e. the orange and green lines) 
          - the value of the ten position is obtained by counting the intersected points between the ones of the first number with the tens of the second number (i.e. the orange and blue lines) and the intersected points between the tens of the first number with the ones of the second number (i.e. the red and green lines) and adding them together. So, basically: intersection orange and blue + intersection orange and green. 
          - the value of the hundreds is obtained by counting the intersected points between the tens of both numbers (i.e. the red and blue lines). 
          
After this is done, I impose a series of conditions that if either of these results, let's say for example the ones, is larger or equal to ten, then the new value of ones would be just the second digit of its current value (or, let's say ones % 10) and the other digit is added to, in this case, the tens. And this thing is repeated for each of them. In the case of hundredsValue, if it exceeds 10, then a new variable is created that represents the position of thousands in the final result. This is finally displayed on a table at the end of the page.

There is also a button that, when clicked, it takes you to the initial state of the page.

I have tried to use mostly % values for the styling to make it as responsive as possible (note: with more time, I would have made some changes on the styling of the application).  

