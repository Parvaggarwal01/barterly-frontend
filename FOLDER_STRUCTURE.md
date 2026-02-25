# Folder Structure

## Overview
The frontend is organized to support both **User Dashboard** and **Admin Dashboard** with role-based access control.

```
barterly-frontend/
├── src/
│   ├── pages/
│   │   ├── user/                 # User-specific pages
│   │   │   └── Dashboard.jsx     # User dashboard
│   │   │   # Future: MySkills.jsx, Requests.jsx, Messages.jsx, etc.
│   │   │
│   │   ├── admin/                # Admin-specific pages
│   │   │   └── Dashboard.jsx     # Admin dashboard
│   │   │   # Future: Users.jsx, Skills.jsx, Categories.jsx, etc.
│   │   │
│   │   ├── auth/                 # Authentication pages
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   └── VerifyEmail.jsx
│   │   │
│   │   └── LandingPage.jsx       # Public landing page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── ProtectedRoute.jsx    # Protects user routes
│   │   └── AdminProtectedRoute.jsx  # Protects admin routes
│   │
│   ├── services/
│   │   ├── api.js                # Axios instance with interceptors
│   │   └── authService.js        # Authentication API calls
│   │
│   └── App.jsx                   # Main routing
```

## Route Structure

### Public Routes
- `/` - Landing page (redirects to dashboard if logged in)
- `/register` - User registration
- `/login` - User login
- `/verify-email` - Email verification

### User Routes (Protected)
- `/dashboard` - User dashboard
- Future: `/my-skills`, `/requests`, `/messages`, `/bookmarks`, `/profile`, `/settings`

### Admin Routes (Admin Only)
- `/admin/dashboard` - Admin dashboard
- Future: `/admin/users`, `/admin/skills`, `/admin/categories`, `/admin/barters`, `/admin/reports`, `/admin/settings`

## Role-Based Access Control

### User Model (Backend)
```javascript
{
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
}
```

### Route Protection
1. **ProtectedRoute** - Checks if user is authenticated
   - Redirects to `/login` if not authenticated
   
2. **AdminProtectedRoute** - Checks if user is admin
   - Redirects to `/login` if not authenticated
   - Redirects to `/dashboard` if authenticated but not admin

### Login Flow
1. User logs in → Backend returns user data with role
2. Frontend checks `user.role`:
   - If `role === "admin"` → Redirect to `/admin/dashboard`
   - If `role === "user"` → Redirect to `/dashboard`

## Design System

### Neo-Brutalist Theme
- **Primary Yellow**: `#ffde5c`
- **Secondary Lime**: `#a3e635`
- **Tertiary Pink**: `#f472b6`
- **Cream Background**: `#FFFBF0`
- **Black Borders**: `#181710`
- **Neutral Colors**: Added for dashboard surfaces

### Typography
- **Auth Pages**: Plus Jakarta Sans
- **Dashboards**: Space Grotesk
- **Icons**: Material Symbols Outlined

### Styling Patterns
- 2-4px solid black borders
- Hard shadows (4px 4px 0px 0px #000)
- Sharp corners (border-radius: 0px)
- Active press effects (translate on click)
- Hover effects (lift and shadow change)

## Next Steps

### User Dashboard
- [ ] Create MySkills page (list, create, edit, delete)
- [ ] Create Requests page (incoming/outgoing barter requests)
- [ ] Create Messages page (real-time chat)
- [ ] Create Bookmarks page (saved skills)
- [ ] Create Profile page (view/edit profile)
- [ ] Create Settings page (account settings)

### Admin Dashboard
- [ ] Create Users management page
- [ ] Create Skills moderation page
- [ ] Create Categories management page
- [ ] Create Barters monitoring page
- [ ] Create Reports review page
- [ ] Create System settings page

### Backend Integration
- [ ] Replace placeholder data with real API calls
- [ ] Implement skill CRUD operations
- [ ] Implement barter request system
- [ ] Implement real-time messaging
- [ ] Add admin-specific API endpoints
- [ ] Add role-based API protection
