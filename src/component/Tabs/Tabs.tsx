import React, { ReactElement, useState } from "react";
import TabsStyled from "./TabsStyled";
import { Ripple } from "../Ripple";

interface Tab {
  title: React.ReactNode;
  content?: ReactElement;
}

interface TabsProps {
  index: number;
  tabs: Tab[];
}

const Tabs = ({ index = 0, tabs }: TabsProps) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentIndex(newValue);
  };

  return (
    <TabsStyled>
      {tabs.map((tab, i) => (
        <>
          <Ripple onClick={(e) => handleChange(e, i)}>{tab.title}</Ripple>
          <div
            style={{
              display: i === currentIndex ? "block" : "none",
            }}
          >
            {tab.content}
          </div>
        </>
      ))}
    </TabsStyled>
  );
};

export default Tabs;
