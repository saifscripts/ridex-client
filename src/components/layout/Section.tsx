import { cn } from '@/lib/utils';

export function Section({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties | undefined;
}) {
  return (
    <section className={cn('py-12', className)} {...props}>
      {children}
    </section>
  );
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
