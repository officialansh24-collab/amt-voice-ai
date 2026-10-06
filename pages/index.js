export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0f",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ color: "#ff6b00", fontWeight: "bold" }}>
          AMT VOICE AI
        </p>

        <h1
          style={{
            fontSize: "52px",
            lineHeight: "1.1",
            margin: "20px 0",
          }}
        >
          AI Calling for Your Business
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#b5b5b5",
            lineHeight: "1.6",
          }}
        >
          Automate your business calls with AI.
          <br />
          Make Outbound Calls & Handle Inbound Calls.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "35px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "#ff6b00",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid #555",
              padding: "15px 30px",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "70px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#15151c",
              padding: "30px",
              borderRadius: "15px",
              width: "300px",
            }}
          >
            <h2>📞 Outbound AI</h2>
            <p style={{ color: "#aaa" }}>
              Let AI automatically call your leads and customers.
            </p>
          </div>

          <div
            style={{
              background: "#15151c",
              padding: "30px",
              borderRadius: "15px",
              width: "300px",
            }}
          >
            <h2>☎️ Inbound AI</h2>
            <p style={{ color: "#aaa" }}>
              Let AI answer incoming business calls automatically.
            </p>
          </div>
        </div>

        <p
          style={{
            marginTop: "60px",
            color: "#777",
          }}
        >
          Hindi • English • Marathi
        </p>
      </div>
    </main>
  );
}
