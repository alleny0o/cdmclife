type TabLayoutProps = {
    children: React.ReactNode;
};

function TabLayout(input: TabLayoutProps) {
  return (
    <section className="min-h-screen lg:px-0">
        {input.children}
    </section>
  )
};

export default TabLayout