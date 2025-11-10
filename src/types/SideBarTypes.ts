export interface SideBarProps {
  activeMenu: string;
  onMenuClick: (menu: string) => void;
  onLogout: () => void;
}
