import error404 from "/image/error404.jpg";

function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <img 
        src={error404} 
        alt="Error 404"
        style={{
          width: "60%",
          maxWidth: "500px",
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px"
        }}
      />
    </div>
  );
}

export default NotFound;
