import Image from "next/image";

export default function Card() {
  return (
    <div className="border-2 border-y-0 border-r-0 border-gray-400 text-white p-8  shadow-lg max-w-4xl mx-auto my-8">
      <div className="">
        {/* Profile Image Section */}

        {/* Vertical Bar (Gray Line) */}
        <div className="border-r-2 border-gray-600 h-full mx-6"></div>

        {/* Job Details Section */}
        <div className="">
          <div className=" flex items-start space-x-6">
            <div className="flex-grow">
              {" "}
              <div className="flex-shrink-0">
                <Image
                  src="/profile.jpg"
                  alt="Profile Image"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold mb-2">
                Technical Implementation Analyst (Front End Web Developer)
              </h2>
              <p className="text-gray-400 text-sm mb-2">
                Juvare, Melbourne, Australia
              </p>
              <p className="text-gray-400 text-sm mb-4">March 2024 - Present</p>
            </div>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li>
              Configure and customize WebEOC framework solutions to meet client
              requirements for emergency/incident response systems.
            </li>
            <li>
              Liaise directly with clients to gather requirements and provide
              technical implementation support across Australia and New Zealand.
            </li>
            <li>
              Create detailed system configuration documentation and
              requirements specifications for Emergency/Incident Response
              processes.
            </li>
            <li>
              Provide Tier 2 technical support and assist in Emergency
              Operations Centre (EOC) activations when required.
            </li>
            <li>
              Develop and implement process reviews, online training content,
              and exercise assessments.
            </li>
          </ul>

          {/* Tags Section */}
          <div className="mt-6 space-x-3 flex flex-wrap">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              HTML
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              CSS
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              JavaScript
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              jQuery
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              Bootstrap
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              REST APIs
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              SQL Server
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              WebEOC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
