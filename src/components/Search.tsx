'use client'
import { searchRouteAtom } from "@/atoms/atoms"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

export function Search () {

  const router = useRouter();
  const [searchRoute, setSearchRoute] = useState("");

  return (
    <form className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Search...." setSearchRoute={setSearchRoute} searchRoute={searchRoute} />
      <Button type="submit" onClick={() => router.push(`/${searchRoute}`)}>Search</Button>
    </form>
  )
}
