import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Submit from '@/components/form/Submit';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { IErrorResponse } from '@/interfaces';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { LogInIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email address'),
  password: z.string({
    required_error: 'Password is required',
  }),
});

export default function Login() {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(credentials: z.infer<typeof FormSchema>) {
    const result = await login(credentials);

    if (result?.data?.success) {
      const { token } = result.data;
      await dispatch(setUser(token));
      navigate(state?.pathname || '/dashboard');
      toast({
        title: 'Login successful!',
      });
    } else {
      toast({
        title: (result as IErrorResponse)?.error?.data?.message,
        variant: 'destructive',
      });
    }
  }

  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <div className="max-w-sm w-full border p-6 rounded-lg bg-white">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <h1 className="text-3xl font-semibold text-center">Login</h1>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Submit className="w-full flex items-center gap-2">
              <LogInIcon size={16} />
              Login
            </Submit>
          </form>
        </Form>
      </div>
    </div>
  );
}
