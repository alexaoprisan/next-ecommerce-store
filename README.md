# Next.js Ecommerce Store

## This project aims to design and develop an ecommerce store using Next.js. The store will feature essential functionalities such as product listing, single product pages, cart management, checkout process, and a thank you page. It will also incorporate cookies for cart management and utilize a PostgreSQL database for storing product information.

## The project is created to provide a custom ecommerce solution tailored to specific requirements. While there are existing ecommerce platforms available, building a custom solution offers flexibility and customization options that may not be available in pre-built solutions.

### This project is created by Johanna-Maria-Alexandra Oprisan.

#### The project utilizes Next.js framework for building the frontend components. It incorporates TypeScript for type safety and utilizes JSDoc for documenting code. Backend functionalities are implemented using PostgreSQL for database management. Automated tests are included to ensure the reliability of critical functionalities.

##### The software runs as a web application accessible through a web browser.

###### The project was initiated on the 30.01.2024. It has evolved over time to incorporate additional features and improvements.

Technologies Used:

Next.js
TypeScript
PostgreSQL
HTML/CSS
JavaScript
Tailwind

Screenshots
[Insert screenshots here]

Technical TODOs:

Pages Setup:
Create Pages:
[x]Create Products page component.
[x]Create Single Product page component.
[x]Create Cart page component.
[x]Create Checkout page component.
[x]Create Thank You page component.

Products Page:
List Products:
[x]Fetch product data from the database.
[x]Display at least 4 different products.
[x]Ensure each product is linked to its single product page.
[x]Add relevant h1 element to the page.
[x]Add data-test-id="products-link" to the header link to navigate to the Products page.

Single Product Page:
Display Product:
[x]Retrieve product details based on the product ID from the URL.
[x]Display product name inside an h1 element.
[x]Display product image with data-test-id="product-image".
[x]Display product price inside an element with data-test-id="product-price".
[x]Add quantity input with data-test-id="product-quantity".
[x]Implement add to cart functionality with data-test-id="product-add-to-cart".

Cart Page:
Manage Cart:
[x]Display all items added to the cart.
[x]Display quantity of each item with data-test-id="cart-product-quantity-<product id>".
[x]Display product subtotal (price × quantity).
[x]Implement remove button for each item with data-test-id="cart-product-remove-<product id>".
[]Display total price with data-test-id="cart-total".
[]Implement checkout button with data-test-id="cart-checkout".

Checkout Page:
Collect Information:
[]Collect shipping and payment information.
[]Add HTML attributes for all form inputs.
[]Ensure form prevents submission with empty fields.
[]Implement confirm order button with data-test-id="checkout-confirm-order".

Cookies:
Set up Cookie Management:
[]Use cart cookie to store cart information.
[]Implement security measures to prevent unauthorized modifications.

Database:
Database Configuration:
[]Set up PostgreSQL database.
[]Create necessary tables for storing product and user data.
[]Establish connection and perform CRUD operations.

TypeScript / JSDoc:
Type Definitions:
[]Convert at least 2 pages and 4 other files to TypeScript.
[]Define React props types.
[]Ensure proper usage of JSDoc comments.

Tests:
Testing Suite:
[]Write end-to-end tests for critical functionalities.
[]Write unit tests for functions related to cart management.
[]Set up GitHub Actions for automated testing.

Design TODOs:
UX Design:
User Flows:
[]Design user flows for login, signup, notification, and checkout processes.
[]Create wireframes for all pages.

Visual Design:
Design System:
[]Define color palette.
[]Determine font sizes and styles.
[]Design individual pages including user page, friend list, and notification popup.

Data Modeling TODOs:
Entity Identification:
[]Define entities such as User, Product, Notification.
[]Establish relationships between entities (e.g., User-Friend, User-Notification).
[]Design data models for each entity.

Deployment:
Deploy Application:
Deploy application to Fly.io.
Update GitHub repository with deployment details.
Documentation:
Readme Creation:
Write detailed readme including title, description, technologies used, setup instructions, and deployment guidelines.
Include screenshots of key pages.
