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

export const profileSettingsSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    ),
});
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})

export type Task = z.infer<typeof taskSchema>

export const MAX_FILE_SIZE = 5000000;
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
