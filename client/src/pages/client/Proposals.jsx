import React, { useEffect, useState } from "react";
import axios from "axios";
import NavLogged from "../../components/NavLogged";
import { Link } from "react-router-dom";
import ProposalCard from "../../components/proposal/ProposalCard";

const Proposals = () => {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/proposal/getproposals`, {
        withCredentials: true,
      })
      .then((res) => {
        setProposals(res.data.proposals);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <NavLogged />
      <div className="container">
        <h1 className=" text-4xl m-4 font-medium">All Proposals</h1>
        <hr />
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {proposals &&
              proposals.map((proposal) => (
                <div key={proposal._id}>
                  <ProposalCard proposal={proposal} />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Proposals;
