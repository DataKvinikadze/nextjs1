import React from "react";

const page = ({
  params,
}: {
  params: {
    serviceId: string;
  };
}) => {
  return (
    <div className="max-w-[1440px] w-full mt-[148px] mx-auto flex justify-center">
      <div className="max-w-[1300px] px-[10px] text-center">
        <h1 className="max-w-[764px] text-[73.34px] font-bold text-center">
          Your Service Id is: {params.serviceId}
        </h1>
      </div>
    </div>
  );
};

export default page;
