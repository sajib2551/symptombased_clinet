import React, { useState } from "react";

const blogData = [
  {
    id: 1,
    title: "Liver Cancer: Risk Factors, Detection & Prevention",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    short:
      "Liver cancer develops due to chronic liver disease, infections, and lifestyle factors.",
    full:
      "Liver cancer is one of the most serious forms of cancer and is often linked to chronic liver diseases such as hepatitis B, hepatitis C, cirrhosis, and fatty liver disease. Excessive alcohol consumption, obesity, and exposure to toxins significantly increase the risk. Early detection of liver cancer is challenging because symptoms often appear at advanced stages. Common symptoms include abdominal pain, unexplained weight loss, jaundice, and fatigue. Advanced imaging techniques, blood tests like AFP, and AI-assisted diagnostic tools help detect liver cancer earlier. Preventive strategies include hepatitis vaccination, avoiding alcohol abuse, maintaining a healthy diet, and regular liver screening for high-risk individuals.",
  },
  {
    id: 2,
    title: "Breast Cancer: Early Detection Saves Lives",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc",
    short:
      "Breast cancer is the most common cancer among women worldwide.",
    full:
      "Breast cancer occurs when abnormal cells grow uncontrollably in breast tissue. Major risk factors include family history, genetic mutations such as BRCA1 and BRCA2, hormonal imbalance, obesity, and lack of physical activity. Early symptoms may include lumps in the breast, changes in breast shape, nipple discharge, or skin changes. Mammography, ultrasound, biopsy, and AI-powered imaging systems play a crucial role in early detection. Early-stage breast cancer has a very high survival rate when diagnosed early. Regular screening, self-examination, and awareness are key to reducing mortality from breast cancer.",
  },
  {
    id: 3,
    title: "Lung Cancer: Causes, Symptoms & Modern Diagnosis",
    image:
      "https://i.ibb.co.com/vnMqMyt/download-11.jpg",
    short:
      "Lung cancer is primarily caused by smoking and air pollution.",
    full:
      "Lung cancer is one of the leading causes of cancer-related deaths globally. Smoking is the primary cause, but exposure to second-hand smoke, air pollution, occupational chemicals, and genetic factors also increase risk. Symptoms include persistent cough, chest pain, shortness of breath, coughing blood, and fatigue. Low-dose CT scans, biopsies, and AI-based image analysis are increasingly used for early lung cancer detection. Early diagnosis significantly improves treatment outcomes. Smoking cessation, reducing pollution exposure, and regular screening for high-risk individuals are essential preventive measures.",
  },
];

const Blogs = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleArticle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div style={{ background: "#e0ecfcff", padding: "50px 0" }}>
      <div style={{ width: "90%", maxWidth: "1100px", margin: "auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Cancer Detection & Risk Analysis Blog
        </h1>

        {blogData.map((blog) => (
          <div
            key={blog.id}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              marginBottom: "45px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              overflow: "hidden",
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: "100%",
                height: "340px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "30px" }}>
              <h2 style={{ marginBottom: "15px" }}>{blog.title}</h2>

              <p style={{ lineHeight: "1.9", color: "#444", fontSize: "16px" }}>
                {expandedId === blog.id ? blog.full : blog.short}
              </p>

              <button
                onClick={() => toggleArticle(blog.id)}
                style={{
                  marginTop: "20px",
                  padding: "12px 26px",
                  background: "#0d47a1",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                {expandedId === blog.id
                  ? "Show Less"
                  : "Read Full Article"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;