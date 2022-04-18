const NotFoundPage = () => {
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <section
        style={{
          height: "50px",
          width: "600px",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <h2 style={{ textAlign: "center", margin: "auto 10px" }}>
          <code>404</code>
        </h2>
        <div
          style={{
            position: "relative",
            height: "100%",
            border: "2px solid black",
            margin: "auto 5px",
            backgroundColor: "black",
          }}
        />
        <h2 style={{ textAlign: "center", margin: "auto 10px" }}>
          <code>The page you're looking for doesn't exist</code>
        </h2>
      </section>
    </div>
  );
};

export default NotFoundPage;
