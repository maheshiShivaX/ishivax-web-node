import axios from "axios";


export const baseurl = "https://ishivaxapi.ishivax.com/api/";
export const imagebaseurl = "https://ishivaxapi.ishivax.com/";

// export const baseurl = "http://localhost:8000/api/";
// export const imagebaseurl = "http://localhost:8000/api/";

export const API_URL = {
    GetOverview: "overview/data",

    GetFaqs: "Faqs/GetFaqs",

    GetCreative: "/creative/data",

    GetServiceIndustryByServiceSlug: "ServiceIndustry/GetServiceIndustryByServiceSlug",

    getServices: 'Service/getServices',
    GetServiceDetailByServiceSlug: "ServiceDetail/GetServiceDetailByServiceSlug",

    GetBlogDetailAll: "BlogDetail/GetBlogDetailAll",
    GetProjectDetail: "ProjectDetail/GetProjectDetailHomeDisplay",
    GetProjectDetailAll: "ProjectDetail/GetProjectDetail",
    GetWorkType: "WorkType/GetWorkType",
    SaveEnquiry: "Enquiry/SaveEnquiry",
    GetTechPartnerHomePage: "TechPartner/GetTechPartnerHomePage",
    GetImageDetailByImageType: "ImageDetail/GetImageDetailByImageType",
    GetTestimonialApproved: "Testimonial/GetTestimonialApproved",
    GetPortfolioType: "PortfolioType/GetPortfolioType",
    GetJobPost: "JobPost/GetJobPost",
    GetProductHomeDisplay: "Product/GetProductHomeDisplay",
    SavePostEnquiry: "PostEnquiry/SavePostEnquiry",
    GetBudgetRange: "BudgetRange/GetBudgetRange",
    GetCountry: "Country/GetCountry",
    SaveQuotation: "Quotation/SaveQuotation",

    GetBlogDetailById: 'BlogDetail/GetBlogDetailById',
    GetBlogDetailBySlug: 'BlogDetail/GetBlogDetailBySlug',

    GetProductDetailByProductId: 'Product/GetProductDetailByProductId',

    GetCollaborate: 'Collaborate/GetCollaborate',

    GetMobileSection: 'MobileSection/GetMobileSection',
}

// export function get(apiurl)
// {
//     axios.get(`${baseurl}${apiurl}`);
// }


const axiosIns = axios.create({
    baseURL: baseurl,  // Corrected from 'baseurl' to 'baseURL'
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosIns;







