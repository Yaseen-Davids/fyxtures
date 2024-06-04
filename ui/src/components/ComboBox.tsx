import { useState, FC, useMemo } from "react";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  data: any[];
  selected: any[];
  loading: boolean;
  setSelected(selected: any[]): void;
};

// TODO: make reuseable

export const ComboBox: FC<Props> = ({
  data,
  selected,
  loading,
  setSelected,
}) => {
  const [query, setQuery] = useState("");

  const filteredData = useMemo(
    () =>
      query === ""
        ? data
        : data.filter((team) =>
            team.name.toLowerCase().includes(query.toLowerCase())
          ),
    [query, data]
  );

  const optionsSelected = useMemo(
    () => selected.map((s) => data.find((d) => d.teamId == s)).filter((s) => s),
    [selected, data]
  );

  const unSelect = (teamId: number) => {
    setSelected(selected.filter((s) => s !== teamId));
  };

  return (
    <div>
      <div className="flex gap-1 flex-row flex-wrap">
        {optionsSelected.map((s) => (
          <span className="inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-500/10 flex flex-row gap-2">
            <span>{s.name}</span>
            <span
              className="hover:bg-gray-600 cursor-pointer pl-1 pr-1 rounded"
              onClick={() => unSelect(s.teamId)}
            >
              x
            </span>
          </span>
        ))}
      </div>
      <Combobox
        multiple
        as="div"
        value={selected}
        disabled={loading}
        onChange={(team: any) => setSelected(team)}
      >
        <div className="relative mt-2">
          <ComboboxInput
            multiple
            placeholder="Select a team"
            className="text-xs w-full rounded-md border-0 bg-gray-700 py-1.5 pl-3 pr-12 text-white shadow-sm ring-1 ring-inset ring-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(event: any) => setQuery(event.target.value)}
            onBlur={() => setQuery("")}
          />
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </ComboboxButton>
          <ComboboxOptions className="absolute z-10 mt-1 w-full rounded-md bg-gray-800 py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-full h-56">
            <AutoSizer>
              {({ height, width }) => (
                <List
                  itemCount={filteredData.length}
                  height={height}
                  itemSize={40}
                  width={width - 4}
                  itemData={filteredData}
                  layout="vertical"
                >
                  {Row}
                </List>
              )}
            </AutoSizer>
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>
  );
};

const Row = (props: any) => {
  const { data, style, index } = props;
  const selectedValue = data[index];

  return (
    <ComboboxOption
      style={style}
      value={selectedValue.teamId}
      key={`${selectedValue.id}-${selectedValue.name}`}
      className={({ focus }: any) =>
        classNames(
          "text-xs relative cursor-pointer select-none py-2 pl-3 pr-9",
          focus ? "bg-indigo-600 text-white" : "text-white"
        )
      }
    >
      {({ focus, selected }) => (
        <>
          <div className="flex items-center">
            <img
              src={selectedValue.image.url}
              alt=""
              className="h-5 w-5 flex-shrink-0 rounded-full"
            />
            <span
              className={classNames(
                "ml-3 truncate",
                selected && "font-semibold"
              )}
            >
              {selectedValue.name}
            </span>
          </div>
          {selected && (
            <span
              className={classNames(
                "absolute inset-y-0 right-0 flex items-center pr-4",
                focus ? "text-white" : "text-indigo-600"
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
        </>
      )}
    </ComboboxOption>
  );
};
