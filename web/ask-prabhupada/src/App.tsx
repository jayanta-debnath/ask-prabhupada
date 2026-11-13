import MainLayout, { type SidebarItem, type ToolbarAction } from "../../jd-react-kit/components/MainLayout";

export default function App() {
  const toolbarActions: ToolbarAction[] = [
    {
      label: "Home",
      onClick: () => console.log("Home clicked"),
    },
    // Add more actions as needed
  ];

  const sidebarItems: SidebarItem[] = [
    {
      label: "Dashboard",
      icon: null,
      selected: true,
      dividerBefore: false,
      onClick: () => console.log("Dashboard clicked"),
    },
    // Add more sidebar items as needed
  ];

  return (
    <MainLayout
      title="Ask Prabhupada"
      toolbarActions={toolbarActions}
      sidebarItems={sidebarItems}
    />
  );
}
