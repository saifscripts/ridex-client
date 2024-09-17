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
import { useSignupMutation } from '@/redux/features/auth/authApi';
import { UserPlusIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(1, 'Name cannot be an empty string'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email address'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters long'),
  phone: z.string({
    required_error: 'Phone number is required',
  }),
  address: z
    .string({
      required_error: 'Address is required',
    })
    .min(1, 'Address cannot be an empty string'),
});

export default function Signup() {
  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await signup(data);

    if (result?.data?.success) {
      navigate('/login');
      toast({
        title: 'Account created successful!',
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
            <h1 className="text-3xl font-semibold text-center">
              Create Account
            </h1>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Submit className="w-full flex items-center gap-2">
              <UserPlusIcon size={16} />
              Signup
            </Submit>
          </form>
        </Form>
      </div>
    </div>
  );
}
