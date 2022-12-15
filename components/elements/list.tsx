import { Text, StarFilled, StarOutlined } from "project-isaac-components";

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
/** Product detail list elements */

export const Language = () => {
  return (
    <div className="px-4 inline-flex flex-col  space-y-96 sm:px-24 border-r-2 border-gray-400">
      <div className="relative h-24" style={{ width: "81px" }}>
        <p className="absolute right-0 top-0 w-16 text-center text-sm sm:text-base font-bold leading-10 text-gray-700">
          Language
        </p>
        <p
          className="absolute w-full text-2xl sm:text-3xl font-semibold leading-10 text-gray-700"
          style={{ left: " 30px", top: "35px" }}
        >
          EN
        </p>
        <p className="absolute right-0 bottom-0  w-16 text-center mt-2 text-xs leading-10 text-gray-700">
          +5 more
        </p>
      </div>
    </div>
  );
};

export const Chart = () => {
  return (
    <div className="px-4 inline-flex w-64 sm:px-36  flex-col h-24  space-y-96 border-r-2 border-gray-400">
      <div className="inline-flex flex-col items-center justify-center sm:w- sm:h-24">
        <p className="w-full text-xs sm:text-base font-bold  text-center text-gray-700">
          Chart
        </p>
        <p className=" text-2xl sm:text-3xl font-semibold leading-10 text-center text-gray-700">
          No. 5
        </p>
        <div className="inline-flex space-x-0.5 items-start justify-start">
          <p className="text-center text-xs text-gray-700">Point of sale</p>
        </div>
      </div>
    </div>
  );
};
export const Size = () => {
  return (
    <div className="px-4 inline-flex w-36 sm:px-24 h-24 flex-col  space-y-96">
      <div className="relative h-24" style={{ width: "81px" }}>
        <p className="absolute right-0 top-0 w-16 text-center text-sm sm:text-base font-bold leading-10 text-gray-700">
          Size
        </p>
        <p
          className="absolute w-full text-2xl sm:text-3xl font-semibold leading-10 text-gray-700"
          style={{ left: " 9px", top: "35px" }}
        >
          235.5
        </p>
        <p className="absolute right-0 bottom-0 w-16 text-center mt-2 text-xs leading-10 text-gray-700">
          MB
        </p>
      </div>
    </div>
  );
};
export const Developer = () => {
  return (
    <div className="px-4 sm:px-24 border-r-2 border-gray-400 h-24 flex justify-center space-y-96">
      <div className="flex justify-center relative h-24 w-20">
        <p className="absolute top-0 w-16 text-center text-sm sm:text-base font-bold leading-10 text-gray-700">
          Developer
        </p>

        <svg
          className="absolute a w-8 h-8 text-3xl font-semibold leading-10 text-gray-700"
          style={{ top: "35px" }}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM20 10C20 12.2091 18.2091 14 16 14C13.7909 14 12 12.2091 12 10C12 7.79086 13.7909 6 16 6C18.2091 6 20 7.79086 20 10ZM15.9999 18C11.9648 18 8.48789 20.3899 6.90747 23.8314C9.10806 26.3841 12.3653 28 16 28C19.6346 28 22.8917 26.3841 25.0923 23.8316C23.5119 20.39 20.035 18 15.9999 18Z"
            fill="#3C4043"
          />
        </svg>

        <p className="absolute bottom-0 text-center mt-2 text-xs leading-10 text-gray-700">
          Point of sale
        </p>
      </div>
    </div>
  );
};
export const Ratings = () => {
  return (
    <div className="inline-flex justify-items-center px-4 sm:px-24 flex-col h-24 sm:space-y-96 border-r-2 border-gray-400">
      <div className="inline-flex flex-col items-center justify-end sm:w-16 sm:h-24">
        <p className="w-full text-xs sm:text-base font-bold  text-center text-gray-700">
          Ratings
        </p>
        <p className="text-2xl sm:text-3xl font-semibold leading-10 text-center text-gray-700">
          4.5
        </p>
        <div className="inline-flex space-x-0.5 items-start justify-start">
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarOutlined />
        </div>
      </div>
    </div>
  );
};
