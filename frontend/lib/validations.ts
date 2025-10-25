import { z } from "zod"

// Password must be at least 8 characters with uppercase, lowercase, number
export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
})

export const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
})

export const quizSchema = z.object({
  title: z.string().min(3, "Quiz title must be at least 3 characters"),
  realTime: z.boolean(),
})

export const questionSchema = z.object({
  title: z.string().min(3, "Question must be at least 3 characters"),
  type: z.enum(["MCQ", "INPUT"]),
  marks: z.number().min(1, "Marks must be at least 1").max(100, "Marks cannot exceed 100"),
  answers: z.array(z.string()).optional(),
  correctAnswerIndex: z.number().min(0).optional(),
  correctAnswerText: z.string().optional(),
})

export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type QuizFormData = z.infer<typeof quizSchema>
export type QuestionFormData = z.infer<typeof questionSchema>
