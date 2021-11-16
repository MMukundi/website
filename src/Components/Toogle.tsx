import { Switch } from '@headlessui/react'

interface ToggleProps {
	label: string
	labelClass: string

	onChange: (newValue: boolean) => void
	value: boolean
}
export default function Toggle({ value, label, labelClass, onChange }: ToggleProps) {
	return (
		<Switch.Group>
			<div className="inline-flex items-center">
				<Switch.Label className={`mr-1 ${labelClass}`}>{label}</Switch.Label>
				<Switch
					checked={value}
					onChange={onChange}
					className={`${value ? 'bg-indigo-600' : 'bg-gray-200'
						} relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
				>
					<span
						className={`${value ? 'translate-x-6' : 'translate-x-1'
							} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
					/>
				</Switch>
			</div>
		</Switch.Group>
	)
}