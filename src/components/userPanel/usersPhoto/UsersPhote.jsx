import "./usersPhoto.css";
import logo from "../../../assistant/best-wishes.png"
const logoS ={
  width: "120px",
  height: "80px",
  marginTop: "-69px",
  marginLeft: "20px",
}

const UsersPhoto = () => {
  return (
    <div className="user">
        <div style={logoS}>
              <img src={logo} alt=""  style={{width:"100%",height:"100%"}}/>
              </div>
      <div className="userPhoto">
        <img src="https://static.toiimg.com/thumb/msid-104355523,imgsize-15528,width-400,resizemode-4/104355523.jpg" alt="" />
      <p>sonia sosband</p>
      </div>
      <p>verification status</p>
      <button className="overview">Overveiw</button>
    </div>
  );
};

export default UsersPhoto;
