## Advanced Features
1. Google Oauth
2. Matter js animation for onboarding sockets
3. Copy button to get CSV
4. socket reconnection and error recovery 
5. image links support
6. multiple correct option questions




Authentication & User Management
User signup and signin with JWT authentication
Password-based authentication with token generation
Protected routes using JWT middleware
Quiz Creation & Management (Admin)
Create new quizzes with title and mode (Standard/Real-time)
Add multiple-choice questions with:
Question text, multiple answer options
Correct answer selection, marks assignment
Edit existing quizzes and questions
View created quizzes dashboard
Generate unique quiz codes for sharing
Toggle quiz acceptance status (open/closed)
Quiz Participation (Student)
Submit quiz responses (non-real-time mode)
View attempted quiz history
Score calculation based on correct answers
Prevent duplicate quiz attempts
Data & Results
View quiz results with student responses
Display student scores and details
Question-wise analysis showing correct answers
Participant count tracking
UI Components
Complete form system (login, signup, quiz creation)
Responsive dashboard layouts
Question management interface
Theme toggle (dark/light mode)
Navigation breadcrumbs
Backend Infrastructure
RESTful API endpoints for all operations
PostgreSQL database with Prisma ORM
WebSocket server setup (basic connection handling)
CORS enabled for frontend communication
Structured routing (admin, participant, auth)
Not Yet Implemented
Real-time quiz functionality
Socket-based live interactions
Google OAuth integration
CSV export feature
Image links support in questions
