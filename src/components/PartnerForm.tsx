import { useState } from "react";
import { Mail } from "lucide-react";

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner application submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "528px",
        minHeight: "434px",
        padding: "32px",
        borderRadius: "24px",
        border: "1px solid rgba(250, 250, 255, 0.04)",
        background: "rgba(250, 250, 255, 0.08)",
        backdropFilter: "blur(50px)",
        color: "#FAFAFF",
        fontFamily:
          "Satoshi Variable, -apple-system, Roboto, Helvetica, sans-serif",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: 600,
          lineHeight: "1.06",
          marginBottom: "32px",
          color: "#FAFAFF",
        }}
      >
        Became a partner
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        {/* Full Name Field */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "16px",
              fontWeight: 640,
              lineHeight: "1.12",
              letterSpacing: "0.08px",
              color: "#FAFAFF",
              opacity: 0.74,
              marginBottom: "6px",
            }}
          >
            Full name
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, fullName: e.target.value }))
            }
            placeholder="Type your name here..."
            style={{
              width: "100%",
              padding: "13px 16px",
              borderRadius: "14px",
              border: "1px solid rgba(250, 250, 255, 0.10)",
              background: "rgba(250, 250, 255, 0.02)",
              fontSize: "16px",
              fontWeight: 640,
              lineHeight: "1.12",
              letterSpacing: "0.08px",
              color: "#FAFAFF",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "16px",
              fontWeight: 640,
              lineHeight: "1.12",
              letterSpacing: "0.08px",
              color: "#FAFAFF",
              opacity: 0.74,
              marginBottom: "6px",
            }}
          >
            Email address
          </label>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                opacity: 0.74,
              }}
            >
              <Mail
                style={{ width: "16px", height: "16px", color: "#FAFAFF" }}
              />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Type your emailsomething..."
              style={{
                width: "100%",
                padding: "13px 16px 13px 48px",
                borderRadius: "14px",
                border: "1px solid rgba(250, 250, 255, 0.10)",
                background: "rgba(250, 250, 255, 0.02)",
                fontSize: "16px",
                fontWeight: 640,
                lineHeight: "1.12",
                letterSpacing: "0.08px",
                color: "#FAFAFF",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        {/* Company Name Field */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "16px",
              fontWeight: 640,
              lineHeight: "1.12",
              letterSpacing: "0.08px",
              color: "#FAFAFF",
              opacity: 0.74,
              marginBottom: "6px",
            }}
          >
            Companies name
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, companyName: e.target.value }))
            }
            placeholder="Type you company's name"
            style={{
              width: "100%",
              padding: "13px 16px",
              borderRadius: "14px",
              border: "1px solid rgba(250, 250, 255, 0.10)",
              background: "rgba(250, 250, 255, 0.02)",
              fontSize: "16px",
              fontWeight: 640,
              lineHeight: "1.12",
              letterSpacing: "0.08px",
              color: "#FAFAFF",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Submit Button */}
        <div style={{ paddingTop: "16px" }}>
          <button
            type="submit"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "157px",
              height: "44px",
              padding: "12px 16px",
              gap: "10px",
              borderRadius: "12px",
              background: "#6852D6",
              border: "none",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "1.4",
              letterSpacing: "0.28px",
              color: "#FCFCFE",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            {/* Highlight effect */}
            <div
              style={{
                position: "absolute",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#D8D2F4",
                opacity: 0.8,
                filter: "blur(20px)",
                left: "41.193px",
                top: "-15.049px",
                pointerEvents: "none",
              }}
            />
            <span style={{ position: "relative", zIndex: 1 }}>
              Submit application
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
