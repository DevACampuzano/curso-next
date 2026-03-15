import { redirect } from "next/navigation";

export const page = () => {
  redirect("/auth/login");
};

export default page;
