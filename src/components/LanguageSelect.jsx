import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";

export default function LanguageSelector({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}) {
  return (
    <div className="w-64">
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <Listbox.Label className="block text-sm font-medium text-white mb-1 ">
          Translate to
        </Listbox.Label>

        <div className="relative mt-1">
          <ListboxButton className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-[#0077b6] py-2.5 pl-3 pr-10 text-left border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-base">{selectedLanguage.flag}</span>
              <span className="block truncate text-gray-900 dark:text-white">
                {selectedLanguage.name}
              </span>
            </span>

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 8l4 4 4-4"
                />
              </svg>
            </span>
          </ListboxButton>

          <Transition
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-[#134059] py-1   shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
              {languages.map((lang) => (
                <ListboxOption
                  key={lang.id}
                  value={lang}
                  className={({ focus }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      focus
                        ? "bg-blue-100 dark:bg-[#0077b6] text-blue-900 dark:text-blue-100"
                        : "text-gray-900 dark:text-gray-100"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className="flex items-center gap-2">
                        <span className="text-base">{lang.flag}</span>
                        <span
                          className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                        >
                          {lang.name}
                        </span>
                      </span>

                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600 dark:text-blue-400">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
