import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export default function Portfolio() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState("");

  useEffect(() => {
    async function fetchData() {
      const projectsSnap = await getDocs(collection(db, "projects"));
      const skillsSnap = await getDocs(collection(db, "skills"));
      const bioSnap = await getDocs(collection(db, "bio"));
      
      setProjects(projectsSnap.docs.map(doc => doc.data()));
      setSkills(skillsSnap.docs.map(doc => doc.data()));
      setBio(bioSnap.docs.length > 0 ? bioSnap.docs[0].data().text : "");
    }
    fetchData();
  }, []);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const logOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      {user ? (
        <button onClick={logOut} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      ) : (
        <button onClick={signIn} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      )}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Bio</h2>
        <p>{bio}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="border p-2 mb-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
