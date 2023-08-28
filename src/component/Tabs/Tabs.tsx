import { ReactElement } from "react";

interface Tab {
  title: ReactElement;
  content: ReactElement;
}

interface TabsProps {
  initialTabIndex: number;
  tabs: Tab[];
}

const Tabs = ({ initialTabIndex = 0, tabs }: TabsProps) => {
  return <div></div>;
};

export default Tabs;
