# Angular Sheet Tutorial

"The objective of this Angular cheat sheet tutorial is to help you quickly refresh your knowledge of Angular through concise code examples and accompanying comments.

## How to start

> Folder order to follow

### parent folder

#### 0. about

#### 1. parent folder - Angular Template Syntax and Directives

- **Interpolation:**

  - Use double curly braces `{{}}` to display data from the component class in the template.
  - Examples: `{{ title }}`, `{{ 10 - 2 }}`, `{{ solveExpression() }}`.

- **ngIf Directive:**

  - Conditionally render elements based on a boolean expression.
  - Example: `<div *ngIf="flag">Flag is {{ flag }}</div>`.

- **ngFor Directive:**

  - Iterate over a collection and repeat the specified template.
  - Examples: `<p *ngFor="let item of array">{{ item }}</p>`, nested list with `*ngFor`.

- **ngStyle Directive:**

  - Apply styles conditionally using the `ngStyle` directive.
  - Example: `<div [ngStyle]="{ color: flag ? 'red' : 'blue' }">text color</div>`.

- **ngClass Directive:**

  - Add or remove CSS classes conditionally using the `ngClass` directive.
  - Example: `<div [ngClass]="{ cssClassStyle: flag, cssClassNoStyle: !flag }">text color class!!!</div>`.

- **ngModel Directive:**

  - Enable two-way data binding for form elements.
  - Example: `<input [(ngModel)]="userInput" placeholder="Enter text here" />`.

- **Event Binding:**

  - Use parentheses `()` to bind events from the template to the component.
  - Example: `<button (click)="handleClick()">Click</button>`.

- **Pipes:**

  - Format data using Angular pipes.
  - Examples: `{{ title | uppercase }}`, date formatting with the `date` pipe, percentage formatting.

- **Component Interaction (Input and Output):**

  - Pass data from parent to child component using square brackets `[]` for input.
  - Receive data from child to parent using parentheses `()` for output/events.
  - Example: `<app-child [childMessage]="parentMessage" (messageEventChild)="receiveMessageParent($event)"></app-child>`.

- **Input Decorator:**
  - Use the `@Input` decorator to accept input values in a child component.
  - Example: `<app-card [appCardItems]="items"></app-card>`.

#### parent-view-child folder

### 2. AppRoutingModule (app-routing.module.ts)

- **NgModule:**

  - Use `@NgModule` decorator to define an Angular module.
  - Example: `@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })`.

- **RouterModule and Routes:**

  - Import `RouterModule` and `Routes` from `@angular/router`.
  - Define an array of route configurations using the `Routes` type.
  - Example: `const routes: Routes = [...]`.

- **Route Configuration:**

  - Define route configurations using the `path` and `component` properties.
  - Example: `{ path: '', component: ParentComponent }`.
  - The empty path (`''`) corresponds to the default route.

- **Lazy Loading (optional):**

  - The routing module can be expanded to support lazy loading by loading feature modules on demand.
  - For example: `{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }`.

- **Wildcard Route:**

  - Use the `**` path as a wildcard route for handling unknown routes.
  - Example: `{ path: '**', component: NotfoundComponent }`.

- **RouterModule.forRoot():**

  - Use the `forRoot` method of `RouterModule` to configure the root-level router module with the provided routes.
  - Example: `imports: [RouterModule.forRoot(routes)]`.

- **RouterModule.forChild():**
  - Use the `forChild` method for feature modules to configure additional routes.
  - Example: `imports: [RouterModule.forChild(childRoutes)]`.

### Component References:

- **Parent Component:**

  - `ParentComponent` is associated with the default route (`{ path: '', component: ParentComponent }`).
  - This component is displayed when the application is accessed without a specific route.

- **Other Components:**
  - Various components such as `MapAndpipeComponent`, `CoinsComponent`, `CounterComponent`, etc., are associated with specific routes.

### Recommendations:

- **Lazy Loading:**

  - Explore lazy loading to optimize the loading of feature modules in larger applications.

- **Guards and Resolvers:**

  - Learn about route guards and resolvers for controlling access to routes and fetching data before route activation.

- **Child Routes:**

  - Explore the concept of child routes to organize and manage nested routes within feature modules.

- **Router Outlet:**
  - Understand how to use the `<router-outlet>` directive in the application's template to display routed components.

These bullet points provide an overview of the key concepts and functionality in the provided `AppRoutingModule` file. Further exploration of each concept in the official Angular documentation is recommended for a more in-depth understanding of Angular routing.

3. navbar

###- Navigation Bar HTML (navbar.component.html)

- **RouterLink Directive:**

  - Use the `routerLink` directive to create navigation links in Angular.
  - Example: `<a routerLink="/">Parent</a>`.
  - The attribute value corresponds to the route path to navigate to.

- **Absolute and Relative Paths:**

  - Use both absolute (`/`) and relative paths in `routerLink` attributes.
  - Absolute path: `<a routerLink="/">Parent</a>`.
  - Relative path: `<a routerLink="mapAndpipe">MapAndPipe</a>`.

- **RouterLink with Route Parameters:**

  - If needed, route parameters can be added to the `routerLink`.
  - Example: `<a [routerLink]="['/user', userId]">User Profile</a>`.

- **Navigation Links:**

  - Each `<a>` element represents a navigation link to a specific route/component.
  - Example: `<a routerLink="/counter">Counter-NgRx</a>`.

- **RouterLinkActive Directive (not used here):**
  - The `routerLinkActive` directive can be used to apply a CSS class when a link is active (corresponding to the current route).

### Recommendations:

- **RouterLinkActive Directive:**

  - Consider using the `routerLinkActive` directive to highlight the active link in the navigation bar.

- **Named Router Outlets (if applicable):**

  - Explore named router outlets for scenarios where multiple router outlets are used in the application layout.

- **Navigation Guards:**

  - Learn about navigation guards to control and protect navigation to certain routes based on conditions.

- **Styling:**
  - Apply styles to the navigation bar elements based on the current route or user interactions for a better user experience.

These bullet points provide an overview of the key concepts and functionality in the provided HTML code for the navigation bar. Further exploration of each concept in the official Angular documentation is recommended for a more in-depth understanding of Angular routing and navigation.

4. parent-view-child

#### Parent Component (parent-view-child.component.ts)

- **ViewChild Decorator:**

  - Use `@ViewChild` decorator to query and get a reference to a child component element in the template.
  - Example: `@ViewChild('childMessage', { static: false }) childMessage: ElementRef | undefined;`.
  - `{ static: false }`: Specifies that the query should be resolved after the component's view has been initialized.

- **AfterViewInit Lifecycle Hook:**
  - Implement the `ngAfterViewInit` method, which is part of the Angular lifecycle hook.
  - `ngAfterViewInit` is called after the view is fully initialized.
  - Example:
    ```typescript
    ngAfterViewInit(): void {
      this.childMessage?.nativeElement.focus();
    }
    ```

### Child Component (parent-view-child.component.html)

- **Local Variable:**
  - Use a local variable (`#childMessage`) on the child element (`<input>`).
  - Example: `<input #childMessage type="text" placeholder="Type something" />`.
  - The local variable allows the parent component to access this input element using `@ViewChild`.

5. map-andpipe

6. coins folder

7. counter-only-with-service

8. counter

9. web-socket-component
