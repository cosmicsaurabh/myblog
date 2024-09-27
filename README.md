This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Blog App with Infinite Scroll, Theming, and Offline Handling

This **React Native** blog app features infinite scrolling, dynamic theming (light/dark modes), and offline handling. Users can read and interact with blog content, toggle between themes, and receive notifications when the network status changes.

## Features

- **Infinite Scrolling**: Automatically loads more blogs as the user scrolls.
- **Dynamic Theming**: Supports both light and dark themes that can be toggled dynamically.
- **Offline Handling**: Displays toast notifications for connection loss and reconnection.
- **Blog Interactions**: Users can like and share blogs, and view comments.
- **Smooth UI**: Optimized for performance with `FlatList` and placeholder images for smooth scrolling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Components](#components)
- [Hooks](#hooks)
- [Context](#context)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-app.git

2. Navigate to the project directory:

   ```bash
      cd blog-app
   ```
3. Install Dependencies:

   ```bash
      npm install
   ```
4. Run the app:
   ```bash
      npx react-native run-android # For Android
      npx react-native run-ios     # For iOS

## Usage

 *Blog List*: The main screen lists blogs with infinite scrolling.

 *Blog Details*: Users can tap on a blog to view full details.

 *Like and Share*: Users can interact with blog posts by liking and sharing them.

 *Toggle Theme*: Switch between light and dark modes using the theme toggle button.

 *Offline Handling*: Get notified when your device loses or regains internet connectivity.


## Folder Structure
   ```bash
      .
├── src
│   ├── assets                 # Static images and other assets
│   ├── components             # Reusable UI components
│   │   ├── BlogCard.js        # UI component to display individual blog info
│   │   ├── BlogList.js        # List of blogs with infinite scroll
│   │   ├── CommentSection.js  # Component for displaying and adding comments
│   │   ├── LikeButton.js      # Button for liking a blog post
│   │   ├── ShareButton.js     # Button for sharing a blog post
│   │   └── ToggleTheme.js     # Component for toggling light/dark themes
│   ├── context                # React Context for global state management
│   │   ├── BlogContext.js     # Manages blog data and pagination
│   │   ├── ThemeContext.js    # Manages theme settings (light/dark mode)
│   │   └── UserContext.js     # Manages user session data and preferences
│   ├── data                   # Sample static data for blogs and users
│   │   ├── blogs.js           # Mock data for blog posts
│   │   └── users.js           # Mock data for users
│   ├── hooks                  # Custom React hooks
│   │   └── useInfiniteScroll.js # Hook for handling infinite scroll functionality
│   ├── screens                # Application screens
│   │   ├── BlogDetailScreen.js # Screen for displaying blog details
│   │   └── HomeScreen.js      # Main screen displaying the blog list
│   ├── utils                  # Utility functions and constants
│   │   └── theme.js           # Utility functions for managing themes
└── App.js                     # Main entry point for the app
   ```
Components
----------

### BlogCard

*   Displays a summary of a blog, including the title, image, and preview text.
    

### BlogList

*   Displays a list of blogs with infinite scrolling using the FlatList component.
    

### CommentSection

*   Displays a comment section where users can view comments to a blog.
    

### LikeButton

*   A button that allows users to "like" a blog post, showing a like count.
    

### ShareButton

*   A button that allows users to share blog posts via social media or other platforms.
    

### ToggleTheme

*   A toggle switch to change the app's theme between light and dark mode.
    

Hooks
-----

### useInfiniteScroll

*   Custom hook used to load more blogs as the user scrolls. Monitors the hasMore state to load additional content or notify when all blogs have been loaded.
    

Context
-------

### BlogContext

*   Provides state management for blogs, including pagination and infinite scroll.
    

### ThemeContext

*   Handles the theme toggling between light and dark modes, sharing the current theme state throughout the app.
    

### UserContext

*   Manages user-related information like preferences and session data.
    

Contributing
------------

Feel free to fork this project, submit issues, or create pull requests!

1.  Fork the repository.
    
2.  Create a new feature branch: git checkout -b feature/your-feature-name.
    
3.  Commit your changes: git commit -m 'Add new feature'.
    
4.  Push to the branch: git push origin feature/your-feature-name.
    
5.  Open a pull request.




## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

\
