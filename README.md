# RideX || Bike Reservation System

### [Live URL](https://ridex-alpha.vercel.app) | [Base URL (Server)](https://ridex-server.vercel.app)

### [Backend Repository](https://github.com/saifscripts/ridex-server)

## Introduction

RiderX offers an intuitive booking system for renting bikes, managing rentals, and applying discounts to rentals.

## Project Description

This UI project for RideX offers a smooth user experience with responsive designs, easy bike management, and an integrated coupon system for discounts. Users can book bikes, manage rentals, and apply winning coupons from a spin wheel feature.

## Features

- User Authentication (Sign Up, Login)
- Bike Browsing, Filtering & Sorting
- Side by side bike comparison
- Bike Booking and Rental Management
- Coupon Integration for Discounts
- User & Admin Dashboards
- Profile management
- Theme switcher (Toggle between light and dark mode)
- Responsive Design for mobile, tablet, and desktop
- Improved UI/UX with animation and transition

## Technology Stack

- React, TypeScript, Redux Toolkit, RTK Query, Tailwind CSS, Shadcn

## Prerequisites

- Node.js and npm/yarn installed.
- Any Web browser to view the application

## Installation Guideline

Follow this step-by-step guide to run the server on your local machine.

### 0. Prerequisites

- Node.js and npm/yarn installed.
- Any Web browser to view the application.

### 1. Clone the Repository

First, clone the repository to your machine using the following command:

```
git clone https://github.com/saifscripts/ridex-client
```

### 2. Change Directory

Next, navigate to the project directory with this command:

```
cd ridex-client
```

### 3. Install Dependencies

Before running the app, you need to install all dependencies. You can do this using either Yarn or npm.

#### Using Yarn

```

yarn install

```

#### Using npm

```

npm install

```

### 4. Add a Configuration File

To run the app, create a `.env` file in the root folder with the following properties (I have included a few demo values here for testing):

```
VITE_BASE_URL=http://localhost:5000
```

### 5. Run the App

Now, you're ready to run the app. Use one of the following commands to start the server.

#### Using Yarn

```
yarn dev
```

#### Using npm

```
npm run dev
```

That's it! The application should now be running locally.

## Usage

### User End:

- Sign up for an account to start using the service.
- Navigate to the "All Bikes" page to browse available bikes.
- Utilize search, filter, and sorting options to find the perfect bike.
- If needed, use the compare feature to compare multiple bikes side by side.
- Click on a bike to view its detailed specifications and availability.
- Choose your bike and initiate the rental by paying a 100 BDT advance.
- Head to your dashboard to monitor your rental status.
- Return the bike in person at the designated location.
- Once the bike is returned, pay the remaining balance on the "My Rental" page.

## Admin Guide:

- Navigate to the "Manage Rental" page.
- Select the return time to calculate the total rental cost.
- Mark the bike as returned once the process is complete.
- Manage bikes, coupons, and users directly from the dashboard.
