import { NavBar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({
  children,
}: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full gap-y-10 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <NavBar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
