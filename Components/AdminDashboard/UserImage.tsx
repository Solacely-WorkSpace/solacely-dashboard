import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { useUser } from "../../Context/UserData";

const UserImage = () => {
  const { user } = useUser();
  const profile_image = user?.user?.profile_image || '';
  return (
    <>
      {profile_image !== null ? (
        <Image
          src={profile_image}
          alt="user pic"
          width={48}
          height={48}
          className=" w-8 md:w-12"
        />
      ) : (
        <span aria-label="Profile_pic">
          <FaUserCircle size={32} />
        </span>
      )}
    </>
  );
};

export default UserImage;
