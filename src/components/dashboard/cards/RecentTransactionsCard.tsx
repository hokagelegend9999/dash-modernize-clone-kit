
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal } from 'lucide-react';

interface Transaction {
  id: number;
  customer: {
    name: string;
    avatar?: string;
    initials: string;
  };
  status: 'completed' | 'pending' | 'failed';
  date: string;
  amount: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    customer: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      initials: 'SJ',
    },
    status: 'completed',
    date: 'Mar 23, 2023',
    amount: '$499',
  },
  {
    id: 2,
    customer: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      initials: 'MC',
    },
    status: 'pending',
    date: 'Mar 20, 2023',
    amount: '$329',
  },
  {
    id: 3,
    customer: {
      name: 'Olivia Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      initials: 'OW',
    },
    status: 'completed',
    date: 'Mar 18, 2023',
    amount: '$799',
  },
  {
    id: 4,
    customer: {
      name: 'Robert Garcia',
      avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
      initials: 'RG',
    },
    status: 'failed',
    date: 'Mar 15, 2023',
    amount: '$149',
  },
];

const statusVariants = {
  completed: 'success',
  pending: 'warning',
  failed: 'danger',
};

const RecentTransactionsCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Transactions</CardTitle>
        <button className="text-gray-400 hover:text-gray-500">
          <MoreHorizontal size={18} />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={transaction.customer.avatar} alt={transaction.customer.name} />
                  <AvatarFallback>{transaction.customer.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{transaction.customer.name}</p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant={statusVariants[transaction.status] as any}>
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </Badge>
                <span className="font-semibold">{transaction.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactionsCard;
