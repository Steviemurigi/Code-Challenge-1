# Code-Challenge-1
# Student Grade Generator
This is a program that is used to allocate grades depending on different student marks. 

* Program execution:
The function gradeAllocater contains no parameters. Inside it, a new variable called 'marks' is declared using const and is assigned the value returned by the 'prompt()' function. The 'isNaN()' function is then used to check if the input is a valid number between 0 and 100. If not, it displays that the input is invalid, and a valid number is needed. The 'return' statement exits the function early preventing further execution of the code. If the input is valid, a new variable called 'grade' is created. The code then uses 'if...else' statements to assign the correct grade depending on the 'marks' value.The allocation is as follows:
•	If 'marks' is greater than 79, the grade assigned is 'A'.
•	If 'marks' is greater than or equal to 60, the grade assigned is 'B'.
•	If 'marks' is greater than or equal to 49, the grade assigned is 'C'.
•	If 'marks' is greater than or equal to 40, the grade assigned is 'D'.
•	If the conditions above are not met, the grade assigned is 'E'.
Finally, the allocated grade is displayed in the console using 'console.log'.
To use this function, simply call it using gradeAllocator();
This will prompt the user for student marks, and will log the corresponding grade in the console.

# Speed detector
This is a program that checks the speed of a car against a speed limit and determines the corresponding demerit points or license suspension status.

* Program execution:
The function 'speedChecker' takes a single parameter called 'speed'. Inside the function a const variable is declared called 'speedLimit' and is assigned the value of 70. Another variable called 'demerit' is declared using 'let'. The variable will store the calculated demerit points.
The code then checks if the 'speed' parameter is greater then the set 'speedLimit'. If true, then the driver is overspeeding. If so, a new variable called 'excessSpeed' is declared and assigned the difference between 'speed' and 'speedLimit'.
The 'demerit' variable is assigned the result of dividing 'excessSpeed' by 5 and rounding down to the nearest integer using 'Math.floor()'. This simple calculates the number of demerit points based on the excess speed.
The code then checks the value of the 'demerit' variable.
•	If 'demerit' is equal to 0, the driver is within speed limit and the message 'Ok' is logged on to the console.
•	If 'demerit' is greater than 12, the driver has exceeded the speed limit and the message 'License suspended' is logged to the console. 
•	If 'demerit' is greater than 0 but less than or equal to 12 , the number of demerit points is then logged to the console.
This function is called using the desired speed as argument: speedChecker(speed).
