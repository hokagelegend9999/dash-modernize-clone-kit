
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
  iconClass?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  className,
  iconClass
}) => {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center">
        <div className="flex-grow">
          <h5 className="text-sm font-medium text-gray-500 mb-1">{title}</h5>
          <h3 className="text-2xl font-bold mb-1">{value}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <div className={cn("w-12 h-12 flex items-center justify-center rounded-full", iconClass)}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
