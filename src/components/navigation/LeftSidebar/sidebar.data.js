import {
  LayoutDashboard,
  ShoppingBag,
  Folder,
  BookOpen,
  SquareUser ,
  CreditCard,
  IdCard,
  UsersRound,
  Notebook,
  MessageCircle  
} from "lucide-react"

export const sidebarData = [
  {
    title: "Dashboards",
    items: [
      { label: "Default", icon: LayoutDashboard, active: true,path:'/dashboard' },
      { label: "eCommerce", icon: ShoppingBag,path:'/' },
      { label: "Projects", icon: Folder , path:'/users' },
      { label: "Online Courses", icon: BookOpen,path:'/' },
    ],
  },
  {
   title: "Pages",
    items: [
      {
        label: "User Profile",
        icon: SquareUser,
        children: [
          "Overview",
          "Projects",
          "Campaigns",
          "Documents",
          "Followers",
        ],
      },
      {
        label: "Account",
        icon: CreditCard,
        children: [
          "Settings",
          "Billing",
          "Security",
          "Notifications",
          "Statements",
        ],
      },
      {
        label: "Corporate",
        icon: UsersRound,
        children: [
          "Team",
          "Departments",
          "Job Board",
          "Legal",
          "Compliance",
        ],
      },
      {
        label: "Blog",
        icon: Notebook,
        children: [
          "All Posts",
          "Add New Post",
          "Categories",
          "Comments",
          "Analytics",
        ],
      },
      {
        label: "Social",
        icon: MessageCircle,
        children: [
          "Feed",
          "Messages",
          "Groups",
          "Events",
          "Marketplace",
        ],
      },
    ],
  },
]
