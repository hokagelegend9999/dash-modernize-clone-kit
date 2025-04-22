
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Activity {
  id: number;
  title: string;
  time: string;
  description: string;
  color: string;
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'New order placed',
    time: '09:30 AM',
    description: 'James Brown purchased Premium Plan',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'New user registered',
    time: '10:45 AM',
    description: 'Emma Wilson joined as a new user',
    color: 'bg-green-500'
  },
  {
    id: 3,
    title: 'Server limit reached',
    time: '01:30 PM',
    description: 'Server has reached 80% CPU usage',
    color: 'bg-yellow-500'
  },
  {
    id: 4,
    title: 'New payment method added',
    time: '03:15 PM',
    description: 'John Smith added new payment method',
    color: 'bg-purple-500'
  }
];

const RecentActivitiesCard: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Activities</CardTitle>
        <button className="text-gray-400 hover:text-gray-500">
          <MoreHorizontal size={18} />
        </button>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {activities.map((activity, index) => (
            <div key={activity.id} className="flex mb-6 last:mb-0">
              <div className="mr-4 relative">
                <div className={cn("h-3 w-3 rounded-full", activity.color)} />
                {index !== activities.length - 1 && (
                  <div className="absolute top-3 bottom-0 left-[5px] w-[1px] bg-gray-200"></div>
                )}
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <h5 className="font-medium text-sm">{activity.title}</h5>
                  <span className="text-xs text-gray-500 ml-2">{activity.time}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivitiesCard;
