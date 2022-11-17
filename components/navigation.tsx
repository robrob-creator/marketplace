import React, { Dispatch, SetStateAction } from "react";
import {
  Search,
  NavigationBar,
  Dropdown,
  UserAvatar,
  Option,
} from "project-isaac-components";
import { useRouter } from "next/router";

interface Props {
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export default function NavigationPanel({
  authenticated,
  setAuthenticated,
}: Props) {
  const router = useRouter();
  return (
    <NavigationBar
      rightElements={
        <div>
          {authenticated ? (
            <UserAvatar />
          ) : (
            <div className="flex space-x-6 items-center justify-start">
              <Search size="sm" className="lg:visible invisible" />
              <p
                className="text-sm font-medium leading-tight text-blue-700 w-24 cursor-pointer"
                onClick={() => router.push("login")}
              >
                Sign in
              </p>

              <div className="relative" style={{ width: "100%", height: 40 }}>
                <div
                  className="inline-flex items-center justify-center px-5 py-2 bg-blue-700 rounded-lg"
                  style={{ width: "100%", height: 40 }}
                >
                  <p
                    className="text-xs font-semibold leading-snug text-center text-gray-50"
                    onClick={() => setAuthenticated(true)}
                  >
                    Try it free
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      }
      centerElements={
        <div className="text-sm lg:flex-grow lg:flex lg:items-center lg:justify-center">
          <span className="flex  items-center lg:mt-0 text-black hover:text-blue-400 mr-4">
            <Dropdown label="Apps">
              <Option label="Apps" />
            </Dropdown>
          </span>
          <span className="flex  items-center mt-4 lg:mt-0 text-black hover:text-blue-400  mr-4">
            <Dropdown label="Community">
              <Option label="Community" />
            </Dropdown>
          </span>
          <span className="flex  items-center mt-4 lg:mt-0 text-black hover:text-blue-400  mr-4">
            <Dropdown label="Pricing">
              <Option label="Pricing" />
            </Dropdown>
          </span>
        </div>
      }
    />
  );
}
