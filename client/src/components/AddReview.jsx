import React, { useState } from "react";
import "../styles/bookappointment.css";
import axios, { formToJSON } from "axios";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import {handleInputChange} from "./utils/utility.js";

const AddReview = ({setReviewOpen ,ele }) => {
  console.group(ele);
  const [formDetails, setFormDetails] = useState({
    rating: 0,
    comment: "",
  });

  const inputChange = (e) => {
    handleInputChange(e, formDetails, setFormDetails);
  };

  const addreview = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        axios.post(
          "review/addreview",
          {
            doctorId: ele?.userId?._id,
            rating: formDetails.rating,
            comment: formDetails.comment,

          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Review added successfully",
          error: "Unable to add revi",
          loading: "Review adding..",
        }
      );
      console.log(localStorage.getItem("token"))
      setReviewOpen(false);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <div className="modal flex-center">
        <div className="modal__content">
          <h2 className="page-heading">Add Review</h2>
          <IoMdClose
            onClick={() => {
              setReviewOpen(false);
            }}
            className="close-btn"
          />
          <div className="register-container flex-center book">
            <form className="register-form">
              <input
                type="number"
                step="1"
                name="rating"
                className="form-input"
                value={formDetails.rating}
                onChange={inputChange}
              />
              <input
                type="text"
                name="comment"
                className="form-input"
                value={formDetails.comment}
                onChange={inputChange}
              />
              <button
                type="submit"
                className="btn form-btn"
                onClick={addreview}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReview;
