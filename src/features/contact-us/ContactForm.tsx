import AppForm from '@/components/form/AppForm';
import AppInput from '@/components/form/AppInput';
import AppTextarea from '@/components/form/AppTextarea';
import Submit from '@/components/form/Submit';
import { IResponse } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { useContactUsMutation } from '@/redux/features/user/userApi';
import { MessageCircleIcon } from 'lucide-react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import validator from 'validator';
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
    .min(1, { message: 'You must provide your phone number!' })
    .refine((value) => validator.isMobilePhone(value, 'bn-BD'), {
      message: 'Invalid Bangladeshi phone number',
    }),
  message: z
    .string({ required_error: "Message can't be empty!" })
    .min(1, { message: "Message can't be empty!" })
    .max(1000, { message: "Message can't be longer than 1000 characters!" }),
});

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [contactUs] = useContactUsMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const result = (await contactUs(data)) as IResponse<null>;
    showToast(result, 'Message sent!');
    return result?.data?.success;
  };

  return (
    <AppForm
      onSubmit={handleSubmit}
      schema={FormSchema}
      defaultValues={defaultValues}
      className="mx-auto p-8 rounded-lg border"
      data-aos="fade-left"
      data-aos-delay="100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <AppInput
            name="name"
            label="Name"
            placeholder="Full name"
            className="border-none bg-foreground/5 focus:bg-background focus-visible:ring-primary focus-visible:ring-2 h-12"
          />
          <AppInput
            name="email"
            type="email"
            label="Email"
            placeholder="Email address"
            className="border-none bg-foreground/5 focus:bg-background focus-visible:ring-primary focus-visible:ring-2 h-12"
          />
          <AppInput
            name="phone"
            label="Phone"
            placeholder="Phone number"
            className="border-none bg-foreground/5 focus:bg-background focus-visible:ring-primary focus-visible:ring-2 h-12"
          />
        </div>
        <div>
          <AppTextarea
            name="message"
            label="Message"
            placeholder="Write your message here"
            className="border-none bg-foreground/5 focus:bg-background focus-visible:ring-primary focus-visible:ring-2 h-64"
          />
        </div>
      </div>
      <Submit className="flex items-center gap-2 mx-auto w-full max-w-72 h-12 bg-primary hover:bg-primary-dark transition-colors duration-300">
        <MessageCircleIcon size={16} />
        Send Message
      </Submit>
    </AppForm>
  );
}
