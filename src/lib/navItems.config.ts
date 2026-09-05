import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./authUtils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {

    const defaultDashboard = getDefaultDashboardRoute(role)

    return [
        {
            items: [
                {
                    title: "Home",
                    href: '/',
                    icon: "Home",
                    roles: ['ADMIN']
                },
                {
                    title: "Dashboard",
                    href: defaultDashboard,
                    icon: "LayoutDashboard",
                    roles: ['ADMIN']
                },
                {
                    title: "My Profile",
                    href: `/my-profile`,
                    icon: "User",
                    roles: ['ADMIN']
                },
            ]
        },
        {
            title: 'Settings',
            items: [
                {
                    title: 'Change Password',
                    href: '/change-password',
                    icon: 'Settings',
                    roles: ['ADMIN']
                }
            ]
        },
    ]
}


export const adminNavItems: NavSection[] = [
    {
        title: "User Management",
        items: [
            {
                title: "Project Management",
                href: "/admin/dashboard/projects-management",
                icon: "Shield", 
                roles: ['ADMIN'],
            }                       
        ],
    }
]


// export const getNavItemsByRole = (role: UserRole): NavSection[] =>{
export const getNavItemsByRole = async(role: UserRole): Promise<NavSection[]> =>{
    const commonNavItems = getCommonNavItems(role);

    switch (role) {
        case "ADMIN":
            return [...commonNavItems, ...adminNavItems];
        
        default:
            return [];
    }
}

