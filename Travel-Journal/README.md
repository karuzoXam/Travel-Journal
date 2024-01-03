# Travel Journal

Travel Journal is a simple, yet elegant React application that allows users to browse through a collection of travel destinations.

## Features

1. **Navbar**: The application features a navigation bar at the top of the page with a globe icon and the title of the application.

2. **Travel Cards**: The main content of the application is a list of travel cards. Each card represents a travel destination and includes the following information:
   - An image of the destination.
   - The location of the destination, with an icon and a link to view the location on Google Maps.
   - The title of the destination.
   - The date of the visit.
   - A description of the destination.

## Components

The application is composed of three main components:

1. **App**: This is the main component of the application. It imports the travel data and maps it to Card components.

2. **Card**: This component represents a travel destination. It receives the travel data as props and displays the information in a structured format.

3. **Navbar**: This component displays the navigation bar at the top of the page.

## Styles

Each component has its own CSS file for styling. The styles are imported directly into the corresponding component file.

## Main Entry Point

The application is rendered into the root element of the page by the `main.jsx` file. This file imports the App component and the global styles, and uses ReactDOM to render the App component into the root element.

## Data

The travel data is stored in a separate `data.js` file. This data is imported into the App component, where it is mapped to Card components.

