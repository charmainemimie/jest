# Jest for Testing a React App  

## Structure of Tests  
- **`describe` blocks**: Group related tests, like a folder that organizes all tests for a specific component.  
- **`it` blocks**: Define individual test cases. Think of them as saying, _"It should do this or that."_  

## Using `expect` Matchers  
Jest provides `expect` matchers to check if test results match your expectations. Here are some common ones:  

- **`toBe()`** – Checks basic values or if two things are exactly the same.  
- **`toEqual()`** – Checks if objects or arrays have the same content.  
- **`toBeInTheDocument()`** – Ensures that an element exists in the rendered output (from `@testing-library/jest-dom`).  
- **`toHaveTextContent()`** – Verifies that an element contains specific text.  
- **`toHaveLength()`** – Checks the length of an array, string, or NodeList.  

---

## React Testing Library (RTL)  

The **React Testing Library** is a tool that helps you test React components in a way that simulates how a real user interacts with them.  

### Commonly Used Tools in React Testing Library  
- **`render()`** – Renders a React component in a virtual DOM for testing.  
- **`screen`** – Helps you query the DOM to find elements by text, role, label, or test ID.  
- **`userEvent`** – Simulates user interactions such as clicking, typing, and selecting.  


- **`installing jest`** – npm install --save-dev @testing-library/react @testing-library/jest-dom

