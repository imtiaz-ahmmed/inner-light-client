# Inner Light - Yoga and Meditation School

Inner Light is a yoga and meditation school that aims to provide a peaceful and nurturing environment for individuals to explore and deepen their practice. This README file provides an overview of the website's features, requirements, and technologies used.

## Table of Contents

- [Main Requirements](#main-requirements)
- [Registration & Login System](#registration--login-system)
- [Homepage](#homepage)
- [Instructors Page](#instructors-page)
- [Classes Page](#classes-page)
- [Student Dashboard](#student-dashboard)
- [Instructor Dashboard](#instructor-dashboard)
- [Admin Dashboard](#admin-dashboard)
- [Website Technologies](#website-technologies)
- [Live Site](#live-site)

## Main Features

The main focus of the Inner Light website is to create a visually appealing design that enhances the user experience. The key features include:

## Registration & Login System

The Inner Light website includes a registration and login system to provide user authentication and access control. The key features of this system are:

### Login Page

- Users can log in using their email and password.
- The password field can be toggled to hide/unhide the password.
- Registration link provided for new users to create an account.
- Social login options available for convenience.

### Registration Page

- Users can register with their name, email, password, confirm password, photo URL
- Social login options available for convenience.

### Error Handling

- Error messages are displayed on the registration page for password validation:
  - Password must be at least 6 characters long.
  - Password must include a capital letter.
  - Password must include a special character.
- Empty email and password fields cannot be submitted.

## Homepage

The homepage of the Inner Light website is designed to provide an engaging and informative experience for users. Key sections of the homepage include:

### Popular Classes Section

- Display of relevant pictures related to classes or activities.
- Top 6 classes based on the number of students.

### Popular Instructors Section

- Display of relevant pictures related to instructors.
- Top 6 instructors based on the number of students in their classes.

## Instructors Page

The Instructors page provides information about all the instructors at Inner Light. Each instructor's details include:

- Image
- Name
- Email
- Number of classes taken by the instructor (optional)
- Name of the classes taken by the instructor (optional)
- "See Classes" button to view classes taught by the instructor

## Classes Page

The Classes page displays all the approved classes at Inner Light. Each class includes the following information:

- Image
- Name
- Instructor name
- Available seats
- Price
- Select Button

If a user is not logged in, the Select button prompts the user to log in before selecting the course.

## Student Dashboard

The Student Dashboard is a private area accessible only to students. It provides the following features:

### My Selected Classes

- Displays all the classes booked by the student.
- Relevant information on each class, including Delete and Pay buttons.
- Clicking the Delete button removes the selected class from the list.

### My Enrolled Classes

- Shows all the classes in which the student is enrolled after successful payment.

### Payment

- Clicking the Pay button for a class on the My Selected Classes page redirects the student to the payment page for finalizing the payment.
- After successful payment, the available seats for the particular class are reduced by 1.
- Class information is displayed on the My Enrolled Classes page and removed from the My Selected Classes page.

### Payment History

- A payment history page displays all payments made by the student.
- Payments are sorted in descending order, with the newest payment at the top.

## Instructor Dashboard

The Instructor Dashboard provides a private space for instructors to manage their classes. Key features of the Instructor Dashboard include:

### Add a Class

- Instructors can add a class by filling out a form with the following fields:
  - Class name
  - Class Image
  - Instructor name
  - Instructor email
  - Available seats
  - Price
- When creating a class, the status field is set to "pending."

### My Classes

- Shows all the classes an instructor has added after clicking the "Add" button on the Add a Class page.
- Provides relevant information, including pending/approved/denied status, total enrolled students, feedback, and update button.

### Total Enrolled Students

- Initially set to zero.
- Updates to show the total number of students if any student has successfully booked the class.

### Feedback

- No feedback is provided if the class is pending or approved.
- If the class is denied by the admin, the admin can write feedback explaining the denial reason, which appears in the feedback column.

## Admin Dashboard

The Admin Dashboard is a private area accessible only to administrators. It provides the following features:

### Manage Classes

- Displays all the classes added by instructors.
- Shows relevant information, including class image, name, instructor name, instructor email, available seats, price, and status (pending/approved/denied).
- Provides three buttons: Approve, Deny, and Send Feedback.
- Approving a class updates the status to approved and disables the Approve and Deny buttons.
- Denying a class updates the status to denied and disables the Approve and Deny buttons.
- Clicking the Send Feedback button opens a modal where the admin can write feedback explaining the approval or denial reason.

### Manage Users

- Allows the admin to view relevant information of all registered users.
- By default, all users are students.
- Provides two buttons: Make Instructor and Make Admin.
- Clicking either button updates the user's role and disables the button.

## Website Technologies

The Inner Light website is built using the following technologies:

- Front-end: React, Tailwind CSS, Daisy UI
- Back-end: Express
- DataBase: MongoDB

## Live Site

To view the live site, please visit [Inner Light](https://inner-light-13c1c.web.app/).

## Admin Panel

Admin-email: admin@gmail.com
Admin -password: 123Asd
