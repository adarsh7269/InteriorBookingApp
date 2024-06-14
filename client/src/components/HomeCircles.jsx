import React from "react";
import CountUp from "react-countup";
import "../styles/homecircles.css";

const HomeCircles = () => {
  return (
    <section className="container circles">
      <div className="circle">
        <CountUp
          start={0}
          end={7500}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />+
            </div>
          )}
        </CountUp>
        <span className="circle-name">
          Satisfied
          <br />
          Customers
        </span>
      </div>
      <div className="circle">
        <CountUp
          start={0}
          end={10000}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />+
            </div>
          )}
        </CountUp>
        <span className="circle-name">
          Colour
          <br />
          Combinations
        </span>
      </div>
      <div className="circle">
        <CountUp
          start={0}
          end={20}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />+
            </div>
          )}
        </CountUp>
        <span className="circle-name">
          Served
          <br />
          Cities
        </span>
      </div>
    </section>
  );
};

export default HomeCircles;
