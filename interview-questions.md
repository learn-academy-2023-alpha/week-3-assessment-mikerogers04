# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a mixture of JavaScript and HTML into one essentially. Standard syntax for JS for referencing variables is different. Also, naming conventions for HTML attributes must be in camelCase. The major syntax difference between HTML and JSX tags is that JSX tags have no identifier on them. For example, <h1></h1> are header tags for a webpage and can be identified by the "h1". JSX fragment tags are <></> empty tags without any kind of identifier. The "h1" identifier also always for CSS to be implemented by calling upon the "h1" identifier in a CSS file. JSX does not give that type of implementation. CSS can be written inline or in a separate CSS file and can be referenced inside the JSX tags. 

Researched answer: JSX(JavaScript markdown syntax extension): In JSX class names are not used because class is a keyword in JS already. Therefore, in JSX className is the naming convention used to give CSS attributes or behavior that piece of code is doing. 

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a package manager that can be installed through a terminal. Yarn is primarily used for testing files and can only be used on test.js extension files. Yarn dependencies must be installed in order to properly run the tests on the provided file. The three folder/files that appear after installation are yarn.lock, node_modules, and package.json. node_modules holds all the available JS libraries. yarn.lock is more of an update log file. package.json allows the dependencies to be installed. 

Researched answer: Package.json describes the package. yarn manages all the files/directories and installed dependencies that you are working with. 

3. What is a React component?

Your answer: A React component is one piece of an entire React application. React components allow for specific, defined functions to reside in. Each React component is independent of one another, but essentially are invoked in a main component. That main component is typically called App.js where in best practice is where all logic for an app resides and component invocation. Data can be passed to components using props. Data can also be passed from a component to the main component using prop functions. React components are typically designed to be reusable for all kinds of data. 

Researched answer: React components are mostly made up of JS code and importantly they return markup language to the browser. Components mostly are comprised of functions that become reusable over and over again. 

4. What is the difference between state values and props in React?

Your answer: React state values are always being updated. When a useState is initially setup, it will have a default static value to start. But, as functionality is implemented in components, the useState will be updated by the defined setter method. React props are data being passed into components. This data is usually the same type and is not updated constantly like states values. 

Researched answer: State values go hand and hand with what components do logically. If a component is holding data then it would be considered a logic component. If it does not hold data, it would be considered a display component. useState is a React hook which allows for built-in methods for components to be reusable in the future. It is very important to remember to import your useState so that it can be initialized and updated properly. State values can be referenced in JSX to be rendered. Props(properties) allows data to be passed between components. Props get passed within component invocation or within the component function. 

5. What is the DOM?

Your answer: Document Object Model is the framework for which React is structured. 

Researched answer: DOM is essentially what the user is looking at in the browser. When working with React, whichever component you are working on, only that piece will be rendered on the browser side of the application. 

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: An HTML div tag is a general container tag. Container tags can contain class names that can be referenced in CSS files. span tags are another HTML container tags but, allow different functionality. 

Researched answer: Both div and span tags are general HTML container tags. div tags are used for larger content and take up space on the entire browser page. span tags are used for in-line content and allow for CSS styling to certain parts of content.  

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: OOP is a programming idea that helps make the complexity of large applications into a way to manage data so that the data can be changed without causing problems for the entire program. 

2. Ruby: Ruby is a OOP language that is pre-installed on Mac OS. Ruby can be used within the terminal and the environment allows users to input and get produced outputs. 

3. Implicit return: A return will be automatically given if not one provided in Ruby. 

4. Ruby blocks: An anonymous function passed to a Ruby method that determines the outcome. 

5. Ruby hashes: A hash is a dictionary container with key-pair values similar to that of an object. 
