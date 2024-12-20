"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import Link from "next/link";

import { MdPhone, MdPlayCircleOutline } from "react-icons/md";
import { FaChevronDown, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import {
  categorys,
  communityCategorys,
  moreCategorys,
  partnershipCategorys,
} from "@/helper/utils";
import Logo from "./Svgs/Logo";

import { usePathname } from "next/navigation";
import Modal from "./Modal";
import WalletForm from "./WalletForm";

const Buttons = () => (
  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    <div className="flex items-center text-link mr-3">
      <FaGlobe />
      <div className="ml-2">English</div>
      <FaChevronDown className="text-xs ml-1" />
    </div>
    <Modal
      caption={
        <button className="py-2 px-3 bg-gradient-to-br from-[#66ccff] via-[#66ccff] to-[#18a1fc] hover:bg-[#18a1fc]  rounded-xl">
          Get Tangem
        </button>
      }
      body={<WalletForm />}
    />
  </div>
);
const callsToAction = [
  {
    name: "My Portfolio",
    href: "https://kunkky.digitalworldclassscholars.org",
    icon: MdPlayCircleOutline,
  },
  { name: "Contact sales", href: "tel:+2348104048887", icon: MdPhone },
];

const normalLinks = [
  {
    link: "/",
    title: "Wallet",
  },
  {
    link: "",
    title: "Ring",
  },
];
const dropableLinks = [
  {
    parent: "Partnership",
    children: partnershipCategorys,
  },
  {
    parent: "Community",
    children: communityCategorys,
  },
  {
    parent: "More",
    children: moreCategorys,
  },
];
export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // Gets the current path

  const isActive = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-10 text-white font-light shadow backdrop-blur-lg bg-primary ">
      <div className="p-2 text-center bg-[#18251F] text-white">
        <span className="font-medium">
          Free Worldwide Shipping on All Orders.
        </span>{" "}
        Limited Time Offer. |{" "}
        <span className="text-[#77FBAD] font-medium">Shop Now</span>{" "}
      </div>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Logo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <FaBars aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex gap-6 px-4">
          {normalLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={`text-sm/6 font-normal leading-6 ${
                isActive(link.link) ? "text-white font-semibold" : "text-link "
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-6">
          {dropableLinks.map((link, index) => (
            <PopoverGroup className="hidden lg:flex lg:gap-x-12" key={index}>
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm/6  font-normal text-link focus:outline-none focus:border-0">
                  {link.parent}
                  <FaChevronDown
                    aria-hidden="true"
                    className="text-xs flex-none text-link"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 bg-[#1c1c1d] mt-3 w-screen max-w-fit overflow-hidden rounded-3xl  shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {link.children.map((item) => (
                      <div
                        key={item.name}
                        className="group text-nowrap relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-link"
                      >
                        {item.icon && (
                          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-slate-700">
                            <item.icon
                              aria-hidden="true"
                              className="size-6 text-gray-600 group-hover:text-indigo-600"
                            />
                          </div>
                        )}

                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-normal text-gray-500 hover:text-white"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-normal text-gray-900 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div> */}
                </PopoverPanel>
              </Popover>
            </PopoverGroup>
          ))}
        </div>
        <Buttons />
      </nav>
      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Logo />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 focus:outline-0"
            >
              <span className="sr-only">Close menu</span>
              <FaTimes aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {dropableLinks.map((link, index) => (
                  <Disclosure as="div" key={index} className="-mx-3">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-normal leading-7 text-gray-900 hover:bg-gray-50">
                          {link.parent}
                          <FaChevronDown
                            aria-hidden="true"
                            className="text-xs flex-none text-link"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {link.children.map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm/6 font-normal leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
                <div>
                  {normalLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.link}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-normal text-gray-900 hover:bg-gray-50"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="py-6">
                <Buttons />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
