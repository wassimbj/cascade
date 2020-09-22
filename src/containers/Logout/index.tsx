import config from "../../utils/config";

export interface LogoutProps {}

const Logout: React.SFC<LogoutProps> = () => {
  const url = `${config.APP_URL}/auth.aspx?action=logout&return_url=${config.APP_URL}/auth.aspx?return_url=${window.location.origin}/login`;
  localStorage.clear();
  window.location.href = url;
  return null;
};

export default Logout;
