This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

## Advanced Features

    Google Oauth
    Matter js animation for onboarding sockets
    Copy button to get CSV
    socket reconnection and error recovery
    image links support
    multiple correct option questions

Authentication & User Management User signup and signin with JWT authentication Password-based authentication with token generation Protected routes using JWT middleware Quiz Creation & Management (Admin) Create new quizzes with title and mode (Standard/Real-time) Add multiple-choice questions with: Question text, multiple answer options Correct answer selection, marks assignment Edit existing quizzes and questions View created quizzes dashboard Generate unique quiz codes for sharing Toggle quiz acceptance status (open/closed) Quiz Participation (Student) Submit quiz responses (non-real-time mode) View attempted quiz history Score calculation based on correct answers Prevent duplicate quiz attempts Data & Results View quiz results with student responses Display student scores and details Question-wise analysis showing correct answers Participant count tracking UI Components Complete form system (login, signup, quiz creation) Responsive dashboard layouts Question management interface Theme toggle (dark/light mode) Navigation breadcrumbs Backend Infrastructure RESTful API endpoints for all operations PostgreSQL database with Prisma ORM WebSocket server setup (basic connection handling) CORS enabled for frontend communication Structured routing (admin, participant, auth) Not Yet Implemented Real-time quiz functionality Socket-based live interactions Google OAuth integration CSV export feature Image links support in questions



The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


no route for attempting quizzes
responses are not showen up // app/main/dashboard/quiz/page.tsx api is being called but no response
check how the test-submission api is written(for each question does it submits or creates an object)
students should also able to see his responses after taking the test

## to attempt quiz
add a simple form - quizID + pass (to access the quiz) 
displaying questions and tracking responses


That's it
we are done




### for testing
Teacher's credentials - email : teerth12@gmail.com, pass: teerth12
Student's credentials - email : teerth@gmail.com, pass: okgoogle12
test@gmail.com Test@123

## suggestions- 
UI REVAMP
loader on every api call
questoin's marks are possibly negative
