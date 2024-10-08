import { Avatar } from "@nextui-org/react";
import { IUserStatus } from "../redux/Types";

function SingleChatPreview(props: IUserStatus) {
  return (
    <div className="flex items-center p-4 border-b-1 border-gray-200">
      <Avatar
        isBordered
        showFallback
        color={props.isActive ? "success" : "default"}
        src={props?.displayPicture}
        className="flex-none w-14 h-14"
      />
      <div className="userInfo ml-3 grow w-5/6">
        <div className="flex justify-between items-center">
          <p className="text-lg text-black">{props.name}</p>
          <span className="lastSeenTime text-sm text-gray-500">
            {props.lastSeen}
          </span>
        </div>
        {props.isTyping && props.isActive ? (
          <p className="italic text-green-500 text-sm">typing...</p>
          ) : (
          <p className="text-sm text-gray-500 truncate">{props.lastMessage}</p>
        )}
      </div>
    </div>
  );
}

export default SingleChatPreview;
