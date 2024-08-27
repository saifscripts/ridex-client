import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
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
      const { token, data: user } = result.data;
      await dispatch(setUser({ token, user }));
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
    <div className="h-full flex justify-center items-center">
      <div className="max-w-sm w-full border p-6 rounded-lg">
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

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
