"use client";

import usePresence from "@convex-dev/presence/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import FacePile from "@convex-dev/presence/facepile";
import { useQuery } from "convex/react";


interface iAppProps {
    roomId: Id<"posts">;
}

export function PostPresence({ roomId }: iAppProps) {
  const userId = useQuery(api.presence.getUserId);
  const presenceState = usePresence(api.presence, roomId, userId || "");

  if (!userId || !presenceState || presenceState.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Viewing now</p>
        <div className="text-black">
          <FacePile presenceState={presenceState}/>
        </div>
    </div>
  );

    
}
