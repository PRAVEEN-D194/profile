export default function About() {
  return (
    <>
      <style>{`
        #about {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #f5f7fa;
        }

        .about-box {
          max-width: 650px;
          background: #ffffff;
          padding: 40px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .about-box:hover {
          transform: translateY(-5px);
        }

        .about-box h1 {
          font-size: 32px;
          margin-bottom: 20px;
          color: #0f172a;
        }

        .about-box p {
          font-size: 15px;
          color: #555;
          margin-bottom: 12px;
          line-height: 1.7;
        }

        .highlight {
          color: #0ea5e9;
          font-weight: 600;
        }

        .about-btn {
          margin-top: 15px;
          padding: 10px 20px;
          border: none;
          background: #0f172a;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          transition: 0.3s;
        }

        .about-btn:hover {
          background: #0ea5e9;
        }
      `}</style>

      <section id="about">
        <div className="about-box">
          <h1>About Me</h1>

          <p>
            Hi, I’m <span className="highlight">Praveen</span>, a 2nd-year IT student at Chennai Institute of Technology.
          </p>

          <p>
            I’m passionate about building modern web applications using the MERN stack.
          </p>

          <p>
            I enjoy learning new technologies and working on real-world projects to improve my skills.
          </p>

          {/* <button className="about-btn">Download Resume</button> */}
        </div>
      </section>
    </>
  );
}