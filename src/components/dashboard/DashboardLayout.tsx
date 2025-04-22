
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useIsMobile } from '@/hooks/use-mobile';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  useEffect(() => {
    if (isMobile) {
      setSidebarCollapsed(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar collapsed={sidebarCollapsed} onToggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-grow overflow-hidden">
        <Topbar />
        
        <div className="flex-grow overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
