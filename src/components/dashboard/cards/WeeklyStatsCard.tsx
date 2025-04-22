
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoreHorizontal } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const statsData = [
  { day: 'Mon', visits: 10, earnings: 1200 },
  { day: 'Tue', visits: 20, earnings: 1800 },
  { day: 'Wed', visits: 15, earnings: 1600 },
  { day: 'Thu', visits: 25, earnings: 2100 },
  { day: 'Fri', visits: 18, earnings: 1900 },
  { day: 'Sat', visits: 12, earnings: 1300 },
  { day: 'Sun', visits: 8, earnings: 1100 },
];

const WeeklyStatsCard: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium">Weekly Stats</CardTitle>
          <p className="text-sm text-gray-500">Visits & Earnings</p>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
          <MoreHorizontal size={18} />
        </button>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={statsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Area 
                type="monotone"
                dataKey="visits" 
                stroke="#3b82f6" 
                fillOpacity={1} 
                fill="url(#colorVisits)" 
              />
              <Area 
                type="monotone" 
                dataKey="earnings" 
                stroke="#10b981" 
                fillOpacity={1} 
                fill="url(#colorEarnings)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyStatsCard;
