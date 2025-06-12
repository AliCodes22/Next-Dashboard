import { BellDot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BellAvatar = () => {
  return (
    <div className="flex justify-end items-center space-x-4">
      <BellDot color="#e32305" />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col pr-4">
        <span className="text-sm font-medium">Ali</span>
        <span className="text-xs text-gray-500">Welcome!</span>
      </div>
    </div>
  );
};

export default BellAvatar;
