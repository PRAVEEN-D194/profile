export default function Skills() {
  const sectionStyle = {
    padding: "80px 20px",
    textAlign: "center",
    background: "#f5f7fa"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    maxWidth: "1000px",
    margin: "auto"
  };

  const cardStyle = {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "left",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    transition: "0.3s"
  };

  const titleStyle = {
    marginBottom: "15px",
    color: "#0ea5e9"
  };

  const listStyle = {
    listStyle: "none",
    padding: 0
  };

  const itemStyle = {
    background: "#e2e8f0",
    margin: "6px 0",
    padding: "8px 12px",
    borderRadius: "8px",
    fontSize: "14px"
  };

  return (
    <section style={sectionStyle} id="skills">
      <h1>My Skills</h1>

      <div style={gridStyle}>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Programming</h3>
          <ul style={listStyle}>
            <li style={itemStyle}>Python</li>
            <li style={itemStyle}>C++</li>
            <li style={itemStyle}>C</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Frontend</h3>
          <ul style={listStyle}>
            <li style={itemStyle}>HTML</li>
            <li style={itemStyle}>CSS</li>
            <li style={itemStyle}>JavaScript</li>
            <li style={itemStyle}>React</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Backend</h3>
          <ul style={listStyle}>
            <li style={itemStyle}>Node.js</li>
            <li style={itemStyle}>Express.js</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Database</h3>
          <ul style={listStyle}>
            <li style={itemStyle}>MongoDB</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Tools</h3>
          <ul style={listStyle}>
            <li style={itemStyle}>Git</li>
            <li style={itemStyle}>GitHub</li>
          </ul>
        </div>

      </div>
    </section>
  );
}