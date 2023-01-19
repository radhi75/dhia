import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delete_user, get_current } from "../redux/Action/Authaction";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, [dispatch]);
  const user = useSelector((state) => state.authreducer.client);

  const navigate = useNavigate();
  return (
    <div
      className="container d-flex justify-content-center"
      style={{ marginTop: "2%" }}
    >
      <div className="card p-3 py-4">
        <div className="text-center">
          <span className="mt-1 clearfix">{user.email}</span>
          <div className="row mt-3 mb-3">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
          <hr className="line" />
          <small className="mt-4">
            I am an android developer working at google Inc at california,USA
          </small>
          {/* <div className="social-buttons mt-5">
            <button className="neo-button">
              <i className="fa fa-facebook fa-1x" />{" "}
            </button>
            <button className="neo-button">
              <i className="fa fa-linkedin fa-1x" />
            </button>
            <button className="neo-button">
              <i className="fa fa-google fa-1x" />{" "}
            </button>
            <button className="neo-button">
              <i className="fa fa-youtube fa-1x" />{" "}
            </button>
            <button className="neo-button">
              <i className="fa fa-twitter fa-1x" />{" "}
            </button>
          </div> */}
          <div className="profile mt-5">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(delete_user(user._id), navigate("/"))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
