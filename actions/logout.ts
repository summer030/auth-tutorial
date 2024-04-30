"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // some server stuff
  // similarly used in button click
  await signOut();
};
