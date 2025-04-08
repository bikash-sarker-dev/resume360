import AllFeatures from "../components/AllFeatures/AllFeatures";
import SectionHead from "../components/header/section-head/SectionHead";

export default function FeaturesPage() {

  return (
    <div className="container pb-8 pt-28 lg:pb-12 px-4">
       <SectionHead
        subTitle={"Discover Our Exclusive Features"}
        title={"Our Features"}
      />
      <AllFeatures></AllFeatures>
    </div>
  )
}
