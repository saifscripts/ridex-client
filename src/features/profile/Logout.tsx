import { LogoutButton } from '@/features/logout';
import { LogOutIcon } from 'lucide-react';

export default function Logout() {
  return (
    <section className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Logout</h2>
      <p className="text-gray-600 mb-4">
        Are you sure you want to log out of your account?
      </p>
      <LogoutButton variant="destructive" className="flex items-center gap-2">
        <LogOutIcon size={16} />
        Confirm Logout
      </LogoutButton>
    </section>
  );
}
