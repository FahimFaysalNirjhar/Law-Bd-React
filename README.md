# ⚖️ Lawyer Appointment Booking Application

Welcome! 👋
This project is a **React-based Lawyer Appointment Booking Web Application** where users can browse lawyer profiles and book appointments easily.

The application includes routing, persistent booking data, charts visualization, animations, and responsive UI design.

---

# 🚀 Live Features

- Browse lawyer profiles
- View detailed lawyer information
- Book and cancel appointments
- Persistent data using localStorage
- Fee visualization with charts
- Animated counters
- Blog section
- Custom error handling
- Fully responsive design

---

# 🧭 Navbar (All Pages)

- Logo and Website Name
- Navigation Menu (4 items)
- Right-side button
- Visible on all pages including error page

---

# 🦶 Footer

- Centered logo
- Navigation links
- Social media icons with profile links
- Visible on all pages except error page

---

# 🏠 Homepage

## 🎯 Banner Section

- Center-aligned heading and description
- Background image

## ⚖️ Lawyers Section

- Section heading and description
- 6 lawyers displayed initially (grid layout)
- Show All button loads all 12 lawyers

### Lawyer Card Includes

- Image
- Name
- Speciality
- Experience
- License Number
- View Details button

## 🏆 Success Section

4 statistic cards with:

- Icon
- Animated number (react-countup)
- Title

---

# 👨‍⚖️ Lawyer Details Page

Displays:

- Lawyer image
- Name
- Experience
- Speciality
- Consultation fee
- Available days

### Appointment Card

- Availability badge
- Book Now button

---

# 🧾 Booking Logic

If appointment not booked:

- Create booking
- Show success toast
- Redirect to bookings page

If already booked:

- Show error toast
- Prevent duplicate booking

---

# 📅 Bookings Page

- Displays all booked appointments
- Single column card layout

Each card includes:

- Lawyer name
- Fee
- Speciality
- Cancel button

If no bookings:

- Empty state message
- Back to homepage button

Bookings persist using **localStorage**

---

# 📚 Blogs Page

Articles include:

1. What is `useState`?
2. Purpose of `useEffect`
3. Custom hooks in React
4. Controlled vs uncontrolled components
5. useFormStatus()

---

# ❌ Error Page (404)

- Custom design
- Navbar visible
- Footer hidden
- Button to return home

---

# 📊 Charts (Recharts)

- Appointment fees visualization
- Updates when booking canceled
- Hidden if no data exists

---

# 🔢 Counting Animation

Using **react-countup** for statistics.

---

# ⭐ Challenge Features

- Dynamic routing validation
- Loading spinner on route change
- Persistent state on reload
- Fallback loader during fetch
- Dynamic page title using useLocation()

---

# ✨ Optional Features

- Booking validation by availability day
- Unavailable badge
- Dynamic titles without third-party libraries

---

# 🛠️ Technologies Used

- React
- React Router
- Tailwind CSS
- Recharts
- React CountUp
- React Toastify
- LocalStorage API

---

# 📦 Installation

```bash
npm install
npm run dev
```

---

# 📂 Project Structure

```
src/
 ├── components/
 ├── pages/
 ├── routes/
 ├── utils/
 ├── App.jsx
 └── main.jsx
```

---

# ✅ Requirements Completed

✔ Routing
✔ Booking system
✔ Persistent storage
✔ Charts integration
✔ Animation
✔ Responsive UI

---

# 👨‍💻 Author

Sarker Fahim Faysal Nirjhar
GitHub: https://github.com/FahimFaysalNirjhar

---

# 📜 License

This project is for educational purposes.
