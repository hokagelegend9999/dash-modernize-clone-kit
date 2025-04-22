
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoreHorizontal } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const salesData = [
  { month: 'Jan', previous: 1000, current: 1400 },
  { month: 'Feb', previous: 1500, current: 1800 },
  { month: 'Mar', previous: 1300, current: 2000 },
  { month: 'Apr', previous: 1800, current: 2200 },
  { month: 'May', previous: 2000, current: 2500 },
  { month: 'Jun', previous: 1900, current: 2300 },
  { month: 'Jul', previous: 2200, current: 2800 },
  { month: 'Aug', previous: 2400, current: 3000 },
  { month: 'Sep', previous: 2100, current: 2700 },
  { month: 'Oct', previous: 2200, current: 2900 },
  { month: 'Nov', previous: 2500, current: 3200 },
  { month: 'Dec', previous: 2800, current: 3500 },
];

const SalesOverviewCard: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium">Sales Overview</CardTitle>
          <p className="text-sm text-gray-500">Monthly Sales Performance</p>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
          <MoreHorizontal size={18} />
        </button>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="previous"
                name="Previous Year"
                stroke="#818cf8"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="current"
                name="Current Year"
                stroke="#4f46e5"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesOverviewCard;
