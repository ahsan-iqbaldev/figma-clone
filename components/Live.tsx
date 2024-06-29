import React, { useCallback } from "react";
import LiveCourser from "./cursor/LiveCourser";
import { useMyPresence, useOthers } from "@/assets/assets/liveblocks.config";

const Live = () => {
  const others = useOthers();
  const [{ cursor }, udpateMyPresence] = useMyPresence() as any;

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    udpateMyPresence({ cursor: { x, y } });
  }, []);

  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    udpateMyPresence({ cursor: null, message: null });
  }, []);

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    udpateMyPresence({ cursor: { x, y } });
  }, []);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className="h-[100vh] w-full flex justify-center items-center text-center border-5 border-green-500"
    >
      <h1 className="text-2xl text-white">FIgma Clone by Ahsan</h1>
      <LiveCourser others={others} />
    </div>
  );
};

export default Live;
