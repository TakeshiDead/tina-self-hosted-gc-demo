import React, { useEffect, useReducer } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "../../tina/__generated__/types";

export const Header = ({ data }: { data: GlobalHeader }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'showMenu':
        return { ...state, showMenu: action.payload }
      case 'revealNavigation':
        return { ...state, revealNavigation: action.payload }
      default:
        return state;
    }
  }, {
    showMenu: false,
    revealNavigation: true,
  });
  const { showMenu, revealNavigation } = state;
  const router = useRouter();

  let prevScrollY

  useEffect(() => {
    toggleMenu(true);
  }, [router.asPath]);

  useEffect(() => {
    window.addEventListener("scroll", () => debounce(handleScroll(), 10, false));
  }, [showMenu]);

  function debounce(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args)
    };
  }

  function handleScroll() {
    const currentScrollY = window.scrollY;
    if (window.innerWidth < 1025) {
      if (!showMenu) return;
      if (currentScrollY <= 65) {
        dispatch({ type: 'revealNavigation', payload: true })
      }
      else {
        if (prevScrollY > currentScrollY) {
          dispatch({ type: 'revealNavigation', payload: true })
        }
        else {
          dispatch({ type: 'revealNavigation', payload: false })
        }
      }
    } 
    else {
      if (currentScrollY <= 50) {
        toggleMenu(true)
      }
      else{
        if (prevScrollY > currentScrollY) {
          toggleMenu(true)
        }
        else {
          toggleMenu(false)
        }
      }
    }
    prevScrollY = currentScrollY;
  };

  function toggleMenu(bool) {
    dispatch({ type: 'showMenu', payload: bool })
    if (window.innerWidth < 1025) {
      if (bool) {
        document.body.style.overflow = "unset";
      } else {
        document.body.style.overflow = "hidden";
      }
    }
  
  }

  return (
    <header
      className={`flex flex-row lg:flex-col justify-between w-screen lg:overflow-hidden z-50 fixed top-0 left-0 right-0 ${showMenu ? "lg:translate-y-0" : "lg:-translate-y-[50vh]"} 
      transition-transform duration-500 overscroll-contain`}
    >
      <div
        className={`w-full py-4 px-5 lg:px-[6vw] flex flex-row justify-between items-center bg-white 
        ${revealNavigation ? "translate-y-0" : "-translate-y-[50vh] lg:translate-y-0"} 
        transition duration-500
        `}
      >
        <Link
          href="/"
          className={`relative w-32 md:w-36 lg:w-48 retina:w-40 aspect-[4/2] md:ml-4 z-50 ${revealNavigation
            ? "translate-y-0"
            : "-translate-y-[50vh] lg:translate-y-0"
            } transition duration-500`}
        >
          <Image
            src={ data.media && data.media.src ? data.media.src : "/your-brand-logo.svg" }
            alt={data.media && data.media.alt || "Your Brand Logo"}
            data-tina-field={tinaField(data, "media")}
            className="object-contain"
            fill
          />
        </Link>
        <svg
          onClick={() => {toggleMenu(!showMenu)}}
          className={`w-6 h-6 fixed right-4 top-0 z-50 lg:hidden mt-4 lg:mt-3 lg:mr-3 ${revealNavigation
            ? "translate-y-0"
            : "-translate-y-[50vh] lg:translate-y-0"
            } transition duration-500 text-black bg-white`}
          viewBox="0 0 35 26"
          fill="currentColor"
        >
          <rect width="35" height="3.71429" />
          <rect y="11.1429" width="35" height="3.71429" />
          <rect y="22.2857" width="35" height="3.71429" />
        </svg>
        <ul
          className={`w-full h-screen lg:h-min z-40 pl-6 md:pl-10 lg:pl-0 absolute top-0 left-0 lg:relative flex flex-col lg:flex-row justify-start lg:justify-end gap-y-2 lg:gap-y-0 lg:gap-x-16 items-start  
          ${showMenu ? "-translate-y-[100vh] lg:translate-y-0 pt-0" : "translate-y-0 lg:-translate-y-[100vh] pt-28"}  bg-white lg:bg-transparent transform transition duration-500`}
        >
          {data.nav &&
            data.nav.map((item, i) => {
              const activeItem =
                (item && item.href === "" ? router.asPath === "/" : router.asPath.includes(item?.href || ""))
              return (
                <li
                  key={`${item?.label}-${i}`}
                  className={`${activeItem ? "text-gray-700" : "text-black"
                    }`}
                >
                  <Link
                    data-tina-field={item ? tinaField(item, "label") : null}
                    href={`/${item?.href}`}
                    className={`lg:py-2 relative select-none font-sans text-2xl retina:text-lg lg:text-lg inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 ${activeItem ? `` : `opacity-70`}`}
                  >
                    {item?.label}
                  </Link>
                </li>
              );
            })}
          <div className="contents">
          </div>
        </ul>
      </div>
    </header>
  );
};