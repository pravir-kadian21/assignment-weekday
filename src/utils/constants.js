export const GET_JOBS_API_URL =
  "https://api.weekday.technology/adhoc/getSampleJdJSON";

export const INPUT_DEBOUNSE_TIMEOUT = 300;

export const API_DATA_LIMIT = 10;

export const EXPERIENCE_FILTER_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const REMOTE_FILTER_OPTIONS = [
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
  { value: "inoffice", label: "In-Office" },
];

export const MIN_BASE_PAY_FILTER_OTIONS = [
  { value: "0-20 USD" },
  { value: "21-40 USD" },
  { value: "41-60 USD" },
  { value: "61-80 USD" },
  { value: "81-100 USD" },
  { value: "100+ USD" },
];

export const ROLE_FILTER_OPTION = [
  {
    category: "ENGINEERING",
    value: "Backend",
  },
  {
    category: "ENGINEERING",
    value: "Frontend",
  },
  {
    category: "ENGINEERING",
    value: "Fullstack",
  },
  {
    category: "ENGINEERING",
    value: "IOS",
  },
  {
    category: "ENGINEERING",
    value: "Flutter",
  },
  {
    category: "ENGINEERING",
    value: "React Native",
  },
  {
    category: "ENGINEERING",
    value: "Android",
  },
  {
    category: "ENGINEERING",
    value: "Tech-Lead",
  },
  {
    category: "ENGINEERING",
    value: "Dev-Ops",
  },
  {
    category: "ENGINEERING",
    value: "Data Engineer",
  },
  {
    category: "ENGINEERING",
    value: "Data Science",
  },
  {
    category: "ENGINEERING",
    value: "Computer-Vision",
  },
  {
    category: "ENGINEERING",
    value: "NLP",
  },
  {
    category: "ENGINEERING",
    value: "Deep-Learning",
  },
  {
    category: "ENGINEERING",
    value: "Test/QA",
  },
  {
    category: "ENGINEERING",
    value: "Web3",
  },
  {
    category: "DESIGN",
    value: "Designer",
  },
  {
    category: "DESIGN",
    value: "Design Manager",
  },
  {
    category: "DESIGN",
    value: "Graphic Designer",
  },
  {
    category: "DESIGN",
    value: "Product Designer",
  },
  {
    category: "PRODUCT",
    value: "Product Manager",
  },
  {
    category: "OPERATIONS",
    value: "Operations Manager",
  },
  {
    category: "DATA ANALYST",
    value: "Data Analyst",
  },
  {
    category: "HR",
    value: "Hr",
  },
  {
    category: "FINANCE",
    value: "Finance",
  },
  {
    category: "LEGAL",
    value: "Legal",
  },
];

export const TEXT_INPUT_META_DATA = [
  { placeholder: "Search Company Name", name: "company" },
  { placeholder: "Location", name: "location" },
];
