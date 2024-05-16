// Function to calculate match score between freelancer skills and job requirements
export const calculateMatchScore = (freelancerSkills, requiredSkills) => {
  const freelancerSkillsLower = freelancerSkills.map((skill) =>
    skill.toLowerCase()
  );

  const requiredSkillsLower = requiredSkills.map((skill) =>
    skill.toLowerCase()
  );

  // Count the number of matching skills
  const matchCount = freelancerSkillsLower.filter((skill) =>
    requiredSkillsLower.includes(skill)
  ).length;

  return matchCount;
};
