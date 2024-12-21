# US Phone Number Validator HTML/CSS/JS

A Pen created on CodePen.io. Original URL: [https://codepen.io/Mouragheb/pen/ZYzLaXV](https://codepen.io/Mouragheb/pen/ZYzLaXV).

This project is a Telephone Number Validator, designed to check whether a given phone number is a valid US telephone number. It uses HTML, CSS, and JavaScript to provide a functional and visually appealing interface. Here’s a detailed explanation:

1. Structure and Layout (HTML):
	•	HTML elements:
	•	A styled interface resembling a smartphone with a camera and input field.
	•	A text input field (<input>) for entering phone numbers, limited to 20 characters.
	•	Two buttons:
	•	Check Button: Validates the entered phone number.
	•	Clear Button: Clears the input and resets the results.
	•	A <div> (id="results-div") to display validation results dynamically.
	•	Logo and Header: Display a logo and a title, “Telephone Number Validator.”

2. Styling (CSS):
	•	Overall Design:
	•	The app mimics a smartphone with rounded corners and a “camera” for a polished look.
	•	The background is dark gray (#4b4b61) with a contrasting lighter gray for the input area.
	•	Interactive Buttons: Buttons have hover effects for better user experience.
	•	Dynamic Results Display: Results are displayed prominently, changing color based on validation status (green for valid, red for invalid).

3. Functionality (JavaScript):
	•	Core Features:
	•	Phone Number Validation:
	•	Uses a regular expression to validate the format of US phone numbers.
	•	The regex checks for:
	•	Optional country code (1).
	•	Area code in the format (123) or 123.
	•	Hyphen -, space  , or no separator between segments.
	•	Exactly 10 digits.
	•	Dynamic Updates:
	•	Displays a validation result in #results-div dynamically when the “Check” button is pressed.
	•	Clears the input and result when the “Clear” button is clicked.
	•	Error Handling:
	•	Alerts the user if the input field is empty or if the phone number format is invalid.

Input and Output Examples:

Example 1:

Input: (123) 456-7890
Explanation:
	•	The input matches the US phone number format with an area code in parentheses, followed by a 7-digit number separated by a hyphen.
	•	The number is validated as a valid US phone number.

Output:
	•	Displayed message: Valid US number: (123) 456-7890
	•	Text color: Green.

Example 2:

Input: 123-456-7890
Explanation:
	•	The input matches the format with a 3-digit area code, a hyphen, and a 7-digit number.
	•	The number is validated as a valid US phone number.

Output:
	•	Displayed message: Valid US number: 123-456-7890
	•	Text color: Green.

Example 3:

Input: 456-7890
Explanation:
	•	The input is invalid because it does not include a 3-digit area code (mandatory for US phone numbers).
	•	The regex test fails.

Output:
	•	Displayed message: Invalid US number: 456-7890
	•	Text color: Red.

Example 4:

Input: 1234567890
Explanation:
	•	The input is valid as it consists of 10 digits, even though it lacks spaces or separators (hyphens).
	•	The regex test passes.

Output:
	•	Displayed message: Valid US number: 1234567890
	•	Text color: Green.

Example 5:

Input: Empty field.
Explanation:
	•	If no number is entered, the app prompts the user to provide input.

Output:
	•	Displayed message: Please Provide a valid Phone Number
	•	Text color: Red.

My Approach:
	1.	Validation Logic:
	•	Implements a regular expression to validate flexible formats for US phone numbers.
	•	Handles edge cases like empty inputs, extra spaces, or missing area codes.
	2.	User Experience:
	•	Immediate feedback is provided dynamically, with validation results shown in different colors.
	•	A clear, intuitive interface enhances usability.
	3.	Interactive Features:
	•	Buttons (Check and Clear) improve interactivity, making it easier to test multiple inputs without refreshing the page.

This project is a practical example of how front-end technologies can create functional tools for real-world tasks like validating phone numbers. It demonstrates the use of regular expressions, dynamic DOM manipulation, and event-driven programming effectively.
