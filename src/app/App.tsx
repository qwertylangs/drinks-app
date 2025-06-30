import { useState } from 'react';

import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/Router';

import { Navbar } from '@/widgets/Navbar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setSidebarOpen((prev) => !prev)

  return (
    <div className="app">
      <div className="content">
        <Navbar onToggleSidebar={handleToggleSidebar} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="main">
          <AppRouter />
        </main>
      </div>
    </div>
  );
}

export default App;
