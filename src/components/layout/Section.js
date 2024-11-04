import React from 'react';

const Section = ({ tit, desc, children, bg }) => {
  return (
    <section className={`sec-g ${bg ? 'bg-gray' : ''}`}>
      <div className="inner">
        {tit && <h2 className="sec-g__tit">{tit}</h2>}
        {desc && <p className="sec-g__desc">{desc}</p>}
        <div className="sec-g__cont">{children}</div>
      </div>
    </section>
  );
};

export default Section;
