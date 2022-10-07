#  *Welcome to Drizzle Indumentaria* 

## Developer: Federico Lencina

### Proyect: React E-commerce

This proyect simulates a shop E-commerce. It's a single page application made with React. It has a landing page with
a carrousel and its link to navigate through the page. It its compoound the following links for navigating:

+ Home
+ Catalogo
+ Sweaters
+ Vestidos
+ Contact
+ Cart

#### Simulation gif
In this video. it is showed the process of purchasing a product (showing a succesfull alert), 
and one showing an error on shopping (showing an error alert when a person fills the form with a wrong data)

![Ecommerce-gif.gif](https://github.com/FedeNLencina/DrizzleIndumentaria-Lencina/blob/main/src/gif/Ecommerce-gif.gif)

Each product has its price and when you someone select one of them, it can selects the amount it wants to buy (up to ten each product),
and then, a buttom which leads to the cart appears.
Inside the cart it appears all the products that the person added or want to buy. Also it can remove but one product, some products, or all of them.
If a person doesn't have any products, there is a modal telling it that it has not any product and there appears the links referring to the type of diffrent products.

#### Dependencies. 

For the development of this proyect, some libraries were used. Here are them:

##### Seet Alert
This library was used for the modals when someone buys a product or when it failed to purchase. 
For installing it, must run this command:
> npm install sweetalert --save

And then import it inside the proyect:
> import swal from 'sweetalert':

###### Framer motion
This library was used in the hero, addindg a effect when someone gets in the landing page.
For installing it, must run this command:
> npm install framer-motion

And then import it inside the proyect:
> import { motion } from "framer-motion":

###### React-Bootstrap
This library was used to import some default components for the page.
For installing it, must run this command:
> npm install react-bootstrap bootstrap

To see the imports of the different components, you can check the React Bootstrap page: 
> https://react-bootstrap.netlify.app/

All of these dependencies can be install just running 
### `npm install`

And know, right below there is some default explanation just for running the proyect.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

> Try running this application and have fun!

#  *Contributors*

Federico Lencina (Maintainer). 
 > https://github.com/FedeNLencina


