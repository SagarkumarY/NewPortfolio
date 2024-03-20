import React, { useEffect, useState } from "react";
import "./skill.css";
import fontendIcon from "../../assets/img/frontend_icon.svg";
import backendIcon from "../../assets/img/Backend_icon.svg";
import otherIcon from "../../assets/img/other-skills-icon.svg";
import { FaCheckCircle } from "react-icons/fa";
import useFetchSkills from "../../Hooks/useFetchSkill";
import { Flex, Skeleton } from "@chakra-ui/react";
import { Container } from "react-bootstrap";
function Skill() {
  const { skills, loading, error } = useFetchSkills();
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // if (loading || showSkeleton) {
  //   // Render Skeleton while loading or if showSkeleton is true
  //   return <SkillSkeleton />;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const frontendSkills = skills.filter(
    (skill) => skill.category === "Frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "Backend");
  const otherSkills = skills.filter(
    (skill) => skill.category !== "Frontend" && skill.category !== "Backend"
  );

  return (
    <>
      <section className="skill-section" id="skills">
        <h2 className="heading">
          Our <span>Skills</span>
          <hr />
          <p className="description">
            Discover our expertise. From frontend finesse to backend brilliance,
            we're here to bring your projects to life.
          </p>
        </h2>

        <Container className="skils-container max-w-[1140px">
          {loading || showSkeleton ? (
            <SkillSkeleton />
          ) : (
            <>
              <div className="skills-box">
                <img
                  src={fontendIcon}
                  className=" w-[5rem] h-24"
                  alt="skill_fontend_icon"
                />
                <h3>Frontend</h3>
                <div className="experience_content">
                  {frontendSkills.map((skill,index) => (
                    <article className="experience_details" key={index}>
                      <FaCheckCircle size={15} color="green" className="icon" />
                      <div>
                        <h4>{skill.name}</h4>
                        <small className="text-light">
                          {skill.proficiency}
                        </small>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* {Backend} */}
              <div className="skills-box">
                <img
                  src={backendIcon}
                  className=" w-[5rem] h-24"
                  alt="skill_fontend_icon"
                />
                <h3>Backend</h3>
                <div className="experience_content">
                  {backendSkills.map((skill,index) => (
                    <article className="experience_details" key={index}>
                      <FaCheckCircle size={15} color="green" className="icon" />
                      <div>
                        <h4>{skill.name}</h4>
                        <small className="text-light">
                          {skill.proficiency}
                        </small>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* {server} */}
              <div className="skills-box">
                <img
                  src={otherIcon}
                  className=" w-[4rem] h-24"
                  alt="skill_fontend_icon"
                />
                <h3>Others</h3>
                <div className="experience_content">
                  {otherSkills.map((skill,index) => (
                    <article className="experience_details" key={index}>
                      <FaCheckCircle size={15} color="green" className="icon" />
                      <div>
                        <h4>{skill.name}</h4>
                        <small className="text-light">
                          {skill.proficiency}
                        </small>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </>
          )}
        </Container>
      </section>
    </>
  );
}

export default Skill;

// SkillSkeleton
function SkillSkeleton() {
  return (
    <Flex
      justifyContent={"space-between"}
      w={"80%"}
      m={"auto"}
      alignItems={"center"}
      gap={10}
      h={"30vh"}
    >
      <Skeleton height="300px" width="50%" />
      <Skeleton height="300px" width="50%" />
      <Skeleton height="300px" width="50%" />
    </Flex>
  );
}

/// befour using hook

// import React from "react";
// import "./skill.css";
// import fontendIcon from "../../assets/img/frontend_icon.svg";
// import backendIcon from "../../assets/img/Backend_icon.svg";
// import otherIcon from "../../assets/img/other-skills-icon.svg";
// import { FaCheckCircle } from "react-icons/fa";
// import useFetchSkills from "../../Hooks/useFetchSkill";
// function Skill() {
//   const { skills, loading, error } = useFetchSkills();
//   console.log(skills);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const frontendSkills = skills.filter((skill) => skill.category === "Frontend");
//   const backendSkills = skills.filter((skill) => skill.category === "Backend");
//   const otherSkills = skills.filter((skill) => skill.category !== "Frontend" && skill.category !== "Backend")

//   return (
//     <>
//       <section className="skill-section">
//         <h2 className="heading">
//           Our <span>Skills</span>
//           <p className="description">
//             Discover our expertise. From frontend finesse to backend brilliance,
//             we're here to bring your projects to life.
//           </p>
//         </h2>

//         <div className="skils-container">
//           <div className="skills-box">
//             <img
//               src={fontendIcon}
//               className=" w-[5rem] h-24"
//               alt="skill_fontend_icon"
//             />
//             <h3>Frontend</h3>
//             <div className="experience_content">
//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>HTML</h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>CSS</h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>Java Script</h4>
//                   <small className="text-light">Intermediate</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>Bootstrap</h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>Tailwind</h4>
//                   <small className="text-light">Intermediate</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>React / Next </h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>
//             </div>
//           </div>

//           {/* {Backend} */}
//           <div className="skills-box">
//             <img
//               src={backendIcon}
//               className=" w-[5rem] h-24"
//               alt="skill_fontend_icon"
//             />
//             <h3>Backend</h3>
//             <div className="experience_content">
//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>Node Js</h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>Express Js</h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>MongoDB</h4>
//                   <small className="text-light">Intermediate</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>PostgreSQL</h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>Firebase</h4>
//                   <small className="text-light">Intermediate</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>RESTful APIs</h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>
//             </div>
//           </div>

//           {/* {server} */}
//           <div className="skills-box">
//             <img
//               src={otherIcon}
//               className=" w-[4rem] h-24"
//               alt="skill_fontend_icon"
//             />
//             <h3>Others</h3>
//             <div className="experience_content">
//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>Git & Github</h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>zustand</h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>WordPress</h4>
//                   <small className="text-light">Intermediate</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>Docker</h4>
//                   <small className="text-light">Experienced</small>
//                 </div>
//               </article>

//               <article className="experience_details">
//                 <FaCheckCircle size={15} color="green" className="icon" />
//                 <div>
//                   <h4>Shopify</h4>
//                   <small className="text-light">Intermediate</small>
//                 </div>
//               </article>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Skill;
