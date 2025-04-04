# your-board

Your-Board is a simple and customizable Agile board application designed to help teams manage tasks and workflows efficiently. It provides an intuitive interface for organizing tasks, tracking progress, and collaborating with team members.


https://github.com/user-attachments/assets/01cc5c6f-0b8b-435a-b448-197867837f8a



## Features
- **Kanban Board**: Visualize tasks in columns for better organization.
- **Sidebar Navigation**: Quickly switch between pages like Dashboard, Board, and Tasks.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Customizable UI**: Built with Tailwind CSS for easy styling and customization.
- **Keyboard Shortcuts**: Access features quickly with predefined shortcuts.
- **Tooltips and Skeletons**: Enhanced user experience with tooltips and loading skeletons.

## Pages

- **Dashboard**: Overview of key metrics and statistics.
- **Board**: Kanban-style board for managing tasks.
- **Tasks**: List of all tasks with filtering and sorting options.
- **Team**: Manage team members and roles.

## Technologies Used

- **React**: Component-based UI development.
- **Vite**: Fast development and build tool.
- **Radix UI**: Accessible and customizable UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide Icons**: Modern and customizable icon library.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/banoth-ravinder/your-board.git
   cd your-board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at http://localhost:8080.

##### Build for Production
To build the application for production, run:
```bash
npm run build
```

##### Preview Production Build
To preview the production build locally, run:
```bash
npm run preview
```

### Folder Structure

```bash
src/
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Application pages
├── App.tsx           # Main application component
├── main.tsx          # Entry point
```
