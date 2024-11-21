
### Frontend Documentation (`order-management-frontend/README.md`)

```markdown
# Order Management Frontend

## Description
The frontend for the Order Management System, built with Angular and Angular Material.

---

## Prerequisites

Before you start, make sure you have the following installed:

1. **Node.js** (v14 or later)
2. **Angular CLI** (v16 or later)
   ```bash
   npm install -g @angular/cli
   ```

---

## Installation

### Step 1: Clone the repository
```bash
git clone <repository-url>
cd frontend
```

### Step 2: Install dependencies
```bash
npm install
```

This will install all required libraries and modules, including:
- Angular Material
- Reactive Forms
- Angular Animations
- Angular HTTP Client

---

## Required Modules

The project uses the following Angular modules and libraries:

### Core Modules
- **BrowserModule**: Enables Angular applications to run in the browser.
- **AppRoutingModule**: Manages application routing.
- **ReactiveFormsModule**: For building and managing reactive forms.

### Angular Material Modules
- **MatInputModule**: Provides input fields with Angular Material styling.
- **MatButtonModule**: Provides styled buttons.
- **MatTableModule**: Displays tabular data in Material Design style.
- **MatFormFieldModule**: Wraps input fields for Material Design forms.
- **MatDialogModule**: Adds support for modals and dialog boxes.

### Other Modules
- **HttpClientModule**: Used for HTTP communication with the backend.
- **BrowserAnimationsModule**: Enables animations in Angular Material.

---

## Usage

### Step 3: Start the development server
```bash
ng serve
```

The application will be available at `http://localhost:4200`.

---

## Configuration

The frontend communicates with the backend API at `http://localhost:3000` by default.

### Change the API URL
To update the backend API URL, modify `src/environments/environment.ts`:
```typescript
export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
};
```

---

## Features

1. **Order Table**: Displays a list of all orders with options to view details and delete.
2. **Order Form**: Allows adding new orders by specifying `name`, `quantity`, and `price_per_unit`.
3. **Order Details Modal**: Opens a modal dialog to view detailed information about a selected order.

---

## Notes

1. Ensure that the backend API is running and accessible at `http://localhost:3000`.
2. To install Angular Material manually:
   ```bash
   ng add @angular/material
   ```

---

## Technologies Used

- **Framework**: Angular
- **UI Library**: Angular Material
- **Language**: TypeScript
```

---

### Backend Documentation (`order-management-backend/README.md`)

Вам не нужно изменять backend-документацию, если она уже соответствует вашему проекту. Если хотите, я могу дополнить backend-документацию с учётом дополнительных инструкций. 

Если потребуется добавить что-то ещё, напишите! 😊
