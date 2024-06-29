declare global {
  interface Liveblocks {
    Presence: {};

    Storage: {};
    UserMeta: {
      id: string;
      info: {};
    };

    RoomEvent: {};
    ThreadMetadata: {};
    RoomInfo: {};
  }
}

export {};
