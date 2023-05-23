import "./App.css";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Product
        image="https://asset.conrad.com/media10/isa/160267/c1/-/en/002585681PI00/image.jpg"
        title="Volkswagen GOLF MK2 2022 Calendar"
        price="10.00€"
        description="12 unique designs All pieces are printed on heavyweight 200 gsm art paper Limited to 50 pieces One size: 11.7x16.5 inch/(297x420mm)"
        availability={10}
        category="Calendars"
      ></Product>
    </div>
  );
}

export default App;
