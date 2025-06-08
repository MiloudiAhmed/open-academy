export default function Container({ children }) {
  return (
    <div className="w-full px-6 lg:px-16 max-w-[1440px] mx-auto">
      {children}
    </div>
  );
}
