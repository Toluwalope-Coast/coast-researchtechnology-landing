import React from "react";
import "./training.css";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <section className="techie">
        <Image
          src="/coast-segun.png"
          alt="coast-tech individual"
          width={800}
          height={800}
          className="techie-packs"
        />
        <p className="coast-tech">
          Do you want <span>COASTECH</span> to your name?
        </p>
        <div className="coast-student">
          <h1>
            Meet <br />
            <span>COASTECH SEGUN</span>
          </h1>
          <p>
            Hello World! Connect with us; the global community for designers,
            creative professionals, analysts and developers.
          </p>
        </div>
      </section>
      <section>
        <Image
          src="/coast-techie-packs.png"
          alt="coast-tech individual"
          width={1000}
          height={1000}
          className="techie-packs"
        />
      </section>
    </main>
  );
};

export default page;
