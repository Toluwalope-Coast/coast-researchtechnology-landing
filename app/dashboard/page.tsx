// pages/index.tsx
"use client";
import DashboardLayout from "@/app/dashboard/DashboardLayout";

const HomePage = () => {
  return (
    <>
      <DashboardLayout title="Dashboard" description="Welcome to the Dashbaord">
        <h1 className="text-2xl">Welcome to the Dashboard</h1>
      </DashboardLayout>
    </>
  );
};

export default HomePage;
