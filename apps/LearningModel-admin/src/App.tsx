import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LearningModelList } from "./learningModel/LearningModelList";
import { LearningModelCreate } from "./learningModel/LearningModelCreate";
import { LearningModelEdit } from "./learningModel/LearningModelEdit";
import { LearningModelShow } from "./learningModel/LearningModelShow";
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
        title={"LearningModel"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="LearningModel"
          list={LearningModelList}
          edit={LearningModelEdit}
          create={LearningModelCreate}
          show={LearningModelShow}
        />
      </Admin>
    </div>
  );
};

export default App;
