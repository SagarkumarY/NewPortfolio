// import { useState, useEffect, useContext } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import TrackVisibility from 'react-on-screen';
// import { HashLink } from "react-router-hash-link";
// import { HashRouter as Router } from 'react-router-dom';
// import useBannerData from "../../Hooks/useBanner";

// function Banner() {
//     // console.log("hello")
//     // const { bannerData } = useContext(SkillsContext)
//     const { bannerData } = useBannerData(); // Using custom hook for banner data
//     const [loopNum, setLoopNum] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [text, setText] = useState('');
//     const [delta, setDelta] = useState(300 - Math.random() * 100);
//     const [index, setIndex] = useState(1);
//     const toRotate = ["Frontend Developer", "Backend Developer", "Web Designer"];
//     const period = 2000;

//     // useEffect(() => {
//     //     let ticker = setInterval(() => {
//     //         tick();
//     //     }, delta);

//     //     return () => { clearInterval(ticker) };
//     // }, [text])
//     useEffect(() => {
//         let ticker = setInterval(() => {
//             tick();
//         }, delta);

//         // Cleanup function to clear the interval
//         return () => {
//             clearInterval(ticker);
//         };
//     }, [text]);

//     console.log("Hello world!");

//     const tick = () => {
//         let i = loopNum % toRotate.length;
//         let fullText = toRotate[i];
//         let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//         setText(updatedText);

//         if (isDeleting) {
//             setDelta(prevDelta => prevDelta / 2);
//         }

//         if (!isDeleting && updatedText === fullText) {
//             setIsDeleting(true);
//             setIndex(prevIndex => prevIndex - 1);
//             setDelta(period);
//         } else if (isDeleting && updatedText === '') {
//             setIsDeleting(false);
//             setLoopNum(loopNum + 1);
//             setIndex(1);
//             setDelta(500);
//         } else {
//             setIndex(prevIndex => prevIndex + 1);
//         }
//     }

//     return (
//         <Router>
//             <section className="banner" id="home">
//                 <Container>
//                     {/* {bannerData && Object.keys(bannerData).length > 0 && (
//         <>  */}
//                     <Row className="aligh-items-center">
//                         <Col xs={12} md={6} xl={7}>
//                             <TrackVisibility>
//                                 {({ isVisible }) =>
//                                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                                         <span className="tagline">{bannerData.tagline}</span>
//                                         <h1> {bannerData.name} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Frontend Developer", "Backend Developer", "Web Designer",]'><span className="wrap">{text}</span></span></h1>
//                                         <p>
//                                             {/* I'm passionate about crafting digital experiences that leave a lasting impression. With expertise in both front-end and back-end technologies, I bring ideas to life through innovative and robust web solutions. Explore my portfolio to see the magic of web development in action.  */}
//                                             {bannerData.introduction}  </p>
//                                         <HashLink to='#contact' className="no-underline">

//                                             <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
//                                         </HashLink>
//                                     </div>}
//                             </TrackVisibility>
//                         </Col>
//                         <Col xs={12} md={6} xl={5}>
//                             <TrackVisibility>
//                                 {({ isVisible }) =>
//                                     <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                                         <img src={bannerData.bannerImage} alt="Header" />
//                                     </div>}
//                             </TrackVisibility>
//                         </Col>
//                     </Row>

//                 </Container>
//             </section>
//         </Router>
//     )
// }

// export default Banner;







/// Second: 2 Banner using Reducer

import { useEffect, useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import { HashRouter as Router } from "react-router-dom";
import useBannerData from "../../Hooks/useBanner";
import { bannerReducer } from "../../redux/bannerReducer";


function Banner() {
    const toRotate = ["Frontend Developer", "Backend Developer", "Web Designer"];
    const period = 2000;

  const [state, dispatch] = useReducer(
    (state, action) => bannerReducer(state, action, toRotate, period),
    {
        loopNum: 0,
        isDeleting: false,
        text: "",
        delta: 300 - Math.random() * 100,
        index: 1,
    }
);

  const { bannerData } = useBannerData(); // Usng custom hook for banner data



  useEffect(() => {
    let ticker = setInterval(() => {
      dispatch({ type: "TICK" });
    }, state.delta);

    return () => {
      clearInterval(ticker);
    };
  }, [state.text, state.delta]);

  return (
    <Router>
      <section className="banner" id="home">
        <Container className="max-w-[1140px]">
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">{bannerData.tagline}</span>
                    <h1>
                      {" "}
                      {bannerData.name}{" "}
                      <span
                        className="txt-rotate"
                        dataperiod="1000"
                        data-rotate='[ "Frontend Developer", "Backend Developer", "Web Designer",]'
                      >
                       <span className="wrap">{state.text}</span>
                      </span>
                    </h1>
                    <p>{bannerData.introduction} </p>
                    <HashLink to="#contact" className="no-underline">
                      <button onClick={() => console.log("connect")}>
                        Let’s Connect <ArrowRightCircle size={25} />
                      </button>
                    </HashLink>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={bannerData.bannerImage} alt="Header" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
}

export default Banner;
