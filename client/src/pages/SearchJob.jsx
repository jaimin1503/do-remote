import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import JobCard from "../components/jobCompos/JobCard";
import JobSktn from "../skeletons/JobSktn";
import NavLogged from "../components/NavLogged";

const SearchJob = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("q");
  const [searchResults, setSearchResults] = useState([]);

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
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {searchResults.length > 0 ? (
            searchResults.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <JobSktn />
          )}
        </div>
      </div>
    </>
  );
};
export default SearchJob;
