export interface LogoutProps {}

const Logout: React.SFC<LogoutProps> = () => {
  const loginDomain = "https://dev-home.devhub.lrinternal.com";
  const url = `${loginDomain}/auth.aspx?action=logout&return_url=${loginDomain}/auth.aspx?return_url=${window.location.origin}/login`;
  localStorage.clear();
  window.location.href = url;
  return null;
};

export default Logout;
