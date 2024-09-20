import { Button } from '@/components/ui/button';

const tabs = [
  {
    name: 'Edit Profile',
    value: 'edit',
  },
  {
    name: 'Change Password',
    value: 'account',
  },
  {
    name: 'Logout',
    value: 'logout',
  },
];

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
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          variant={activeTab === tab.value ? 'secondary' : 'ghost'}
          className="text-xs xs:text-sm"
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.name}
        </Button>
      ))}
    </div>
  );
}
