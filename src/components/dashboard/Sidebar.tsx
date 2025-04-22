
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard, 
  Package, 
  BarChart3, 
  FileText, 
  ShoppingCart, 
  Users, 
  Layers, 
  Settings, 
  ChevronDown, 
  Menu
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggleSidebar: () => void;
}

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
  submenu?: { title: string; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggleSidebar }) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    'Dashboards': true
  });

  const menuItems: MenuItem[] = [
    {
      title: 'Dashboards',
      icon: <LayoutDashboard size={20} />,
      path: '/',
      submenu: [
        { title: 'Dashboard 1', path: '/' },
        { title: 'Dashboard 2', path: '/dashboard2' },
        { title: 'Dashboard 3', path: '/dashboard3' },
      ]
    },
    {
      title: 'Apps',
      icon: <Package size={20} />,
      path: '/apps',
      submenu: [
        { title: 'Calendar', path: '/calendar' },
        { title: 'Chat', path: '/chat' },
        { title: 'Email', path: '/email' },
      ]
    },
    {
      title: 'UI Components',
      icon: <Layers size={20} />,
      path: '/ui',
    },
    {
      title: 'Pages',
      icon: <FileText size={20} />,
      path: '/pages',
    },
    {
      title: 'Charts',
      icon: <BarChart3 size={20} />,
      path: '/charts',
    },
    {
      title: 'Ecommerce',
      icon: <ShoppingCart size={20} />,
      path: '/ecommerce',
    },
    {
      title: 'Authentication',
      icon: <Users size={20} />,
      path: '/auth',
    },
    {
      title: 'Settings',
      icon: <Settings size={20} />,
      path: '/settings',
    },
  ];

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className={cn(
      "transition-all duration-300 ease-in-out flex flex-col bg-white border-r border-gray-200 h-screen",
      collapsed ? "w-[70px]" : "w-[260px]"
    )}>
      <div className="flex items-center p-4 h-16 border-b border-gray-200">
        {!collapsed && (
          <div className="flex-grow">
            <span className="font-bold text-blue-600 text-lg">Modernize</span>
          </div>
        )}
        <button 
          onClick={onToggleSidebar} 
          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full"
        >
          <Menu size={20} />
        </button>
      </div>
      
      <div className="overflow-y-auto flex-grow">
        <ul className="pt-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div className={cn(
                "flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer",
                index === 0 && "bg-blue-50 text-blue-600"
              )}>
                <div className="mr-3">{item.icon}</div>
                {!collapsed && (
                  <>
                    <span className="flex-grow">{item.title}</span>
                    {item.submenu && (
                      <button 
                        onClick={() => toggleMenu(item.title)}
                        className="text-gray-400"
                      >
                        <ChevronDown 
                          size={16} 
                          className={cn(
                            "transition-transform", 
                            openMenus[item.title] && "transform rotate-180"
                          )} 
                        />
                      </button>
                    )}
                  </>
                )}
              </div>
              {!collapsed && item.submenu && openMenus[item.title] && (
                <ul className="pl-12 bg-gray-50">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className={cn(
                          "block px-4 py-2 text-gray-600 hover:text-blue-600",
                          subIndex === 0 && "text-blue-600"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      
      {!collapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-medium text-blue-700 mb-2">Modernize Pro</h5>
            <p className="text-sm text-gray-600 mb-3">Upgrade to Pro for more features</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm">
              Upgrade
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
