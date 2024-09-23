import { LogoutButton } from '@/features/logout';
import { LogOutIcon } from 'lucide-react';

export default function Logout() {
  return (
    <section className="rounded-lg p-6 border">
      <h2 className="text-xl font-semibold text-foreground/80 mb-4">Logout</h2>
      <p className="text-foreground/60 mb-4">
        Are you sure you want to log out of your account?
      </p>
      <LogoutButton variant="destructive" className="flex items-center gap-2">
        <LogOutIcon size={16} />
        Confirm Logout
      </LogoutButton>
    </section>
  );
}
