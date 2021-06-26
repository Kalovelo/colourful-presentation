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
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator === "object" && navigator.onLine
  );

  const updateOnlineStatus = () => {
    setIsOnline(typeof navigator === "object" && navigator.onLine);
  };

  useEffect(() => {
    document.addEventListener("online", updateOnlineStatus);
    document.addEventListener("offline", updateOnlineStatus);
    return () => {
      document.removeEventListener("online", updateOnlineStatus);
      document.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <OnlineContext.Provider value={{ isOnline }}>{children}</OnlineContext.Provider>
  );
};
