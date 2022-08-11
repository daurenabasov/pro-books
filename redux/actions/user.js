import axios from "axios";

export const registration = async (username, email, password) => {
    try {
        const response = await axios.post(
            "https://285d-212-112-122-214.in.ngrok.io/api/v1/auth/users/",
            {
                username,
                email,
                password,
            }
        );
    } catch (error) {
        console.error(error.message);;
    }
};
