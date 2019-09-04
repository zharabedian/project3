# ZEL Button - [Click to View Live App](https://zel-button.herokuapp.com/)

## What is it?

**ZEL Button** is a personalized AWS IOT button. It allows first responders and emergency contacts to be notified instantly, eliminating the phone operator middle man and speeding up response time. 

Customize and update your button anytime with online profile maintenance. Make custom messages to send to your emergency contact, and a different message to send to emergency response teams. This allows zel button to be used in a variety of situations, and by a variety of different people.



## How to Use

No Installation necessary. Open app by clicking on url link at the top of this guide. You will also need to purchase an Amazon IoT Enterprise button. 

1. Sign Up
Create your login information, which is completely safe and secured.

2. Customize Your Button.
Click "Customize Your Button" if you are setting up your button for the first time. Enter the Serial Number of your button, as well as your personal information, and your emergency contact's information.

3. Use Your Button.
Simply click your button once at any time to trigger a text message to your emergency contact.

4. Update Your Button.
Log back in to your account at any time to update your button's serial number, your information, or your emergency contact's information.


## Tech Stack:

###Front End/Client Side

* Html, CSS, JavaScript, and JQuery:
The site uses HTML, CSS, JavaScript, and jQuery to dynamically updates the site's contents.

* [CSS Framework](https://getbootstrap.com/): 
Bootstrap is one of the leading open-source CSS framework directed as a responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components which sleekly styles our website and quickly validate username emails.

* React (https://reactjs.org/): 
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

###Back End

Server Side Program
Node.js [https://nodejs.org] is an open source server environment. Zel Button utilizes the Express framework to easily connect the application from front to back end utilizing get, put and post requests and using MongoDB as the back end database.

Framework
Express [https://expressjs.com/]:
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Database
MongoDB [https://www.mongodb.com/]: MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.

AWS Lambda [https://aws.amazon.com/lambda/]:
AWS Lambda is a managed AWS service that allows you to run "serverless code" independently from existing resources in your environment. Zel Button utilizes a lambda function to query the MongoDB and send the results to SNS.

SNS Service [https://aws.amazon.com/sns/]:
Amazon Simple Notification Service (SNS) is a highly available, durable,secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications. Zel Button uses SNS to notify emergency contacts and responders.

Deployment
Heroku [https://dashboard.heroku.com/login]:
Heroku is a cloud platform that lets developers quickly build, deliver, monitor, scale and deploy apps.

User Authentication
Firebase [https://console.firebase.google.com/u/0/]:
Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. Zel Button utilizes Firebase to securely allow users to sign in and sign up.


## Future Directions

1. 4G IOT Device
- Scale button to work with 4G IoT button which will allow the button to not be reliant on WiFi, making the button usable anytime, anywhere.

2. Customizable User Dashboard
- Sign in to your customized account, which includes forms and data specific to your situation and your button.
