type TabLayoutProps = {
    children: React.ReactNode;
};

function TabLayout(input: TabLayoutProps) {
  return (
    <section className="pt-10 pb-16 px-4">
        {input.children}
    </section>
  )
};

export default TabLayout