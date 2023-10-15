'use client'
import { atom } from "recoil";

export const searchRouteAtom = atom({
    key: 'searchRoute',
    default: "",
})