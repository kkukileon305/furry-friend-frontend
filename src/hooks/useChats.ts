import { useEffect, useRef, useState } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { MessageData, MessageResponse } from '@/types';
import SockJS from 'sockjs-client';

type UseChatProps = {
  chatRoomId: string;
  at: string;
  rt: string;
};

export const useChats = ({ chatRoomId, at, rt }: UseChatProps) => {
  const stompClient = useRef<CompatClient | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const [messages, setMessages] = useState<MessageData[]>([]);

  useEffect(() => {
    const socket = new SockJS(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/chats/furry`
    );
    stompClient.current = Stomp.over(socket);

    stompClient.current.connect(
      {
        Authorization: `Bearer ${rt}`,
      },
      async () => {
        setIsConnected(true);

        stompClient.current?.subscribe(`/sub/chats/${chatRoomId}`, response => {
          const message = JSON.parse(response.body) as MessageResponse;

          setMessages(prev => [...prev, message.data]);
        });
      }
    );

    return () => {
      stompClient.current?.disconnect(() => {
        setIsConnected(false);
      });
    };
  }, []);

  return {
    isConnected,
    messages,
    stompClient,
  };
};
