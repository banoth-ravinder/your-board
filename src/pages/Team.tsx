
import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
  tasksAssigned: number;
  tasksCompleted: number;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Frontend Developer',
      email: 'john.doe@example.com',
      avatar: '👨‍💻',
      tasksAssigned: 5,
      tasksCompleted: 3,
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      email: 'jane.smith@example.com',
      avatar: '👩‍🎨',
      tasksAssigned: 4,
      tasksCompleted: 2,
    },
    {
      id: 3,
      name: 'Alex Johnson',
      role: 'Backend Developer',
      email: 'alex.johnson@example.com',
      avatar: '👨‍💻',
      tasksAssigned: 6,
      tasksCompleted: 4,
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Project Manager',
      email: 'sarah.williams@example.com',
      avatar: '👩‍💼',
      tasksAssigned: 3,
      tasksCompleted: 3,
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1 className="text-xl font-bold">Team</h1>
        <button className="btn btn-primary">Add Team Member</button>
      </header>

      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {teamMembers.map((member) => (
            <div key={member.id} className="card" style={{ margin: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2rem', marginRight: '1rem' }}>{member.avatar}</div>
                <div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-muted">{member.role}</p>
                </div>
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <div className="text-sm text-muted">Email</div>
                <div>{member.email}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div className="text-sm text-muted">Assigned</div>
                  <div>{member.tasksAssigned}</div>
                </div>
                <div>
                  <div className="text-sm text-muted">Completed</div>
                  <div>{member.tasksCompleted}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
