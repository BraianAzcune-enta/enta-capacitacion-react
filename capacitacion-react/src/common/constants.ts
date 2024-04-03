import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type DrawerMenuData = {
  name: string;
  text: string;
  to: string;
  icon?: IconDefinition;
  children: DrawerMenuData[];
};

export const MODULES_DRAWER_DATA: DrawerMenuData[] = [];
