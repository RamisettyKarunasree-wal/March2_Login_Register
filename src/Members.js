import { useEffect, useState } from "react";

const Members = () => {
  const [status, setStatus] = useState(false);
  const loginStatus = parseInt(localStorage.getItem("isLogged"));
  const loggedUser = localStorage.getItem("loggedUser");
  const [obj, setObj] = useState({});
  useEffect(() => {
    if (loginStatus) {
      setStatus(true);
      let arr = JSON.parse(localStorage.getItem("details"));
      for (let i in arr) {
        if (arr[i].userName == loggedUser) {
          setObj(arr[i]);
        }
      }
    }
  }, []);

  return (
    <div className="item">
      {status ? (
        <div>
          <h1>Logged In User details</h1>
          <div>
            <b>UserName:</b>
            {obj.userName}
          </div>
          <div>
            <b>Email:</b>
            {obj.email}
          </div>
          <div>
            <b>Password:</b>
            {obj.password}
          </div>
        </div>
      ) : (
        <div><b>No Users Logged</b></div>
      )}
    </div>
  );
};
export default Members;
