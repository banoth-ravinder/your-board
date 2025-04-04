
import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { id: 1, title: 'Active Sprints', value: 2 },
    { id: 2, title: 'Total Tasks', value: 24 },
    { id: 3, title: 'Completed Tasks', value: 16 },
    { id: 4, title: 'Team Members', value: 8 },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button className="btn btn-primary">New Sprint</button>
      </header>

      <div className="dashboard-stats">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="text-lg font-bold mb-md">Current Sprint Progress</h2>
        <div className="flex gap-md">
          <div style={{ width: '70%', height: '20px', backgroundColor: 'var(--border-color)', borderRadius: 'var(--radius)' }}>
            <div
              style={{
                width: '60%',
                height: '100%',
                backgroundColor: 'var(--primary-color)',
                borderRadius: 'var(--radius)',
              }}
            ></div>
          </div>
          <span>60%</span>
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-bold mb-md">Recent Activity</h2>
        <ul style={{ listStyle: 'none' }}>
          <li className="mb-sm">
            <div className="flex items-center gap-sm">
              <span>👤</span>
              <div>
                <strong>John Doe</strong> completed task <strong>Update user interface</strong>
                <div className="text-sm text-muted">2 hours ago</div>
              </div>
            </div>
          </li>
          <li className="mb-sm">
            <div className="flex items-center gap-sm">
              <span>👤</span>
              <div>
                <strong>Jane Smith</strong> created a new task <strong>Fix login bug</strong>
                <div className="text-sm text-muted">3 hours ago</div>
              </div>
            </div>
          </li>
          <li className="mb-sm">
            <div className="flex items-center gap-sm">
              <span>👤</span>
              <div>
                <strong>Alex Johnson</strong> moved task <strong>Improve performance</strong> to In Progress
                <div className="text-sm text-muted">Yesterday</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
