# BookYourArtist — Full Stack Web Application

India's Premier Artist Booking Platform

---

## 🗂 Project Structure

```
bookyourartist/
├── backend/          ← Node.js + Express + MongoDB API
└── frontend/         ← React.js Frontend
```

---

## ⚙️ TECH STACK

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth | JWT (JSON Web Tokens) |
| Email | Nodemailer (Gmail) |
| File Upload | Multer |

---

## 🚀 SETUP INSTRUCTIONS

### Prerequisites
- Node.js (v16 or higher) — https://nodejs.org
- MongoDB — https://www.mongodb.com/try/download/community (local) OR use MongoDB Atlas (cloud, free)
- Git (optional)

---

### STEP 1 — Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file (copy from `.env.example`):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookyourartist
JWT_SECRET=change_this_to_a_random_secret_string
EMAIL_USER=sagarsagar49061@gmail.com
EMAIL_PASS=YOUR_GMAIL_APP_PASSWORD
ADMIN_EMAIL=sagarsagar49061@gmail.com
```

> ⚠️ **Gmail App Password Setup:**
> 1. Go to your Google Account → Security
> 2. Enable 2-Step Verification
> 3. Go to Security → App passwords
> 4. Generate a new app password for "Mail"
> 5. Copy that 16-character password into EMAIL_PASS

Start backend:
```bash
npm run dev     # development (auto-restarts)
# or
npm start       # production
```

Backend runs at: `http://localhost:5000`

---

### STEP 2 — Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
```

Start frontend:
```bash
npm start
```

Frontend runs at: `http://localhost:3000`

---

### STEP 3 — Create First Admin Account

Once both servers are running, open Postman or your browser console and run:

```bash
curl -X POST http://localhost:5000/api/auth/setup \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your_secure_password"}'
```

OR use this one-time setup script (only works if no admin exists):
```
POST http://localhost:5000/api/auth/setup
Body: { "username": "admin", "password": "YourPassword123" }
```

---

## 🔑 ADMIN PANEL

- URL: `http://localhost:3000/admin`
- Login with the username and password you created above

**Admin Features:**
- ✅ Add / Edit / Delete Artists
- ✅ Upload artist photos
- ✅ Mark artists as Featured (shows on home page) or Exclusive (highlighted section)
- ✅ View all booking leads
- ✅ Update booking status (New → Contacted → Confirmed / Cancelled)
- ✅ Delete bookings

---

## 🌐 PAGES

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page with hero, featured artists, why us, CTA |
| About Us | `/about` | Company story, mission, vision, why choose us |
| Artist Booking | `/artists` | Browse all artists with filters (category, city) |
| Contact | `/contact` | Contact form + details + Google Map |
| Admin Login | `/admin` | Secure admin login |
| Admin Dashboard | `/admin/dashboard` | Manage artists and bookings |

---

## 📧 EMAIL NOTIFICATIONS

Every time someone fills the booking form, an email notification is sent to `sagarsagar49061@gmail.com` with all details.

---

## 🎨 DESIGN

- **Brand Colors:** Deep Navy `#0a1628` + Gold `#c9a84c`
- **Fonts:** Cormorant Garamond (headings) + DM Sans (body)
- **Style:** Formal, premium, official

---

## 📱 MOBILE RESPONSIVE

All pages are fully responsive for mobile, tablet and desktop.

---

## 📦 DEPLOYMENT

### Backend (Render / Railway / VPS)
1. Push to GitHub
2. Connect to Render.com (free tier available)
3. Set environment variables
4. Deploy

### Frontend (Vercel / Netlify)
1. Push to GitHub
2. Connect to Vercel.com
3. Set `REACT_APP_API_URL` to your backend URL
4. Deploy

---

## 🆘 SUPPORT

Phone: +91 93535 48082  
Email: sagarsagar49061@gmail.com  
WhatsApp: https://wa.me/919353548082
