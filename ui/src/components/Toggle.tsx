import { FC } from "react";
import { Field, Label, Switch } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type ToggleProps = {
  label: string;
  enabled: boolean;
  setEnabled(enabled: boolean): void;
};

export const Toggle: FC<ToggleProps> = ({ label, enabled, setEnabled }) => {
  return (
    <Field as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-indigo-600" : "bg-gray-700",
          "relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
      <Label as="span" className="ml-3 text-xs">
        <span className="font-medium text-gray-300">{label}</span>
      </Label>
    </Field>
  );
};
