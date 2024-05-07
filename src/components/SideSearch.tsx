import { Toggle } from './Toggle'

function className(...classes:any[]) {
  return classes.filter(Boolean).join(' ')
}

export function SideSearch() {
  return (
      <div>
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-800 px-6 pb-4">
            <div className="flex h-16 items-center justify-between">
            <p>Football</p>
            <Toggle/>
            <p>Formula 1</p>
            <Toggle/>
            </div>
          </div>
        </div>
        <div className="lg:pl-72">
        </div>
      </div>
  )
}
