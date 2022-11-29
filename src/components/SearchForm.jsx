import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLaunchYear, getStatus, getType } from "../Redux/action";

export const SearchForm = () => {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const offset = useSelector((state) => state.offset);
  // const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatus(status, offset));
  }, [status, offset]);
  useEffect(() => {
    dispatch(getType(type, offset));
  }, [type, offset]);
  // console.log("data:", data);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "20px",
      }}
    >
      <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
        <option value="">Status</option>
        <option value="true">Launch Success</option>
        <option value="false">Launch Fail</option>
      </select>
      <div>
        <input
          type="text"
          placeholder="Launch Year"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(getLaunchYear(year, offset));
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
