import { chats } from '@/libs/api';
import { cookies } from 'next/headers';
import Link from 'next/link';

const ChatRoomList = async () => {
  const cookieStore = cookies();
  const rt = cookieStore.get('refresh_token')?.value;

  if (!rt) {
    return <div>로그인 먼저 해주세요</div>;
  }

  const { data } = await chats.getChatList(rt);

  return (
    <ul className='h-full'>
      {data.map(room => (
        <li key={room.chatParticipantsResponseDTO.chatParticipantsId}>
          <Link
            href={`/chats/${room.chatParticipantsResponseDTO.chatRoomResponseDTO.chatRoomId}`}
            className='block p-2 border-b'
          >
            <p className='font-bold'>
              {room.chatParticipantsResponseDTO.chatParticipantsMemberName}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ChatRoomList;
