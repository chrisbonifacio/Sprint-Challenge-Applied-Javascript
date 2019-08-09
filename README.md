# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

- The DOM is the Document Object Model, a representation of the strcuture of a document in HTML. It represents a document with a logical tree, each branch ending with a "node," and each node containing an object.

2. What is an event?

- An event can be anything a user does to interact with a webpage. For example, they can click, scroll, hover over elements, fill out forms, etc.

3. What is an event listener?

- An event listener is a function that is waiting for a specific event to occur before it runs.

4. Why would we convert a NodeList into an Array?

- If we convert a NodeList into an Array we get all the benefits of being able to use Array methods on it such as map, filter, and reduce.

5. What is a component?

- A component is a reusable function in javascript that is used to setup the structure for specific pieces of html and functionality on a webpage. For example, the navbar on a page could be created from a component, the articles could all be made from a single functional component that is simply called several times for every article in the data.

### Git Set up

- [ ] Fork the project into your GitHub user account
- [ ] Clone the forked project into a directory on your machine
- [ ] Create a pull request before you start working on the project requirements. You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

- [ ] Following the instructions in the `Header/index.js` file, create the Header component.

- [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

- [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

- [ ] Complete the carousel functionality in `Carousel.js`

- [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

- [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

- [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
