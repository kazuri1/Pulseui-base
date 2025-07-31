import React from "react";
import { Icon } from "./Icon";
import { Add, Edit, Delete, Settings, Search, Download } from "./IconSet";

export const IconDemo: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Icon Sizes with Padding</h3>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <Icon icon={Add} size="xs" />
            <p className="text-xs mt-1">XS (16px)</p>
          </div>
          <div className="text-center">
            <Icon icon={Edit} size="sm" />
            <p className="text-xs mt-1">SM (20px)</p>
          </div>
          <div className="text-center">
            <Icon icon={Delete} size="md" />
            <p className="text-xs mt-1">MD (24px)</p>
          </div>
          <div className="text-center">
            <Icon icon={Settings} size="lg" />
            <p className="text-xs mt-1">LG (28px)</p>
          </div>
          <div className="text-center">
            <Icon icon={Search} size="xl" />
            <p className="text-xs mt-1">XL (36px)</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Icon Colors</h3>
        <div className="flex items-center gap-4">
          <Icon icon={Add} color="primary" size="md" />
          <Icon icon={Edit} color="secondary" size="md" />
          <Icon icon={Delete} color="error" size="md" />
          <Icon icon={Settings} color="success" size="md" />
          <Icon icon={Search} color="warning" size="md" />
          <Icon icon={Download} color="muted" size="md" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Clickable Icons</h3>
        <div className="flex items-center gap-4">
          <Icon
            icon={Add}
            size="md"
            color="primary"
            clickable
            onClick={() => alert("Add clicked!")}
          />
          <Icon
            icon={Edit}
            size="md"
            color="secondary"
            clickable
            onClick={() => alert("Edit clicked!")}
          />
          <Icon
            icon={Delete}
            size="md"
            color="error"
            clickable
            onClick={() => alert("Delete clicked!")}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Icons in Context</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 bg-gray-100 rounded">
            <Icon icon={Add} size="sm" color="primary" />
            <span>Add new item</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gray-100 rounded">
            <Icon icon={Search} size="sm" color="muted" />
            <span>Search items</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gray-100 rounded">
            <Icon icon={Download} size="sm" color="success" />
            <span>Download file</span>
          </div>
        </div>
      </div>
    </div>
  );
};
