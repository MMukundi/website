import { EyeIcon } from "@heroicons/react/solid"
import { classNames } from "./util"

export function Logo({ className = "h-8 w-auto sm:h-10" }) {
	return <EyeIcon className={classNames("text-indigo-600", className)} />
}