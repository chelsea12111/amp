import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InteractionList } from "./interaction/InteractionList";
import { InteractionCreate } from "./interaction/InteractionCreate";
import { InteractionEdit } from "./interaction/InteractionEdit";
import { InteractionShow } from "./interaction/InteractionShow";
import { PreferenceList } from "./preference/PreferenceList";
import { PreferenceCreate } from "./preference/PreferenceCreate";
import { PreferenceEdit } from "./preference/PreferenceEdit";
import { PreferenceShow } from "./preference/PreferenceShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"User"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Interaction"
          list={InteractionList}
          edit={InteractionEdit}
          create={InteractionCreate}
          show={InteractionShow}
        />
        <Resource
          name="Preference"
          list={PreferenceList}
          edit={PreferenceEdit}
          create={PreferenceCreate}
          show={PreferenceShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
      </Admin>
    </div>
  );
};

export default App;
