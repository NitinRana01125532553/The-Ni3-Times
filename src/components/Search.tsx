'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

export function Search () {

  const navigate = (e: any) => {
    e.preventDefault();
    router.push(`/${searchRoute}`)
  }

  const router = useRouter();
  const [searchRoute, setSearchRoute] = useState("");

  return (
    <form className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search...." setSearchRoute={setSearchRoute} searchRoute={searchRoute} />
      <Button type="submit" onClick={navigate}>Search</Button>
    </form>
  )
}
