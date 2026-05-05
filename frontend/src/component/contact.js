export default function Contact() {
  const sectionStyle = {
    padding: "80px 20px",
    textAlign: "center",
    background: "#f5f7fa"
  };

  const titleStyle = {
    fontSize: "32px",
    marginBottom: "15px",
    color: "#0f172a"
  };

  const boxStyle = {
    marginTop: "20px",
    padding: "20px",
    background: "white",
    display: "inline-block",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    transition: "0.3s"
  };

  const linkStyle = {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 18px",
    background: "#0f172a",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "0.3s"
  };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>Contact Me</h1>

      <p style={{ color: "#555" }}>
        Feel free to reach out for opportunities or collaboration.
      </p>

      <div
        style={boxStyle}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "translateY(-5px)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "translateY(0px)")
        }
      >
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:praveend12321@gmail.com">
            praveend12321@gmail.com
          </a>
        </p>

        <p>
          <strong>Location:</strong> Kanchipuram, Tamil Nadu, India
        </p>
      </div>

      <div>
        <a
          href="mailto:praveend12321@gmail.com"
          style={linkStyle}
          onMouseOver={(e) =>
            (e.target.style.background = "#0ea5e9")
          }
          onMouseOut={(e) =>
            (e.target.style.background = "#0f172a")
          }
        >
          Send Email
        </a>
      </div>
    </section>
  );
}