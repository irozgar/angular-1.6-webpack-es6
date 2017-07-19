import angular from "angular";
import {HomeComponent} from "./home.component"

export default angular
    .module('app.home', [])
    .component('home', HomeComponent)
    .name;
