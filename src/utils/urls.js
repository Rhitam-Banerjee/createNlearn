const host = "https://server.brightr.club";
// const host = "http://127.0.0.1:5000";

const subDomain = `${host}/api_demo`;

const urls = {
  login: `${subDomain}/login`,
  getAllTeachers: `${subDomain}/get-all-teachers`,
  getClassDetails: `${subDomain}/get-class-details`,
  getClasses: `${subDomain}/get-classes`,
  getCourses: `${subDomain}/get-courses`,
  markClass: `${subDomain}/mark-class`,
  createNewClass: `${subDomain}/create-new-classes`,
  createExistingClass: `${subDomain}/create-existing-classes`,
  postClassForm: `${subDomain}/post-class-form`,
};
export default urls;
