import { cn } from '@/lib/utils';

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('container', className)}>{children}</div>;
}

export function ContainerMd({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('container lg:max-w-6xl', className)}>{children}</div>
  );
}
