import Topbar from "./features/Topbar";
import Map from "./features/Map";
import Filters from "./features/Filters";

function App(){
  return <section className="m-auto max-w-[2500px] min-w-[200px] grid grid-cols-[1fr_3fr_2fr] gap-x-12 gap-y-4 min-xl:grid-rows-[auto_1fr] px-12 max-xl:gap-y-5 py-4 max-md:px-6 max-md:2">
    <Topbar></Topbar>
    <Map></Map>
    <Filters></Filters>
  </section>
}
export default App;