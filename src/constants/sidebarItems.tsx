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

  const adminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`${role}/manage-orders`}>Manage Orders</Link>,
      key: `${role}/manage-orders`,
    },
  ];

  const superAdminSiderbarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...adminSidebarItems,
    {
      label: <Link href={`${role}/manage-users`}>Manage Users</Link>,
      key: `${role}/manage-users`,
    },
  ];

  if (role === UserRole.USER) return defaultSidebarItems;
  else if (role === UserRole.ADMIN) return adminSidebarItems;
  else if (role === UserRole.SUPER_ADMIN) return superAdminSiderbarItems;
  else return defaultSidebarItems;
};
