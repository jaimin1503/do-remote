import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import BestMatches from "./BestMatches";
import MostRecent from "./MostRecent";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../../reducers/jobReducer";
import SavedJobs from "./SavedJobs";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import JobSktn from "../../skeletons/JobSktn";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function JobsTabs() {
  const [value, setValue] = React.useState(0);
  const { jobs } = useSelector((state) => state.job);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/getalljobs`, {
        params: {
          page,
        },
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setJobs(res.data.jobs));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {loading ? (
        <>
          <JobSktn />
          <JobSktn />
          <JobSktn />
          <JobSktn />
        </>
      ) : (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Best Matches" {...a11yProps(0)} />
              <Tab label="Most Recent" {...a11yProps(1)} />
              <Tab label="Saved Jobs" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <BestMatches jobs={jobs} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <MostRecent jobs={jobs} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <SavedJobs />
          </CustomTabPanel>

          {value === 1 && (
            <div className=" w-full p-2 flex justify-center">
              <Stack spacing={2}>
                <Pagination
                  color="primary"
                  count={10}
                  page={page}
                  onChange={handlePageChange}
                />
              </Stack>
            </div>
          )}
        </Box>
      )}
    </>
  );
}
