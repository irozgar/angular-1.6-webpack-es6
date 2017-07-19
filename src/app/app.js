import angular from "angular";
import common from "./common/common";
import home from "./components/home"
import { AppComponent } from "./app.component"

export default angular
    .module('angularApp', [
        common,
        home
    ])
    .component('app', AppComponent)
    .name;
