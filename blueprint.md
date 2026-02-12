# Toto Number Generator

## Overview

This project is a web application that generates random numbers for a lottery game, commonly known as "Toto." It provides a simple and interactive user interface for generating and displaying the numbers.

## Project Outline

### Styling and Design (style.css)

*   **Layout:** Centered content with a clean and spacious layout.
*   **Typography:** Clear and readable fonts, with a larger font size for the generated numbers.
*   **Color Scheme:** A modern and visually appealing color palette.
*   **Effects:** Subtle shadows and transitions to enhance the user experience.

### Main Page (index.html)

*   **Structure:** A standard HTML5 document.
*   **Content:**
    *   A main heading for the application title.
    *   A custom web component, `<toto-generator>`, which encapsulates the number generation functionality.

### Web Component (main.js)

*   **`TotoGenerator` Custom Element:**
    *   **Encapsulation:** Uses Shadow DOM to keep its style and behavior separate from the main document.
    *   **Functionality:**
        *   A "Generate" button to create a new set of numbers.
        *   A display area to show the generated numbers.
    *   **Logic:** Generates 6 unique random numbers between 1 and 49.

## Current Plan

*   **Task:** Convert the current `index.html` into a Toto Number Generator.
*   **Steps:**
    1.  Modify `index.html` to include the `<toto-generator>` custom element and update the title.
    2.  Create the `TotoGenerator` web component in `main.js`.
    3.  Add styles to `style.css` to create a modern and visually appealing interface.
