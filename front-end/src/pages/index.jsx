import LogInSignup from "@/components/LogInSignup";

export default function Home() {
  return (
    <div className="flex h-[100vh]">
      <div className="w-1/2 flex justify-center items-center">
        <LogInSignup />
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </div>
  );
}
