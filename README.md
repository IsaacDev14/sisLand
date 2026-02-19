# Siscom Solutions - Sovereign Cloud & AI Infrastructure

This is the official codebase for the Siscom Solutions marketing and service platform. It showcases our capabilities in Local Cloud, Data Intelligence, and AI Advantage for African enterprises.

## Technologies Used

-   **Framework:** Next.js 16 (App Router)
-   **Styling:** Tailwind CSS v4 + Framer Motion + GSAP
-   **Backend:** Next.js API Routes (Node.js Runtime)
-   **Email Service:** Resend
-   **Database:** Firebase (Firestore)

## Project Structure

```bash
sisLand/
├── app/                  # Application source code (Next.js App Router)
│   ├── api/              # Server-side API routes (e.g., Contact Form)
│   ├── layout.tsx        # Root layout (Navbar, Footer, Fonts)
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── emails/           # Email templates
│   └── ui/               # Design system primitives
├── public/               # Static assets (Images, Logos)
└── lib/                  # Utility functions and Firebase config
```

## Getting Started

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Environment Variables:**

    Create a `.env.local` file in the root directory and add the following keys:

    ```env
    RESEND_API_KEY=your_resend_api_key_here
    NEXT_PUBLIC_FIREBASE_API_KEY=...
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
    # ... other firebase config keys
    ```

3.  **Run Development Server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Since this application utilizes server-side API routes for secure email handling, it requires a Node.js runtime environment. It cannot be deployed as a static export.

**For cPanel Deployment:**
Please refer to the `DEPLOYMENT.md` file in this repository for detailed, step-by-step instructions on deploying to a cPanel environment using the "Setup Node.js App" feature.

**Standard Build Command:**

```bash
npm run build
```

This command generates an optimized production build in the `.next` folder. 


