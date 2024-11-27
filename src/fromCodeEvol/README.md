# TDD

test driven development is a software development process where you writes tests before writing the software code
Once the tests have been written, you then write the code to ensure the tests pass
1.create tests that verify the functionality of a specific feature
2.Write software code that will run the tests successfully when re-executed
3.Refactor the code for optimization while ensuring the tests continue to pass

# Describe

describe(name,fn);
the first argument is the group name
The second argument is a function that contains the expectations to test

by using describe, you can able to group your test with the group name its easy to understand the case

# filename Conventions

Files with .test.js, .test.tsx, .spec.js or .spec.tsx
Files with .js or .tsx suffix in **tests** folders.

# it

'it' is also like test method
it('name',fn);

# what is coverage

<!-- https://www.youtube.com/watch?v=W-dc5fpxUVs&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=14 -->

<!--"coverage":"npm test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{js,jsx,ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}'" -->

Coverage is a metric that can help understand how much code tested
