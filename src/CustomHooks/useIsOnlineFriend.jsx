import { useEffect, useState } from "react";

export default function useIsOnlineFriend(friend) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setIsOnline(friend.status === "online");
  }, [friend.status]);

  return isOnline ? 'yes' : 'no';
}

