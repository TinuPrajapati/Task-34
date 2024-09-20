import Form from "./Components/Form";
import Show from "./Components/Show";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center gap-4 bg-gradient-to-r from-purple-500 to-pink-500 p-6">
        <Form />
        <Show />
      </div>
    </>
  );
}

export default App;
