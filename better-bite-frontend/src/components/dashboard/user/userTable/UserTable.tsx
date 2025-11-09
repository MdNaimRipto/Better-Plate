import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

interface IUser {
  userName: string;
  email: string;
  contactNumber: string;
  password: string;
  profileImage: string;
  location: string;
  //   activeStatus: boolean;
  //   accountStatus: accountStatusEnums;
  //   role: roleEnums;
}

const UserTable = ({ userData }: { userData: IUser[] }) => {
  return (
    <div className="max-h-[70vh] overflow-y-auto rounded shadow-md">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th className="py-3 px-4 font-medium">Image</th>
            <th className="py-3 px-4 font-medium">User Name</th>
            <th className="py-3 px-4 font-medium">Email</th>
            <th className="py-3 px-4 font-medium">Password</th>
            <th className="py-3 px-4 font-medium">Contact Number</th>
            <th className="py-3 px-4 font-medium">Location</th>
            <th className="py-3 px-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-lightGray"
              } hover:bg-gray/10 transition-colors`}
            >
              <td className="py-3 px-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={data.profileImage}
                    alt={data.userName}
                    fill
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="py-3 px-4">{data.userName}</td>
              <td className="py-3 px-4">{data.email}</td>
              <td className="py-3 px-4">{data.password}</td>
              <td className="py-3 px-4">{data.contactNumber}</td>
              <td className="py-3 px-4">{data.location}</td>
              <td className="pr-4">
                <div className="flex justify-end gap-3">
                  <button className="text-success text-lg">
                    <FaRegEdit />
                  </button>
                  <button className="text-error text-xl">
                    <MdDeleteForever />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
