import React from "react";

const RecruitmentProcess = ({ job }) => {
  const decodeHtml = (str) =>
    str
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"');

  const values =
    job?.job_details
      ?.match(/<h6[^>]*>(.*?)<\/h6>/g)
      ?.map((item) => decodeHtml(item.replace(/<[^>]*>/g, "").trim())) || [];

  const timeToAnswer = values[0];
  const processSteps = values.slice(1, -1);
  const offerTime = values[values.length - 1];

  return (
    <section className="mb-12">
      <h4 className="text-[28px] font-bold text-black mb-6">
        Recruitment Process
      </h4>

      <div className="space-y-6">
        {timeToAnswer && (
          <div>
            <p className="text-sm uppercase tracking-wider font-semibold text-gray-900 mb-2">
              Time to Answer
            </p>

            <p className="text-lg font-medium text-gray-500">{timeToAnswer}</p>
          </div>
        )}

        {processSteps.length > 0 && (
          <div>
            <p className="text-sm uppercase tracking-wider font-semibold text-gray-900 mb-2">
              Process
            </p>

            <div className="space-y-1">
              {processSteps.map((step) => (
                <p key={step} className="text-lg font-medium text-gray-500">
                  {step}
                </p>
              ))}
            </div>
          </div>
        )}

        {offerTime && (
          <div>
            <p className="text-sm uppercase tracking-wider font-semibold text-gray-900 mb-2">
              Days to get an Offer
            </p>

            <p className="text-lg font-medium text-gray-500">{offerTime}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecruitmentProcess;
