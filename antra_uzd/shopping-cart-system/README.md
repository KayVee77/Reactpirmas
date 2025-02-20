# Shopping Cart System

This is a simple shopping cart system built with React. The application allows users to add and remove products from their shopping cart. It demonstrates the use of React's `useState` for state management and props drilling to pass data between components.

## Project Structure

```
shopping-cart-system
├── src
│   ├── components
│   │   ├── Cart.js          # Component to display the shopping cart
│   │   ├── ProductItem.js   # Component to display individual product details
│   │   └── ProductList.js    # Component to list all products
│   ├── App.js               # Main application component
│   └── index.js             # Entry point of the application
├── package.json             # Project configuration and dependencies
├── .gitignore               # Files and directories to be ignored by Git
└── README.md                # Project documentation
```

## Features

- **Product Listing**: Displays a list of products available for purchase.
- **Add to Cart**: Users can add products to their shopping cart.
- **Remove from Cart**: Users can remove products from their shopping cart.
- **State Management**: Utilizes React's `useState` to manage product and cart states.

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/shopping-cart-system.git
   ```

2. Navigate to the project directory:
   ```
   cd shopping-cart-system
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage

- Navigate to the product list to view available products.
- Click "Add to Cart" on a product to add it to your shopping cart.
- View your cart to see selected items and remove any items if needed.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.