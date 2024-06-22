# Image Search

This repository contains the code for a simple image search using the Unsplash API. The application allows users to search for images by entering keywords and displays the results in a user-friendly layout. Users can also load more images using the "Show More" button.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can view a live demo of the application [https://surajsri23.github.io/image-search/.

## Features

- Search for images using keywords
- Display search results with images and links to their sources
- Load more images with the "Show More" button
- Responsive design for various screen sizes

## Technologies Used

- HTML
- CSS
- JavaScript
- Unsplash API

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/surajsri23/image-search.git
   ```

2. Navigate to the project directory:

   ```bash
   cd image-search
   ```

3. Open `index.html` in your preferred web browser to view the application.

## Usage

1. Open the application in your web browser.
2. Enter a keyword in the search input field and click the "Search" button.
3. View the search results displayed below the search bar.
4. Click the "Show More" button to load additional images.

## Code Overview

### HTML

The HTML file sets up the structure of the application, including the search form and the container for displaying search results.

### CSS

The CSS file styles the application, ensuring a responsive and visually appealing design.

### JavaScript

The JavaScript file handles the functionality of the application, including:

- Fetching images from the Unsplash API based on user input
- Displaying the fetched images in the search results container
- Handling pagination and the "Show More" button

### API Key

The Unsplash API requires an access key to fetch images. The key is stored in the `accesskey` variable in the `script.js` file. Replace the placeholder key with your own Unsplash API access key.

```javascript
const accesskey = "Zm9XBasZJhssIz6trolxWkRsgc3_aMRcL363HGIperI";
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or create a pull request.

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-branch
   ```

3. Make your changes.
4. Commit your changes:

   ```bash
   git commit -m "Add feature"
   ```

5. Push to the branch:

   ```bash
   git push origin feature-branch
   ```

6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file as needed for your project. If you have any questions or need further assistance, please don't hesitate to ask!
