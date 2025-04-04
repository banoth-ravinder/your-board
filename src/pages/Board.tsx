
import React, { useState } from 'react';
import TaskModal from '../components/TaskModal';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
}

const Board: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Design new dashboard',
      description: 'Create wireframes for the new dashboard',
      status: 'todo',
      priority: 'high',
      assignee: 'Jane Smith',
    },
    {
      id: 2,
      title: 'Setup API endpoints',
      description: 'Implement backend API endpoints for user management',
      status: 'inProgress',
      priority: 'medium',
      assignee: 'John Doe',
    },
    {
      id: 3,
      title: 'Update documentation',
      description: 'Update the user documentation with new features',
      status: 'review',
      priority: 'low',
      assignee: 'Alex Johnson',
    },
    {
      id: 4,
      title: 'Fix login bug',
      description: 'Fix the login issue reported by users',
      status: 'done',
      priority: 'high',
      assignee: 'John Doe',
    },
  ]);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const columns = [
    { id: 'todo', title: 'To Do' },
    { id: 'inProgress', title: 'In Progress' },
    { id: 'review', title: 'Review' },
    { id: 'done', title: 'Done' },
  ];

  const openTaskModal = (task?: Task) => {
    if (task) {
      setSelectedTask(task);
    } else {
      setSelectedTask(null);
    }
    setIsModalOpen(true);
  };

  const closeTaskModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleSaveTask = (task: Task) => {
    if (task.id) {
      // Update existing task
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      // Add new task
      const newTask = {
        ...task,
        id: Math.max(0, ...tasks.map((t) => t.id)) + 1,
      };
      setTasks([...tasks, newTask]);
    }
    closeTaskModal();
  };

  const getTasksByStatus = (status: string) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="text-xl font-bold">Sprint Board</h1>
        <button className="btn btn-primary" onClick={() => openTaskModal()}>
          Add Task
        </button>
      </header>

      <div className="board">
        {columns.map((column) => (
          <div key={column.id} className="board-column">
            <div className="column-header">
              <span>{column.title}</span>
              <span className="task-counter">{getTasksByStatus(column.id).length}</span>
            </div>
            {getTasksByStatus(column.id).map((task) => (
              <div key={task.id} className="task-card" onClick={() => openTaskModal(task)}>
                <div className="task-title">{task.title}</div>
                <div className="task-description">{task.description}</div>
                <div className="task-meta">
                  <div className={`task-badge priority-${task.priority}`}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </div>
                  <div className="text-muted">{task.assignee}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <TaskModal
          task={selectedTask}
          onClose={closeTaskModal}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
};

export default Board;
