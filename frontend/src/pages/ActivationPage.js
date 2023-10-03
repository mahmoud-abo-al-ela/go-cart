import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ActivationPage = () => {
  const { activationToken } = useParams();
  const [error, setError] = useState(false);
  useEffect(() => {
    if (activationToken) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            `http://localhost:5000/api/v1/activation`,
            {
              activationToken,
            }
          );
          console.log(res.data.message);
        } catch (error) {
          console.log(error.response?.data.message);
          setError(true);
        }
      };
      activationEmail();
    }
  }, [activationToken]);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center font-medium text-lg">
      {error ? (
        <p>Your token expired!</p>
      ) : (
        <p>Your account has been created successfully.</p>
      )}
    </div>
  );
};
export default ActivationPage;
