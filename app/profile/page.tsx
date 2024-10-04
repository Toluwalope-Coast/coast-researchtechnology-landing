// pages/profile.tsx
"use client";
import DashboardLayout from "@/app/dashboard/DashboardLayout";

const ProfilePage = () => {
  return (
    <>
      <DashboardLayout
        title="Profile - Dashboard"
        description="Manage your profile settings here"
      >
        <h1 className="text-2xl">Profile Settings</h1>
      </DashboardLayout>
    </>
  );
};

export default ProfilePage;
