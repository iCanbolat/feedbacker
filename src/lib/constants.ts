import * as z from 'zod';

export const registerSchema = z.object({
  email: z.string().email({ message: 'Email is needed.' }),
  password: z.string().min(6, { message: 'Type minimum 6 chars' }),
  companyName: z.string().optional(),
});

export const feedbackFilterSchema = z.object({
  status: z.array(z.string()),
  feedbackType: z.string().optional(),
  date: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }),
});
