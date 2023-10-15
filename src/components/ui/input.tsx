import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    setSearchRoute:  any;
    searchRoute: any;
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, setSearchRoute, searchRoute, ...props }, ref) => {

    const handleChange = (e) => {
      setSearchRoute((prev: string) => prev = e.target.value)
      console.log(searchRoute)
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        onChange={handleChange}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
