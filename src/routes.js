
import ResourceIndex from "./views/ResourceIndex";
import ResourceEdit from "./views/ResourceEdit";
import ResourceShow from "./views/ResourceShow";
import ResourceStat from "./views/ResourceStat";
import CustomForm from "./views/CustomForm";
import CustomPage from "./views/CustomPage";
import CustomTable from "./views/CustomTable";
import Home from "./views/Home";

routes: [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/rest/:resource/stat/:type?",
    name: "stat",
    component: ResourceStat
  },
  {
    path: "/rest/:resource",
    name: "index",
    component: ResourceIndex
  },
  {
    path: "/rest/:resource/create/:group?",
    name: "create",
    component: ResourceEdit
  },
  {
    path: "/rest/:resource/:id/edit/:group?",
    name: "edit",
    component: ResourceEdit
  },

  {
    path: "/rest/:resource/:id/:group?",
    name: "show",
    component: ResourceShow
  },

  {
    path: "/form/:uri?",
    name: "form",
    component: CustomForm
  },
  {
    path: "/table/:uri?",
    name: "table",
    component: CustomTable
  },
  {
    path: "/page/:uri?",
    name: "page",
    component: CustomPage
  }
];

export default routes;
