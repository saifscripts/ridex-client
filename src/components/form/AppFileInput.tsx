import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface AppFileInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AppFileInput({
  name,
  label,
  placeholder,
  className,
  accept,
  onChange,
}: AppFileInputProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              type="file"
              placeholder={placeholder}
              name={name}
              value={field.value}
              accept={accept}
              className={className}
              onChange={(value) => {
                field.onChange(value);
                onChange(value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
