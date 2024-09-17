import AppForm from '@/components/form/AppForm';
import AppInput from '@/components/form/AppInput';
import AppTextarea from '@/components/form/AppTextarea';
import Submit from '@/components/form/Submit';
import { IResponse } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { useContactUsMutation } from '@/redux/features/user/userApi';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  name: z
    .string({ required_error: 'You must provide your name!' })
    .min(1, { message: 'You must provide your name!' }),
  email: z
    .string({ required_error: 'You must provide your email!' })
    .email({ message: 'Invalid email!' }),
  phone: z
    .string({ required_error: 'You must provide your phone number!' })
    .min(1, { message: 'You must provide your phone number!' }),
  message: z
    .string({ required_error: "Message can't be empty!" })
    .min(1, { message: "Message can't be empty!" })
    .max(1000, { message: "Message can't be longer than 1000 characters!" }),
});

export default function ContactForm() {
  const [contactUs] = useContactUsMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const result = (await contactUs(data)) as IResponse<null>;
    showToast(result, 'Message sent!');
  };

  return (
    <AppForm
      onSubmit={handleSubmit}
      schema={FormSchema}
      className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <AppInput
            name="name"
            label="Name"
            placeholder="Full name"
            className="border-none bg-gray-50 focus:bg-white focus-visible:ring-primary focus-visible:ring-2 h-12"
          />
          <AppInput
            name="email"
            type="email"
            label="Email"
            placeholder="Email address"
            className="border-none bg-gray-50 focus:bg-white focus-visible:ring-primary focus-visible:ring-2 h-12"
          />
          <AppInput
            name="phone"
            label="Phone"
            placeholder="Phone number"
            className="border-none bg-gray-50 focus:bg-white focus-visible:ring-primary focus-visible:ring-2 h-12"
          />
        </div>
        <div>
          <AppTextarea
            name="message"
            label="Message"
            placeholder="Write your message here"
            className="border-none bg-gray-50 focus:bg-white focus-visible:ring-primary focus-visible:ring-2 h-64"
          />
        </div>
      </div>
      <Submit className="block mx-auto w-full max-w-72 h-12 bg-primary hover:bg-primary-dark transition-colors duration-300">
        Send Message
      </Submit>
    </AppForm>
  );
}
