# AirspaceChallenge
Airspace QAE Challenge - Testing a login page with cypress.io

This repo contains an automated regression suite for the log in page of an imaginary application, built using Cypress (cypress.io).
The log in page can be found at https://the-internet.herokuapp.com/login

The suite I wrote can be found at /cypress/integration/spec.js

According to cypress best practices a solid test should cover 3 phases:
1. Setting up the application state
2. Taking an action
3. Making an assertion about the resulting application state

I set up the application state using a beforeEach statement where I visit the URL and assign aliases to the three most commonly used elements on the page: the username input, 
the password input, and the login button. Then, each test takes action and contains assertions about the resulting state of the application whether that is a successful login 
or triggering an error message.
