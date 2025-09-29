export interface Book {
  id: string;
  title: string;
  description: string;
  price: string;
  author: string;
  authorDescription: string;
  samplePdf?: string;
  deliveryInfo: string;
  category: string;
  image?: string;
}

export const books: Book[] = [
  {
    id: "ethics-complete",
    title: "Ethics Part A, Part B, Part A+B by Mudit Sir",
    description: "Decode UPSC Ethics designed by Mudit Jain Sir is a comprehensive guide for mastering the Ethics paper (GS Paper IV) in the UPSC exam. Covering questions from 2013 to 2024, the book breaks down complex ethical dilemmas with clarity, practical frameworks, and unique insights. Organized thematically and aligned with evolving UPSC patterns, this book offers aspirants a strong foundation to write high-scoring, value-enriched answers an essential resource to refine your ethics preparation.",
    price: "₹745",
    author: "Mudit Jain",
    authorDescription: "Mudit Jain, an Ex-IRS and IPS officer, is currently a faculty member at Sarrthi IAS, specializing in Current Affairs, Essay, and Ethics. A best-selling author in the UPSC category, he has co-authored several popular books, including Decode Ethics and Decode Essays.",
    samplePdf: "Available",
    deliveryInfo: "Delivery within 10 Days!",
    category: "Ethics"
  },
  {
    id: "prelims-pyqs",
    title: "Solved Prelims PYQs Book",
    description: "Meticulously designed by Swapna Gautam (IPS), these UPSC Prelims Topic-Wise Solved PYQs align your preparation with previous year questions. Each subject is divided into topics, providing insights into the frequency of questions from each area annually. The comprehensive explanations cover all dimensions of the topics, ensuring thorough understanding beyond the exam questions.",
    price: "₹540",
    author: "Swapna Gautam (IPS)",
    authorDescription: "IPS officer with extensive experience in UPSC preparation guidance and comprehensive question analysis.",
    samplePdf: "Available",
    deliveryInfo: "Launching 5th September - Delivery within 10 Days!",
    category: "Prelims"
  },
  {
    id: "essay-mudit",
    title: "Essay by Mudit Sir",
    description: "Decode UPSC Essay designed by Mudit Jain Sir is a comprehensive guide for mastering philosophical essays in the UPSC exam. Featuring 61 solved essays from 2013 to 2024, it breaks down complex themes with clear explanations and unique insights. Organized by topic, this book aligns with UPSC trends, offering aspirants a solid foundation for high-scoring essays—an essential resource for refining essay-writing skills.",
    price: "₹340",
    author: "Mudit Jain",
    authorDescription: "Mudit Jain, an ex-IRS and IPS officer, is currently a faculty member at Sarrthi IAS, specializing in Current Affairs, Essay, and Ethics. A best-selling author in the UPSC category, he has co-authored several popular books, including Decode Ethics and Decode Essays.",
    samplePdf: "Available",
    deliveryInfo: "Delivery within 10 Days!",
    category: "Essay"
  },
  {
    id: "csat-2026",
    title: "CSAT Book for UPSC 2026",
    description: "The UNGIST CSAT Book for UPSC 2026 is more than just a guide – it's a complete companion for mastering Quantitative Aptitude and Reasoning in CSAT. Designed by Ram Mohan Pandey (IIT Roorkee), this book focuses on concept clarity without using heavy formulas, making it perfect for students from Arts, Humanities, and non-maths backgrounds. Whether you're a first-time aspirant or someone reattempting the exam, this book gives you a structured, topic-wise, and UPSC aligned approach to crack CSAT confidently.",
    price: "₹500",
    author: "Ram Mohan Pandey (IIT Roorkee)",
    authorDescription: "With over 15 years of experience in guiding and mentoring aspiring civil servants, I am deeply committed to transforming the UPSC CSAT preparation landscape through innovative, student-centric approaches.",
    samplePdf: "Available",
    deliveryInfo: "Delivery within 10 Days!",
    category: "CSAT"
  },
  {
    id: "public-administration",
    title: "Public Administration Optional",
    description: "Master your Public Administration Optional with our specially curated 6-book set designed by Ashutosh Sir. The set includes Paper 1 & 2 classroom handouts compiled into booklets. You also get a Prospective Test Booklet with 200+ practice questions and a simplified 2nd ARC booklet for conceptual clarity. Together, these resources provide complete coverage, exam-oriented analysis, and classroom insights, ensuring aspirants are fully equipped for UPSC success. UPSC aligned approach to crack CSAT confidently.",
    price: "₹5999",
    author: "Ashutosh Pandey",
    authorDescription: "With 13+ years of teaching excellence, Ashutosh Pandey Sir is a leading name in Public Administration Optional. Renowned for his exam-focused approach and in-depth analysis, he has guided thousands of aspirants, including toppers, towards success in UPSC. He is currently a faculty member at Sarrthi IAS.",
    samplePdf: "Available",
    deliveryInfo: "Delivery within 10 Days!",
    category: "Optional"
  }
];