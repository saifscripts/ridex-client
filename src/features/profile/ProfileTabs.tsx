import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ProfileTabs({
  activeTab,
  setActiveTab,
}: ProfileTabsProps) {
  return (
    <div className="bg-white rounded-lg p-2 w-full flex xs:gap-2 sm:gap-4 overflow-x-auto">
      <Button
        variant="ghost"
        className={cn('text-xs xs:text-sm', {
          'bg-secondary font-semibold': activeTab === 'edit',
        })}
        onClick={() => setActiveTab('edit')}
      >
        Edit Profile
      </Button>

      <Button
        variant="ghost"
        className={cn('text-xs xs:text-sm', {
          'bg-secondary font-semibold': activeTab === 'account',
        })}
        onClick={() => setActiveTab('account')}
      >
        Change Password
      </Button>

      <Button
        variant="ghost"
        className={cn('text-xs xs:text-sm', {
          'bg-secondary font-semibold': activeTab === 'logout',
        })}
        onClick={() => setActiveTab('logout')}
      >
        Logout
      </Button>
    </div>
  );
}
