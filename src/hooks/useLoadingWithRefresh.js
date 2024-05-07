import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../stores/authSlice";

// data: {
//     user: userDto,
//     auth: true,
//     activated: user.activated,
//     role: user.role,
//   },
export function useLoadingWithRefresh() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/admin/refresh`,
          { withCredentials: true }
        );
        // console.log(data);
        dispatch(setAuth(data));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return {loading};
}
