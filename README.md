# AK Phones

## NextJS 16 + React 19 + Zustand + TypeScript + Postgres + MUI

## About

I originally built this mock e-commerce style website from a JSON file I found online which contains retail phone store data with accompanying images. After I completed that, I transformed the JSON data into a db script and inserted the data into a Postgres database at Vercel.com.

Here's a link to preview the site: <a target="_blank" href="https://ak-phones.netlify.app/">AK Phones</a>

Here's a link to the code base: <a target="_blank" href="https://github.com/AgeBK/ak-phones">GitHub</a>

I wrote all of the code (JS/CSS/HTML) myself, none of it has been copied and AI has not been used (I used the MUI Autocomplete Component for the search).

## Description

I've included a Search bar using MUI Autocomplete. The site also makes use of a custom hook. For styling, it's using Flexbox via CSS modules. The site also includes loading, not found and error components. Responsive design techniques have been taken into account, the site presents nicely on mobile and desktop. I have used semantic HTML, compressed the product images and taken accessibility and SEO into consideration. The site scores high 90's and 100's in lighthouse testing.

I have also built an admin panel portal where products on the site can be managed (CRUD operations) which includes the ability to upload images.

The site uses a Postgres database hosted by Vercel with all of the products for the site. Various calls are made to the db for fetching data displayed throughout the site. Examples are

- fetch by phone brand
- fetch by phone by id
- and many more

I've built a shopping cart as well which you can add products to. The cart uses Zustand which can be accessed anywhere in the site. You can increase and decrease amounts and enter a correct discount code. Calculations are automatically made in the cart for a variety of discounts that apply to a range of many products. The idea being that the user can have a simulated on-line shopping experience.

## Features

- Admin panel where CRUD operations can be performed for products
- Over 200 products
- Over 50 components
- Search bar (MUI auto complete)
- Shopping cart
- Responsive carousel
- Filters
- Dynamic header/blurb on Category page
- Sorting (alphabetical, price, sale items)
- Paging
- Items per page selector

## Performance

- Scores high 90-100 in all aspects of lighthouse report.

## Pages.

The <b>home</b> page lists the specials that the site has to offer, similar to what you'd see online, it's basically a navigation page/entry point for the current specials and the other 2 pages.

The <b>category</b> page lists all the products for particular brands of phones depending what URL you come in on. eg: samsung, apple and many more. The phones displayed can be filtered, sorted, items per page can be adjusted.

The <b>product</b> page displays all the details about an individual product. I've created a skeleton, carousel and masonary components that I use on the product page.

## Admin Pages.

The <b>manage</b> landing page displays a list of all the products in the database. Actions such as add/edit/delete product can be performed here. This page is similar to the category page which has paging, filtering and sorting. It also has search by id and name.

The <b>manage</b> product page displays different views of whichever action you'd like to perform (add/edit/delete). Each field available from the database is displayed as well as the product image. If you choose to delete a product, a confirmation modal is displayed.

<a target="_blank" href="https://ak-phones.netlify.app/manage">Link to admin</a>

Another similar site that I have built <a target="_blank" href="https://ak-fine-wines-ts.netlify.app">AK Fine Wines</a>
