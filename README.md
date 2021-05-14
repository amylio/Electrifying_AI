![AIimage](https://github.com/amylio/Electrifying_AI/blob/main/static/images/ElectrifyingAIbanner.png)

This repo is a dedicated space to use `Github Pages` as the hosting platform for a website that was created for the final project. 

## Project Topic and Overview

As part of the final project for the Data Analytics Bootcamp at UC Berkeley, our team chose to do an analysis on Energy consumption, penetration of Electric Vehicles and overall impact to the environment. During the data gathering phase, we found that access to robust datasets were limited. Therefore, the project was centralized to focus on reviewing data for the state of California only. We utilized the data found to build a `Machine Learning` model to predict the likelihood of Electric Vehicle ownership based on demographics.

As part of the project requirement, we needed to create a dashboard and an interactive element. To accomplish this, we incorporated visualizations from the analysis into a [Google Slides Deck](https://docs.google.com/presentation/d/1yLtCgrkCrZDrA3M79BOugkTuRkmWJuCp/edit#slide=id.gd9982dd371_0_0) using [Tableau](https://public.tableau.com/profile/valerie.achoa#!/vizhome/CaliforniaEVSurv/Dashboard1) and [Seaborn](https://github.com/RussellShelley/Energy_Analysis/blob/main/Visualization/Python%20Visuals.ipynb), as well as created an interactive [webpage](https://amylio.github.io/Electrifying_AI/).

The website was created using [HTML](https://github.com/amylio/Electrifying_AI/blob/main/index.html), [CSS](https://github.com/amylio/Electrifying_AI/blob/main/static/css/style.css) and [Javascript](https://github.com/amylio/Electrifying_AI/blob/main/static/js/app.js) to be a visual and interactive representation of the project contents. The interactive elements included are:

* Clickable tabs to toggle between pages
* A Tableau map showing the vehicle population by fuel type in the state of California
* A section where you can find the charging stations closest to your location
* And lastly a leaflet map of all of the lithium salt mines globally. 

The contents in the webpage was separated into 5 sections (or tabs). They are:

* **About** - Description of the project, a review of the Machine Learning process and analysis of the results.
* **EV Information** - History, statistics, average charging cost and latest news from Energy.ca.gov website.
* **Vehicle Population Map by Fuel Type** - Link to visual map generated using Tableau with the data collected of vehicle population by fuel type for the state of California.
* **Charging Station Finder** - Link to map of charging stations based on location that user can enter zipcode/address from Openchargemap.org.
* **Consumption and Impact** - Visual map to explore the sources of the global lithium trade.
