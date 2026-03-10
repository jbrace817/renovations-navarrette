"use client";

import { AvatarGroup } from "@/components/shadcnblocks/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const title = "Tight Spacing with Borders";

const AvatarGroupTightBorder1 = () => (
  <AvatarGroup spacing="tight">
    <Avatar className="border-background border-2">
      <AvatarImage src="https://github.com/haydenbleasel.png" />
      <AvatarFallback>HB</AvatarFallback>
    </Avatar>
    <Avatar className="border-background border-2">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar className="border-background border-2">
      <AvatarImage src="https://github.com/leerob.png" />
      <AvatarFallback>LR</AvatarFallback>
    </Avatar>
    <Avatar className="border-background border-2">
      <AvatarImage src="https://github.com/serafimcloud.png" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  </AvatarGroup>
);

export default AvatarGroupTightBorder1;
