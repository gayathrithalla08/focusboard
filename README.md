# FocusBoard – Task Management Dashboard

## About the Project

FocusBoard is a responsive task management dashboard built using React.js. It helps users organize, manage, and track their daily activities through a simple and user-friendly interface.

Users can create tasks, update existing tasks, delete tasks, search for tasks, and filter them based on status and priority.

The application also provides dashboard statistics and motivational Focus Notes to help users stay productive.

## Features

### Dashboard
- Displays total tasks.
- Displays tasks currently in progress.
- Displays completed tasks.
- Calculates the overall completion percentage.
- Updates statistics automatically when tasks change.

### Task Management
- Add new tasks.
- Edit existing tasks.
- Delete tasks with confirmation.
- Store task title, description, category, status, priority, and due date.

### Search and Filters
- Search tasks by title.
- Search is case-insensitive.
- Filter tasks by status:
  - All Tasks
  - To Do
  - In Progress
  - Completed
- Filter tasks by priority:
  - High
  - Medium
  - Low
- Combine search and filters.

### Focus Notes
- Displays motivational notes.
- Includes previous and next navigation.
- Includes slide indicators.

### Data Persistence
- Uses browser localStorage.
- Saves tasks automatically.
- Restores saved tasks when the application is reopened or refreshed.
- Loads sample tasks when no saved task data exists.

### Responsive Design
- Mobile: 390px
- Tablet: 768px
- Desktop: 1440px

## Technologies Used

- React.js
- Vite
- JavaScript
- HTML
- CSS
- React Hooks (useState and useEffect)
- Browser localStorage
- Lucide React Icons

## Project Structure


FocusBoard/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── Statcard.jsx
│   │   ├── FocusNotes.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   ├── SearchBar.jsx
│   │   └── FilterTabs.jsx
│   │
│   ├── data/
│   │   └── sampleTask.js
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── README.md
└── AI_USAGE.md


## Installation and Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code

### Step 1: Clone the Repository


git clone https://github.com/gayathrithalla08/focusboard.git




### Step 2: Open the Project Folder


cd FocusBoard

### Step 3: Install Dependencies


npm install


### Step 4: Start the Development Server


npm run dev


### Step 5: Open the Application

Open the local URL displayed in your terminal, usually:


http://localhost:5173


## Data Storage

FocusBoard uses browser localStorage to save task information.

No backend server or external database is required.

Task information is stored in the browser under the key:


focusboard-tasks


Clearing the browser's localStorage will remove the saved task data.

## Testing

The application was manually tested for:

- Adding tasks.
- Editing tasks.
- Deleting tasks.
- Confirmation before deletion.
- Searching tasks.
- Filtering by status.
- Filtering by priority.
- Dynamic dashboard statistics.
- Saving and restoring tasks using localStorage.
- Responsive layout on mobile, tablet, and desktop.

## Future Improvements

- User authentication.
- Backend and database integration.
- Task reminders and notifications.
- Calendar integration.
- Dark mode.
- Advanced task analytics.

## Author

Developed as a React.js task management dashboard project.