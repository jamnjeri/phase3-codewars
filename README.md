# CODEWARS QUESTIONS

## Century From Year
### BDD:
A function that calculates the century of a specific year.
 - Input -> Year
 - Output -> Century

### PSEUDO CODE:

*START*

 1. Define a function that takes in the year as a parameter.
 2. Divide parameter by 100     => /
 3. Round up the results        => Math.ceil
 4. Return the result
 
*END*


### I/O (Test Cases):
1. 1705 --> 18
2. 1900 --> 19
3. 1601 --> 17
4. 2000 --> 20



## Digits * Digits
### BDD:
A function that squares every digit of a given number and concatenate's them. 
 - Input -> Integer
 - Output -> Integer

### PSEUDO CODE:
*START*

  1. Split number into digits         => .split()
  2. Square each number in array      => digit * digit
  3. Convert to string                => .toString()
  4. Join array                       => .join()

*END*

### I/O (Test Cases):
1. 9119 --> 811181
2. 765  --> 493625



## Don't Give Me Five!
### BDD:
Given a range of numbers, count how many numbers are in that range except any number with a 5 as part of it's digits
 - Input -> Start Number, End Number 
 - Output -> Count (Total count of numbers in that range)

### PSEUDO CODE:
*START*

  1. Initialize variable to store the count
  2. Create a loop that starts at the start number and ends at the count number incrementing by 1 for each loop    => for/ while
  3. Check for presence of a 5 as a part of it's digits   =>  .indexOf()
  4. If presence = -1         => Increase count by 1
  5. If presence != -1        => Do nothing

*END*

### I/O (Test Cases):
1. 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
2. 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12


