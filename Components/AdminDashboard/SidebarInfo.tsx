import { useState } from "react";

import Link from "next/link";
// assets

import { BiSolidRightArrow } from "react-icons/bi";
import { SidebarMenu, SidebarMenuButton } from "../ui/sidebar";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { AdminDashboardConstant } from "../../Constant";

const SidebarInfo = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const [active, setActive] = useState(0);

  const handleClick = (path) => {
    router.replace(path);
  };

  return (
    <>
      <SidebarMenu className="container mx-auto flex flex-col gap-2 py-8 px-2">
        {AdminDashboardConstant.map((item, index) => {
          return (
            <div key={index}>
              <Link href={`/admin/${item.url}`}>
                <SidebarMenuButton
                  onClick={() => {
                    if (index === 1) {
                      setShow(!show);
                      setActive(index);
                    } else {
                      setActive(index);
                    }
                  }}
                  className={
                    active === index
                      ? " bg-primary shadow-sm shadow-primary py-6 px-4 text-white fill-white hover:shadow-none transition-colors duration-300 hover:text-white hover:bg-primary"
                      : " flex items-center py-6 px-4 gap-4 bg-transparent shadow-none text-neutral-400 fill-slate-400 cursor-pointer transition-colors duration-300 hover:text-slate-400 hover:bg-slate-200"
                  }
                >
                  {item.src}
                  <p>{item.label}</p>

                  {index === 1 ? (
                    <BiSolidRightArrow
                      className={`${
                        show ? "rotate-90" : "rotate-0"
                      } transition-transform duration-300 ml-auto `}
                    />
                  ) : (
                    ""
                  )}
                </SidebarMenuButton>
              </Link>
              {index === 1 ? (
                <div
                  className={
                    show
                      ? " flex flex-col gap-4 items-start text-gray-300 font-medium px-4 py-2"
                      : " hidden"
                  }
                >
                  <Button
                    onClick={() => {
                      handleClick("/admin/spaces");
                    }}
                    className=" bg-transparent text-neutral-400 shadow-none hover:bg-transparent hover:text-primary cursor-pointer"
                  >
                    Apartment
                  </Button>
                  <Button
                    onClick={() => {
                      handleClick("/admin/spaces/co-space");
                    }}
                    className=" bg-transparent text-neutral-400 shadow-none hover:bg-transparent hover:text-primary cursor-pointer"
                  >
                    Co-Living Space
                  </Button>
                  <Button
                    disabled
                    className=" flex gap-8 items-end bg-transparent text-neutral-400 font-medium"
                  >
                    {" "}
                    Hotel{" "}
                    <span className=" bg-tertially text-white text-[8px] rounded p-1 ">
                      {" "}
                      Coming Soon{" "}
                    </span>
                  </Button>
                  <Button
                    disabled
                    className=" flex gap-8 items-end bg-transparent text-neutral-400 font-medium"
                  >
                    {" "}
                    Real Estate{" "}
                    <span className=" bg-tertially text-[8px] rounded p-1 text-white">
                      {" "}
                      Coming Soon{" "}
                    </span>
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </SidebarMenu>
    </>
  );
};

export default SidebarInfo;
