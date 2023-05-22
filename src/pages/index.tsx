import Link from "next/link"

const HomePage = () => (
  <div>
    <p>Praise the sun! \[T]/</p>
    <Link href="/styleguide" scroll={false}>
      Styleguide Page
    </Link>
  </div>
)

export default HomePage
