import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="flex justify-center">
        <button className="bg-[#252432] mt-[65px] text-[#FFFFFF] px-[58px] py-[18px] rounded-[10px]">
          Get in Touch
        </button>
      </div>
    </>
  );
}
