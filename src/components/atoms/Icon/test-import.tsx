// Test file to verify Icon component imports
import React from "react";
import { Icon, Add, Edit, Delete } from "./index";

// Test component
export const IconTest: React.FC = () => {
  return (
    <div>
      <Icon icon={Add} size="md" />
      <Icon icon={Edit} size="lg" />
      <Icon icon={Delete} size="sm" />
    </div>
  );
};
