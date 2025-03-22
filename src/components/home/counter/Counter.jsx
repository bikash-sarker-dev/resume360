import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useState, useEffect } from "react";

const CounterItem = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2500; 
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-r-info shadow rounded-md text-center py-14 px-8"
    >
      <h1 className="text-4xl text-r-primary font-extrabold">{count} +</h1>
      <h3 className="text-xl font-semibold mt-2">{label}</h3>
    </motion.div>
  );
};

const Counter = () => {
  return (
    <div className="bg-r-info-card py-24">
      <div className="container">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5">
          <CounterItem value="252" label="Clients" />
          <CounterItem value="141" label="Resume Templates" />
          <CounterItem value="60" label="CV Templates" />
          <CounterItem value="10" label="Cover Letters" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
