import {
    Text,
  } from "project-isaac-components";

interface LabelProps {
    label?: string;
    icon?: React.ReactNode;
  }
    

interface ValueProps {
    label?: string;
    icon?: React.ReactNode;
  }



  export const ListItemLabel = ({ label, icon }: LabelProps) => {
    return (
      <div className="flex items-center">
        <div className="inline-flex items-center gap-6">
          <div className="flex items-center justify-center bg-[#D9D9D9] rounded-md h-[50px] w-[50px]">
            {icon}
          </div>
          <Text
            text={label}
            color="#687782"
            className="text-base font-medium text-gray-500"
          />
        </div>
      </div>
    );
  };

export const ListItemValue = ({ label, icon }: ValueProps) => {
    return <div className="px-3">{icon}</div>;
  };
  