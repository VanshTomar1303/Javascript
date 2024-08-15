

function Button(){
    const style={
        
            height: "60px",
            width: "120px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "rgb(90, 90, 225)",
            fontFamily:" Verdana, Geneva, Tahoma, sans-serif",
            fontWeight: "bolder",
            fontSize: "20px",
            color: "white",
            cursor: "pointer",
    }
    return(
        <button className="btn" style={style}>Click Me</button>
    );
}
export default Button