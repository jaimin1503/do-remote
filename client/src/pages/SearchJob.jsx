import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import JobCard from "../components/jobCompos/JobCard";
import JobSktn from "../skeletons/JobSktn";
import NavLogged from "../components/NavLogged";
import Drawer from "@mui/material/Drawer";
import ViewJob from "../components/jobCompos/ViewJob";

const SearchJob = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("q");
  const [searchResults, setSearchResults] = useState([]);
  const decodedQueryParamValue = decodeURIComponent(search);
  const [open, setOpen] = useState(false);
  const [drawerJob, setDrawerJob] = useState({});

  const toggleDrawer = (newOpen, job) => () => {
    setOpen(newOpen);
    setDrawerJob(job);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/job/searchjobs?query=${search}`,
          { withCredentials: true }
        );
        setSearchResults(res.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [search]);

  return (
    <>
      <NavLogged />
      <div className="container">
        <h1 className=" m-4 text-2xl font-medium md:text-4xl">
          {decodedQueryParamValue} jobs
        </h1>
        <div className="container mx-auto">
          <div className="">
            {searchResults.length > 0 ? (
              searchResults.map((job) => (
                <div onClick={toggleDrawer(true, job)} key={job._id}>
                  <JobCard job={job} />
                </div>
              ))
            ) : (
              <JobSktn />
            )}
          </div>
        </div>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <ViewJob job={drawerJob} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};
export default SearchJob;
