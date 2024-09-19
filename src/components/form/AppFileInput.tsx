import { FormControl, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

interface AppFileInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AppFileInput({
  name,
  label,
  placeholder,
  className,
  onChange,
}: AppFileInputProps) {
  return (
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Input
          type="file"
          placeholder={placeholder}
          name={name}
          className={className}
          onChange={onChange}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
