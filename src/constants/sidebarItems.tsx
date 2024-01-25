import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { UserRole } from "./role";
import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: "Account Profile",
          key: "account-profile",
        },
        {
          label: "Change Password",
          key: "change-password",
        },
      ],
    },
  ];

  const sellerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`${role}/manage-orders`}>Manage Bookings</Link>,
      key: `${role}/manage-bookings`,
    },
    {
      label: <Link href={`${role}/manage-sellers`}>Manage Services</Link>,
      key: `${role}/manage-sellers`,
    
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`${role}/manage-orders`}>Manage Bookings</Link>,
      key: `${role}/manage-bookings`,
    },
    {
      label: <Link href={`${role}/manage-sellers`}>Manage Sellers</Link>,
      key: `${role}/manage-sellers`,
    },
    {
      label: <Link href={`${role}/manage-customers`}>Manage Customers</Link>,
      key: `${role}/manage-customers`,
    },
  ];

  const superAdminSiderbarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...adminSidebarItems,
    {
      label: <Link href={`${role}/manage-orders`}>Manage Bookings</Link>,
      key: `${role}/manage-bookings`,
    },
    {
      label: <Link href={`${role}/manage-sellers`}>Manage Sellers</Link>,
      key: `${role}/manage-sellers`,
    },
    {
      label: <Link href={`${role}/manage-customers`}>Manage Customers</Link>,
      key: `${role}/manage-customers`,
    },
    {
      label: <Link href={`${role}/manage-admins`}>Manage Admins</Link>,
      key: `${role}/manage-admins`,
    },
  ];

  if (role === UserRole.USER) return defaultSidebarItems;
  else if (role === UserRole.SELLER) return sellerSidebarItems
  else if (role === UserRole.ADMIN) return adminSidebarItems;
  else if (role === UserRole.SUPER_ADMIN) return superAdminSiderbarItems;
  else return defaultSidebarItems;
};
