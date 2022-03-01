import LifeCycleA from "./10.life-cycle-methods/LifeCycleA";
import PostApi from "./11.ajax-calls/PostApi";
import StudentMongoApi from "./11.ajax-calls/StudentMongoApi";
import StudentSQLApi from "./11.ajax-calls/StudentSQLApi";
import TodoApi from "./11.ajax-calls/TodoApi";
import UserApi from "./11.ajax-calls/UserApi";
import Routing from "./12.routing/Routing";
import ClassCounter from "./13.hooks/ClassCounter";
import HookApi from "./13.hooks/HookApi";
import HookCounter from "./13.hooks/HookCounter";
import HookUsingObject from "./13.hooks/HookUsingObject";
import UseContextHook from "./13.hooks/UseContextHook";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import Welcome from "./3.props/Welcome";
import WelcomeOne from "./3.props/WelcomeOne";
import Counter from "./4.state/Counter";
import CounterHook from "./4.state/CounterHook";
import Message from "./4.state/Message";
import Person from "./4.state/Person";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import EventBindOne from "./5.event-handling/EventBindOne";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreeting from "./6.conditional-rendering/UserGreeting";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import NameList from "./7.list-rendering/NameList";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";
import AppStyles from "./8.styling/AppStyles";
import Inline from "./8.styling/Inline";
import InlineOne from "./8.styling/InlineOne";
import StyleSheet from "./8.styling/StyleSheet";
import StyleSheetOne from "./8.styling/StyleSheetOne";
import StyleSheetTwo from "./8.styling/StyleSheetTwo";
import UserForm from "./9.form-handling/UserForm";
import UserFormOne from "./9.form-handling/UserFormOne";
import Uma from "./components/1.function/Greet";
import { Named } from "./components/1.function/Named";
// import Welcome from "./components/2.class/Welcome";
// import { WelcomeOne } from "./components/2.class/WelcomeOne";


function App() {
  function display(message){
    return message
  }
  return (
    <div>
      <UseContextHook />
      {/* <HookApi /> */}
      {/* <HookUsingObject /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <Routing /> */}
      {/* <StudentMongoApi /> */}
      {/* <StudentSQLApi /> */}
      {/* <UserApi /> */}
      {/* <PostApi /> */}
      {/* <TodoApi /> */}
      {/* <LifeCycleA /> */}
      {/* <UserFormOne /> */}
      {/* <UserForm /> */}
      {/* <AppStyles /> */}
      {/* <InlineOne /> */}
      {/* <Inline /> */}
      {/* <StyleSheetTwo primary={false}/> */}
      {/* <StyleSheetOne primary={false}/> */}
      {/* <StyleSheet /> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
      {/* <NameListTwo /> */}
      {/* <NameListOne /> */}
      {/* <NameList /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <EventBindOne /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <CounterHook /> */}
      {/* <Person /> */}
      {/* <Message notify="Hello"/> */}
      {/* <Counter /> */}
      {/* <WelcomeOne firstName="Scott" lastName="Desatnick" city="Boston" /> */}
      {/* <Welcome id={1} name="Scott Desatnick" skill="Great Manager" isAdmin={true} callDisplay={() =>display('From Scott')} />
      <Greeting id={100} name="Scott" skill="Great Boss" isAdmin={true} callDisplay={() =>display('From Scott')} />
      <Greeting id={200} name="Adam" skill="Business Analyst" isAdmin={true} callDisplay={() =>display('From Adam')}/>
      <Greeting id={300} name="Tuan" skill="Tech Boss"  isAdmin={true} callDisplay={() =>display('From Tuan')}/>
      <Greeting id={400} name="Uma" skill="Developer"  isAdmin={true} callDisplay={() =>display('From Uma')}>
        <p>This is for Uma</p>
      </Greeting> */}
      {/* <Uma />
      <Named />
      <Welcome />
      <WelcomeOne />
      <Hello /> */}
    </div>
  );
}

export default App;
