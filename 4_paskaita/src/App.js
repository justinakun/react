import "./App.css";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Product
        image="https://th.bing.com/th/id/OIP.y5Y20F2sk323gRMzBNMYdwHaHa?pid=ImgDet&rs=1"
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
