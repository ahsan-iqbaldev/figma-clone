import { LiveCursorProps } from "@/types/type";
import React from "react";
import Courser from "./Courser";
import { COLORS } from "@/constants";

const LiveCourser = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence }) => {
    if (!presence?.cursor) return null;
    
    return (
      <Courser
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message}
      />
    );
  });
};

export default LiveCourser;
