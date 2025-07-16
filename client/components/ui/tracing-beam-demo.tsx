"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4 font-orbitron font-bold">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Digital Solutions for Modern Business",
    description: (
      <>
        <p>
          At Digital-Addis, we provide cutting-edge digital solutions that
          transform how businesses operate in the modern world. Our
          comprehensive approach ensures that your digital transformation
          journey is seamless and effective.
        </p>
        <p>
          From web development to mobile applications, we leverage the latest
          technologies to deliver exceptional results that drive business growth
          and enhance user experience.
        </p>
        <p>
          Our team of experts works closely with clients to understand their
          unique needs and deliver customized solutions that align with their
          business objectives and vision.
        </p>
      </>
    ),
    badge: "Services",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Innovation Through Technology",
    description: (
      <>
        <p>
          We believe in the power of innovation to solve complex business
          challenges. Our technology stack includes the latest frameworks and
          tools that enable us to build scalable, robust, and efficient
          solutions.
        </p>
        <p>
          Whether you're looking to modernize legacy systems or build new
          digital products from scratch, our team has the expertise to guide you
          through every step of the process.
        </p>
      </>
    ),
    badge: "Innovation",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Building the Future Together",
    description: (
      <>
        <p>
          Join us on a journey to build the future of digital experiences. With
          our expertise and your vision, we can create solutions that not only
          meet today's needs but also prepare your business for tomorrow's
          challenges.
        </p>
      </>
    ),
    badge: "Future",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
