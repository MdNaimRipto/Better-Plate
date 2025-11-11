export const apiConfig = {
  BASE_URL: "https://better-plate-backend.vercel.app/v1.0.0/apis",
  // BASE_URL: "http://localhost:5000/v1.0.0/apis",
  USER: {
    REGISTER: "/users/register", // ✅
    VERIFY: "/users/verifyAccount", // ✅
    LOGIN: "/users/login", // ✅
    GET: "/users/me", // ✅
    LOGOUT: "/users/logout", // ✅
    UPDATE_USER: "/users/updateUser",
    UPDATE_PASSWORD: "/users/updatePassword",
    UPDATE_STATUS: "/users/updateActiveStatus",
  },
  ORDER: {
    ORDER: "/payment/createPaymentLink",
    GET_ALL: "/order/getAllOrders",
    GET_USER: "/order/getUserOrders",
  },
};
