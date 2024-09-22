"use server";
import { use } from "react";

const About = () => {
  const profile = use(
    fetch("https://api.github.com/users/Karan307126").then((res) => res.json())
  );
  //   const [profile, setProfile] = useState({});

  //   useEffect(() => {
  //     const fetchProfile = async () => {
  //       const response = await fetch("https://api.github.com/users/Karan307126");
  //       const data = await response.json();
  //       setProfile(data);
  //     };
  //     try {
  //       fetchProfile();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }, []);

  return (
    <div className="about-container">
      <h1>My Github Profile</h1>
      <img src={profile.avatar_url} alt={profile.name} />
      <h2>
        {profile.login} <span>{profile.name}</span>
      </h2>
    </div>
  );
};

export default About;
