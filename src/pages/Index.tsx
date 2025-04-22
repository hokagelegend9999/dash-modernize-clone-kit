
import React from 'react';
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  BarChart3 
} from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatsCard from '@/components/dashboard/cards/StatsCard';
import RecentTransactionsCard from '@/components/dashboard/cards/RecentTransactionsCard';
import SalesOverviewCard from '@/components/dashboard/cards/SalesOverviewCard';
import MonthlyEarningsCard from '@/components/dashboard/cards/MonthlyEarningsCard';
import RecentActivitiesCard from '@/components/dashboard/cards/RecentActivitiesCard';
import WeeklyStatsCard from '@/components/dashboard/cards/WeeklyStatsCard';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Welcome back, John Doe</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard 
          title="Customers" 
          value="39,354" 
          subtitle="+14% from last week" 
          icon={<Users size={20} className="text-white" />} 
          iconClass="bg-blue-500"
        />
        <StatsCard 
          title="Products" 
          value="4,396" 
          subtitle="+18% from last week" 
          icon={<ShoppingCart size={20} className="text-white" />} 
          iconClass="bg-green-500"
        />
        <StatsCard 
          title="Revenue" 
          value="$23,563" 
          subtitle="+12% from last month" 
          icon={<DollarSign size={20} className="text-white" />} 
          iconClass="bg-purple-500"
        />
        <StatsCard 
          title="Growth" 
          value="+ 59.3%" 
          subtitle="Increase in annual profit" 
          icon={<BarChart3 size={20} className="text-white" />} 
          iconClass="bg-orange-500"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <SalesOverviewCard />
        </div>
        <div>
          <RecentActivitiesCard />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <MonthlyEarningsCard />
        </div>
        <div>
          <WeeklyStatsCard />
        </div>
        <div>
          <RecentTransactionsCard />
        </div>
      </div>
      
      <div className="mt-auto">
        <p className="text-center text-sm text-gray-500">
          © 2023 Modernize. All rights reserved.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Index;
