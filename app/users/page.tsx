import { signOut } from "next-auth/react";
import EmptyState from "../components/EmptyState";

const User = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
        <EmptyState />
    </div>
  )
};

export default User;
