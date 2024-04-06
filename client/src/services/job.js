
export function saveJob(id) {
  return axios.put(`${import.meta.env.VITE_BASE_URL}/job/savejob/${id}`, null, {
	withCredentials: true,
  });
}