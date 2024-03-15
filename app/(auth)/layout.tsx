const AuthLayout = ({ children }: any) => {
  return (
    <div>
      <nav className="bg-black text-white">
        This is navbar without /auth prefix
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;
