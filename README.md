# CS-465

#Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

There were multiple types of frontend development that I used on my project. The Express HTML pages used handlebars templates to create a page before sending it to the browser. It was an easy and simple way to show information for each of the trips. JavaScript was another tool that was usedd to help response to user actions. The last piece that was created was the SPA or single page application. Instead of using express, we used angular on the client side. Using API calls allowed the page to update dynamically. It helped the admin page to feel faster at adding and editing trips. 

To store the trip data, the backend used a NoSQL MongoDB database. This allowed the information to be stored in a flexible format using JSON style documents instead of the more traditional tables that are typically used in databases. All of the information for one trip could be stored together rather than in separate tables. 

#Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is a data format and JavaScript is a programming language. JavaScript creates something that is functional while JSON is a way to structure data. 

An example of refactoring code was when we used the trip display information and made it into reusable components. We could save time instead of writing the same code over an dover again which made the application easier to manage. We used components in Angular like the trip-card or trip-listing items to organize the code and make it easier to update at a later time. 

#Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

All of those are important parts of API testing. Methods, like GET, POST, PUT, and DELETE are requests that are being made. GET: retrieves specific data, POST: creates new data, PUT: updates existing data, DELETE: removes specific data. Endpoints are the API routes that handle each of those requests. Testing to make sure that the endpoints work ensure that your front end and back end are communicating smoothly with each other and everything is updating as needed. We used security on two separate areas of our application. The first one was the login for the SPA. An admin user needed to be logged in before they could add or edit a trip in the system. The other time was when viewing the reservations page. A separate login was created for a user to login and view their upcoming trips. 

#Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This was an exciting class to take. It was the first time that I had been able to work a full stack application and not just the front end or back end. It was interesting to see how those, the database and API calls all work together to make things work. I was able to develop skills by using the MEAN stack, which was MongoDB, Express, Angular and Node.js. I was also able to work with RESTful APIs, JSON data and routing. These are all skills that are going to help me later in life, especially if I want to continue down the full stack development route. 
