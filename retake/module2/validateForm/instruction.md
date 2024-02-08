## ValidateForm
### Instructions:
- **Write a function** called formValidation() that validates all form values. when a user clicks a
saving button, a form fields are validated whether they are empty or not. If each field is an
empty, then an error message of that field is shown to inform the user. 

    - **Nested Functions:**
        - ***addEventHandler()*** adding saveHandler() function when a save button with event 'click' and adding resetHandler() function to a reset  button with event 'click'.
        
        - ***saveHandler()*** when a user clicks a save button, you must check that each a form field (nameand feedback) is empty or not.
            - If a name field is empty, you must assign an error message 'please enter your name' to `'<p id-"nameValidateMsg"></p>'`.
            - If a feedback field is empty, you must assign an error mesage 'please enter your feedback' to `'<pcid="feedbackValidateMsg"></p>'`.
        
        - ***resetHandler()*** **when a user clicks a reset button, you must reset all form values to its initial values.**
