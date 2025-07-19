Sales Insights Dashboard (Frontend)
This is the frontend for the Sales Insights Dashboard, a full-stack analytics app built with React, Tailwind CSS, and Recharts. It connects to a live FastAPI backend deployed on Render and displays KPIs and interactive charts for sales data.

Live Demo: https://sales-insights-frontend.vercel.app

Features:-
-> Total Sales KPI card
-> Top 5 Products Bar Chart (Revenue)
-> Responsive UI with TailwindCSS
-> Fetches live data from backend API
-> Deployed on Vercel for global access

Tech Stack:-
Frontend: React, Tailwind CSS, Recharts, Axios
Backend API: FastAPI (deployed on Render)
Database: PostgreSQL (managed on Render)
Deployment: Vercel (frontend), Render (backend)

Backend API:-
This frontend fetches data from:
https://sales-insights-backend.onrender.com/kpis

Getting Started (Local Development):-
1) Clone the repo
  git clone https://github.com/<your-username>/sales_insights_frontend.git
  cd sales_insights_frontend
2) Install dependencies
  npm install
3) Run the app locally
  npm start
  Open your browser at http://localhost:3000

Production Build:-
To create an optimized production build:
  npm run build
The build output is in the build/ folder.

Future Improvements
  -> Add line charts for sales trends over time
  -> Filter KPIs by date range
  -> Authentication for admin access
  -> Dark mode toggle
