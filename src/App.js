import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import FormValidate from "./form/FormValidate";
import ReactRouter from "./react-router-v6/ReactRouter";
import CounterApp from "./counter/CounterApp";
import TodoApp from "./TodoApp/Todo/TodoApp";
import TodoAppReducer from "./TodoApp/Todo/TodoReducer/TodoApp";
import ExpenseTrackerApp from "./expense-tracker/ExpenseTrackerApp";

function App() {
  return (
    <>
      {/* <Navbar />
      <AppRoutes />
      <Footer /> */}
      {/* <FormValidate /> */}
      {/* <ReactRouter /> */}
      {/* <CounterApp /> */}
      {/* <TodoApp /> */}
      {/* <TodoAppReducer /> */}
      <ExpenseTrackerApp />
    </>
  );
}

export default App;
