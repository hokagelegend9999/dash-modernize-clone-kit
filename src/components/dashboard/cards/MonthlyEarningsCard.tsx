
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoreHorizontal } from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const earningsData = [
  { month: 'Jan', earnings: 1300 },
  { month: 'Feb', earnings: 1800 },
  { month: 'Mar', earnings: 1200 },
  { month: 'Apr', earnings: 2100 },
  { month: 'May', earnings: 1900 },
  { month: 'Jun', earnings: 2200 },
];

const MonthlyEarningsCard: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium">Monthly Earnings</CardTitle>
          <p className="text-sm text-gray-500">Last 6 Months</p>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
          <MoreHorizontal size={18} />
        </button>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={earningsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar
                dataKey="earnings"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyEarningsCard;
