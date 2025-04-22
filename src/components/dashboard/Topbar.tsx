
import React from 'react';
import { Bell, MessageSquare, Search, User, ChevronDown } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Topbar: React.FC = () => {
  return (
    <div className="h-16 px-6 flex items-center justify-between border-b border-gray-200 bg-white">
      <div className="relative w-64">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Search..."
          className="pl-9 h-9 w-full bg-gray-100 border-0 rounded-md text-sm"
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Bell size={20} className="text-gray-500" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-blue-600">
              5
            </Badge>
          </button>
        </div>
        
        <div className="relative">
          <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <MessageSquare size={20} className="text-gray-500" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-orange-500">
              8
            </Badge>
          </button>
        </div>
        
        <div className="h-8 border-l border-gray-200"></div>
        
        <div className="flex items-center">
          <Avatar className="h-9 w-9 mr-2">
            <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <ChevronDown size={16} className="ml-2 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
