import * as http from "../utils/http";
import * as Config from "./config/confManager";

export const getData = () => {
  http.get(Config.default.modelServer + '/dist/data/testModel.json')
  .then((response: IAppState) => {
    //launch action
  })
}