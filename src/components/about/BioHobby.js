import React from "react";

const BioHobby = () => {
  return (
    <section className="px-4">
      <h1 className="text-3xl font-bold mb-3 text-gray-800">Quick Biografy</h1>
      <p className="leading-7 text-gray-600 text-justify">
        Marvio Rocha is a developer born in Macaé City, your firsts courses were
        about Micro Software Office at a government institute, where learning
        how to make digitations and managers in computers. In 2007 Marvio
        started work in your first job building a website for a small oil
        company, how to a freelance developer making graphic designs and
        websites with a language PHP, and Mysql learned by yourself. <p className="mt-4" > Your
        biggest idea was a system of a job board for your city, where we have
        some large numbers of subscribers to build your new way of being a
        professional.</p>
      </p>
      <h1 className="text-3xl font-bold my-4 text-gray-800">Hobby</h1>
      <p className="leading-6 text-gray-600 text-justify">
      I love programming software, but some time stand I keep for practice the sports how  an bike and make a sound design that is my free time for make greats composition and relaxing songs than you can hear  an example below
      </p>
      <p className="leading-6 my-8 flex flex-wrap justify-center">
        <iframe
          className="border-0 w-9/12 h-32 "
          src="https://bandcamp.com/EmbeddedPlayer/track=4125258769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://marviorocha.bandcamp.com/track/the-dreams">
            The Dreams by Marvio Rocha
          </a>
        </iframe>
      </p>
    </section>
  );
};

export default BioHobby;
 