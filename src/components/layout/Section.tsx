import { cn } from '@/lib/utils';

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={cn('py-12', className)}>{children}</section>;
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        'text-4xl font-semibold text-center tracking-tight mb-2 uppercase',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'text-center text-foreground/70 mb-8 max-w-xl mx-auto',
        className
      )}
    >
      {children}
    </p>
  );
}
