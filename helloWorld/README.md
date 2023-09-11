# HelloWorlds

## Examples

| Step                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Setup Project                                   | npm install -g @angular/cli  ( Setups angular environment)<br/>ng new first project ( Creates an empty Angular Application)<br/>ng server ( Run the Application )<br>http://localhost:4200 to display the empty app                                                                                                                                                                                                                             |
 | Module                                          | ng generate module module1<br>Creates a directory (module1) with a *.module.ts ( Contains @NgModule ) with declarations, imports                                                                                                                                                                                                                                                                                                                |
 | Component                                       | ng generate component component1<br>Create a directory (component1) with fives files all start with component1 including *.component.css, *.component.html, *.component.spec.ts, *.component.ts                                                                                                                                                                                                                                                 |
 | Put Component on Default Page                   | Make a component the default Web page<br><br>1. Change file app.module.ts bootstrap list property from AppComponent to component1component<br>2. From app.component.html remove app-root tag and substitute app-component1.                                                                                                                                                                                                                     |
 | Define a class variable and display on web page | 1. In File Component1.component.ts in Class Component1 add the String name:String = "Chuck";<br>2. In Component1.component.html add : \<p>{{name}}\</p>                                                                                                                                                                                                                                                                                         |                  
 | Pro Tip                                         | The commit after this commit will be routing.  A component is being created for this revision and the generated code will not show up in future diff.  The commit for the routing does not need the creation of a component to confuse the learner.                                                                                                                                                                                             |
 | Routing                                         | Need three files:<br>1. app-routing.module.ts is where the routes are created and attached to a exported route module and a exported list of components routed to is created and exported.<br> 2. app.module.ts where the export route module is added to the declarations list  of @NgModule<br>3. In a component ( *.component.html) add \<nav\> to display the menu and a <route-outlet> as marker where the html of the route will be added |
 | Forms                                           | Need three files:<br>1. In app.Module.ts need to include import {FormsModule} from "@angular/forms" as an import of the NgModule<br>2. For the component2.module.html<br>&nbsp;&nbsp;<form (ngSubmit)="onSave(myForm)" #myForm="ngForm"><br>&nbsp;&nbsp;Each input must have ngModel ( explained later)<br>3. component2.component.ts class must contain a function onSave                                                                      |
 | Data Binding                                    | Need a better understanding of :<br>1. Experimented with String Interopolation<br>2. One way binding HTML to TypeScirpt<br>3. One way binding TypesSript to HTML<br>4. Two way Binding


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
