import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface AppPasswordInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
}

export default function AppPasswordInput({
  name,
  label,
  placeholder,
  className,
}: AppPasswordInputProps) {
  const form = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                {...field}
                className={className}
              />
              {/* Password visibility toggle */}
              {showPassword ? (
                <EyeIcon
                  size={20}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <EyeOffIcon
                  size={20}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
