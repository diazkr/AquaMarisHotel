
import { UserInterface } from "@/interfaces/UserInterface";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

const UserDetail: React.FC<UserInterface> = ({
  id,
  name,
  email,
  phone,
  country,
  reservations,
}) => {
  return (
    <div className="p-6 mx-auto w-full">
      <div className="flex items-center mb-4">
        <FaUser className="mr-3 text-gray-600" />
        <div>
          <p className="text-sm font-semibold">Nombre:</p>
          <p className="text-sm">{name}</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <FaEnvelope className="mr-3 text-gray-600" />
        <div>
          <p className="text-sm font-semibold">Email:</p>
          <p className="text-sm">{email}</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <FaMapMarkerAlt className="mr-3 text-gray-600" />
        <div>
          <p className="text-sm font-semibold">Ubicación:</p>
          <p className="text-sm">
            {country}
          </p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <FaPhone className="mr-3 text-gray-600" />
        <div>
          <p className="text-sm font-semibold">Teléfono:</p>
          <p className="text-sm">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
