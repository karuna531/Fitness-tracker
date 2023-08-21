# FitnessTracker alt+ z to wrap words
# important package and necessary commands
1.lets start project
i- npm install -g @angular/cli
ii npm install -g json server
iii ng add @angular/material
iv npm install ngx-toastr -save
v.json-server --watch db.json
# create module file for all material library material.module.ts
import ngModule as @NgModule({
    exports:[],
    imports:[]
})
to use toastr import it in appmodule.ts  and then add in angular.json style
# Now configure db.json file
# Now create component using CLI
 ng g c component name to create component
 ng g s service/servicename to create service
 ng g g guard/auth to create the guard of authentication and choose CanActive to check whether it is active or not
 # Now its time to move  theconfiguration of router
 const routes:Router=[
  {  path: '', component:HomeComponent},
  {path:'register;, component:RegisterComponent},
  {path:'user' component:UserlistingComponent},{
    login lai pani banaune
  }
 ]

# Services API and httpclient and validation
register.ts
private builder:FormBuilder use it in  constructor
# Now we have to work on authservice.ts
i. inject httpClient on constructor i.e: private http:HttpClient note:donot forget to import it in appmodule.ts if not imported import it
ii. now create methods

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

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
