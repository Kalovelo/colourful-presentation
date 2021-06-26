import React, { createContext, useState, useEffect } from "react";

type OnlineContext = {
  isOnline: boolean;
};

export const OnlineContext = createContext<OnlineContext | null>(null);

export const OnlineContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  return (
    <OnlineContext.Provider value={{ isOnline }}>{children}</OnlineContext.Provider>
  );
};
