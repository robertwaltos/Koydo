export default function ExploreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="explore-shell flex min-h-screen flex-col">
      {/* Full-bleed content area — no max-width constraint */}
      <main className="explore-page-enter flex-1">{children}</main>
    </div>
  );
}
