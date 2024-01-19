function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center">
      <main className="w-[1280px] max-w-full flex flex-col gap-10 p-6">{children}</main>
    </div>
  );
}

export default MainLayout;
