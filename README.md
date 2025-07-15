
# Simple Employee Management System

A React-based application for managing employee details with authentication, form validation, data grid display, and email notifications.

---

## Features

- **Authentication**: Integrated Clerk for secure user authentication. Only logged-in users can access the main app.
- **Employee Form**: Uses React Hook Form with Zod for validation.
- **Data Grid**: Displays employee data using AG Grid with sorting and filtering enabled.
- **UI Styling**: Styled with ShadCN UI for a modern, responsive interface.
- **Data Persistence**: Employee data is stored in `localStorage` to retain information across sessions.
- **Email Notification**: Automatically sends employee details via email upon successful submission and logs the result in the console.

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Subhojit Mitra18/Clapgrow_React-Task.git
   cd foldername


2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Clerk**

   * Sign up for [Clerk](https://clerk.dev/).
   * Get your frontend API key and other necessary credentials.
   * Update the Clerk provider configuration in the app with your credentials.

4. **Run the Application**

   ```bash
   npm run dev
   ```

5. **Environment Variables**

   * Ensure required environment variables for Clerk and email service are set up in a `.env` file:


---

## Approach & Implementation Notes

* **Authentication**: Implemented using Clerk React SDK, protecting routes with Clerk’s `SignedIn` and `SignedOut` components.

* **Form Management & Validation**: Leveraged React Hook Form combined with Zod schema validation for a clean, maintainable form structure.

* **Data Grid Display**: Used AG Grid’s React integration, enabling both filtering and sorting features out of the box.

* **UI Styling**: Applied ShadCN UI components, focusing on clarity and user-friendly layouts.

* **Data Persistence**:
  ✅ **Chosen Method**: `localStorage`.

  * Employee data is saved to `localStorage` using:

    ```js
    localStorage.setItem('employees', JSON.stringify(data));
    ```
  * On app load, data is retrieved from `localStorage` to initialize state.

* **Email Trigger**:

  * Upon form submission, the app sends an email containing employee details.

---

## Dependencies

* React
* React Hook Form
* Zod
* AG Grid
* Clerk React SDK
* ShadCN UI

---

## License

This project is open-source and available under the [MIT License](LICENSE).
