import Navbar from "./components/navbar/page";
import Main from "./components/main/page";
import FeatureList from "./components/featurelist/page";
import FeatureList2 from "./components/featurelist2/page";
import FAQ from "./components/FAQ/page"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <FeatureList/>
      <FeatureList2/>
      <FAQ/>
    </div>
  );
}
