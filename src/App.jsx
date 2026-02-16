import Topbar from "./components/topbar";
import Map from "./components/Map";

function App(){
  return <section className="m-auto h-[100dvh] max-w-[2500px] min-w-[200px] grid grid-cols-3 min-xl:gap-12 gap-5 min-xl:grid-rows-2 px-12 py-4 max-md:px-6 max-md:2 min-xl:grid-rows-[max-content_auto] grid-rows-[max-content]">
    <Topbar></Topbar>
    <Map></Map>
  </section>
}
export default App;