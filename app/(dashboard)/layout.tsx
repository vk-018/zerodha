import DashNavbar from "@/components/shared/DashNavbar"


export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DashNavbar/>
      <main>{children}</main>
    </>
  )
}