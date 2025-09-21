# HealthcareAppointment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Imagine a Classroom 📚

You are the teacher 👩‍🏫.

Students are sitting in your class 👨‍👩‍👧‍👦.

Every time you write something on the blackboard, all students see the update immediately.

Now in Code 🖥️
1. BehaviorSubject

A special blackboard where you can write something, and:

Students who are already in class see updates instantly.

Even a new student entering the class can see the latest thing written.

👉 In code:

private consultationRecordsSubject = new BehaviorSubject<ConsultationRecord[]>([]);


This is our blackboard that starts empty ([]).

2. .asObservable()

We don’t want students to write on the blackboard, only the teacher can do that.
But we want students to look at the blackboard.

👉 In code:

consultationRecords$ = this.consultationRecordsSubject.asObservable();


Here, students can observe what’s written, but cannot change it.

3. .next()

Now imagine you, the teacher, write something new on the blackboard (say a new prescription 📝).

👉 In code:

this.consultationRecordsSubject.next(this.consultationRecords);


This means: “Hey students, look! I wrote a new update on the blackboard.”

And immediately, all the students (components in Angular) who are watching will see the update.

4. Example Flow 🌊

Teacher has a list of prescriptions.

A new prescription is added by doctor.

Teacher writes it on the blackboard (.next() updates).

All students (like Consultation History Component) instantly see the new prescription.

👉 Code:

addConsultation(record: ConsultationRecord) {
  this.consultationRecords.push(record); // Add to teacher's notebook
  this.consultationRecordsSubject.next(this.consultationRecords); // Update the blackboard
}


✅ So:

BehaviorSubject = blackboard that remembers the latest writing.

asObservable() = lets students watch the blackboard but not write.

next() = teacher writes new updates on the blackboard.


