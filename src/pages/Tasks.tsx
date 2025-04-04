
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

const Tasks: React.FC = () => {
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

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'todo':
        return 'To Do';
      case 'inProgress':
        return 'In Progress';
      case 'review':
        return 'Review';
      case 'done':
        return 'Done';
      default:
        return status;
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="text-xl font-bold">Tasks</h1>
        <button className="btn btn-primary" onClick={() => openTaskModal()}>
          Add Task
        </button>
      </header>

      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ padding: '0.75rem' }}>Title</th>
              <th style={{ padding: '0.75rem' }}>Status</th>
              <th style={{ padding: '0.75rem' }}>Priority</th>
              <th style={{ padding: '0.75rem' }}>Assignee</th>
              <th style={{ padding: '0.75rem' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '0.75rem' }}>{task.title}</td>
                <td style={{ padding: '0.75rem' }}>{getStatusLabel(task.status)}</td>
                <td style={{ padding: '0.75rem' }}>
                  <span className={`task-badge priority-${task.priority}`}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                </td>
                <td style={{ padding: '0.75rem' }}>{task.assignee}</td>
                <td style={{ padding: '0.75rem' }}>
                  <button className="btn btn-secondary" onClick={() => openTaskModal(task)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Tasks;
