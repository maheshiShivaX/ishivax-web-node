import axiosIns, { API_URL } from "../config";
import CryptoJS from 'crypto-js';

const SECRET_KEY = "X9f!@#7LwPq8$RtBz3Kq1UvN4TxQ2Zm";

export const decryptData = (encryptedText) => {
    try {
        if (!encryptedText) return null;

        const bytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);

        if (!decrypted) return null;

        return JSON.parse(decrypted);
    } catch (err) {
        console.error("Failed to decrypt or parse JSON:", err);
        return null;
    }
};

export const getBlogDetailAll = async () => {
    try {
        const response = await axiosIns.get(API_URL.GetBlogDetailAll);

        if (response.status === 200 && response.data.isSuccess === 1) {
            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}

export const getProjectDetail = async () => {
    try {
        const response = await axiosIns.get(API_URL.GetProjectDetail);

        if (response.status === 200 && response.data.isSuccess === 1) {
            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}
export const GetProjectDetailAll = async () => {
    try {
        const response = await axiosIns.get(API_URL.GetProjectDetailAll);

        if (response.status === 200 && response.data.isSuccess === 1) {
            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}
export const GetTechPartnerHomePage = async () => {
    try {
        const response = await axiosIns.get(API_URL.GetTechPartnerHomePage);

        if (response.status === 200 && response.data.isSuccess === 1) {
            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}

export const GetImageDetailByImageType = async (imagetype) => {
    try {
        const response = await axiosIns.get(API_URL.GetImageDetailByImageType + "?pImageType=" + imagetype);

        if (response.status === 200 && response.data.isSuccess === 1) {

            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}
export const GetTestimonialApproved = async (imagetype) => {
    try {
        const response = await axiosIns.get(API_URL.GetTestimonialApproved);

        if (response.status === 200 && response.data.isSuccess === 1) {

            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}

export const GetBudgetRange = async () => {
    try {
        const response = await axiosIns.get(API_URL.GetBudgetRange);

        if (response.status === 200 && response.data.isSuccess === 1) {
            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}
export const GetCountry = async () => {
    try {
        const response = await axiosIns.get(API_URL.GetCountry);

        if (response.status === 200 && response.data.isSuccess === 1) {
            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}


export const getWorkType = async () => {
    try {
        const response = await axiosIns.get(API_URL.GetWorkType);

        if (response.status === 200 && response.data.isSuccess === 1) {
            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}
export const getPortfolioType = async () => {
    try {
        const response = await axiosIns.get(API_URL.GetPortfolioType);

        if (response.status === 200 && response.data.isSuccess === 1) {
            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}



export const saveEnquiry = async (formdata) => {
    try {
        const response = await axiosIns.post(API_URL.SaveEnquiry, formdata);
        if (response.status === 200) {
            // Return the data when the request is successful
            return response.data;
        } else {
            // Throw an error if the response is not successful
            throw new Error(response.data.message || "Failed to save enquiry.");
        }
    } catch (error) {
        // Handle errors: Axios errors or custom errors from the response
        const errorMessage = error.response?.data?.message || error.message || "Please try again later.";
        throw new Error(errorMessage);
    }
}

export const GetJobPost = async () => {
    try {
        const response = await axiosIns.get(API_URL.GetJobPost);

        if (response.status === 200 && response.data.isSuccess === 1) {
            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}



export const SaveQuotation = async (formdata) => {
    try {
        const response = await axiosIns.post(API_URL.SaveQuotation, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        );

        if (response.status === 200) {
            return response.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}

export const SavePostEnquiry = async (formdata) => {
    try {
        const response = await axiosIns.post(API_URL.SavePostEnquiry, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        );

        if (response.status === 200) {
            return response.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}


export const GetProductHomeDisplay = async () => {
    try {
        const response = await axiosIns.get(API_URL.GetProductHomeDisplay);

        if (response.status === 200 && response.data.isSuccess === 1) {
            return response.data.data;
        } else {
            // throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        // throw new Error(error.response?.data?.message || "Please try again later.");
    }
}

