# Student Portal - Final Project

Welcome to **Student Portal**, an all-in-one platform designed to help students find accommodations, buy and sell goods, and connect with other students. This project aims to streamline the search for housing, simplify transactions for used items, and foster community engagement among students. It was developed as part of my final project for the ALX Software Engineering program.

## Features
1. **User Authentication & Profiles**
   - User registration, login, and profile management.
   - User roles: Tenant, Landlord, Buyer, Seller.
   
2. **Accommodation Listings**
   - Add, search, and browse accommodation listings.
   - Search filters: location, price, room type, etc.
   - Detailed listings with images, descriptions, and contact info.

3. **Marketplace for Buying & Selling**
   - Post, browse, and search items in various categories (textbooks, furniture, electronics, etc.).
   - Direct communication between buyers and sellers.
   - Optionally: Payment integration via Stripe/PayPal.

4. **Real-Time Messaging**
   - In-app chat between users for negotiating deals or discussing accommodation details.
   - Notifications for new messages and updates.

5. **Reviews & Ratings**
   - Users can leave reviews and ratings for landlords, accommodations, buyers, and sellers.
   - Build trust and reliability within the platform.

6. **Admin Panel**
   - Manage users, listings, and reports.
   - Content moderation.


## Tech Stack
- **Front-End**: React.js for the user interface and user experience.
- **Back-End**: Flask, a lightweight Python web framework for handling server-side logic.
- **Database**: MongoDB for data storage (users, listings, messages).
- **Real-Time Messaging**: Socket.IO for enabling real-time chat between users.
- **Payment Integration**: Stripe/PayPal for secure payments (optional feature).
- **Maps Integration**: Google Maps or OpenStreetMap for displaying accommodation locations.

## Installation and Setup

### Prerequisites
- **Node.js** (v14+)
- **MongoDB** (either locally or using a cloud provider like MongoDB Atlas)
- **Stripe/PayPal API keys** (if implementing payments)
- **Google Maps API Key** (if using Google Maps)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/student-portal.git
   cd student-portal
