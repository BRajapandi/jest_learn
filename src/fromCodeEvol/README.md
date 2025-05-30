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

# getBy

getBy.. class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found
The suffix can be one of Role, LabelText, PlaceHolderText,text and finally TestId.

types;

<!-- getByRole                  getAllByRole
 getByLabelText             getAllByLabelText
 getByPlaceholderText       getAllByPlaceholderText
 getByText                  getAllByText
 getByDisplayValue          getAllByDisplayValue
 getByAltText               getAllByAltText
 getByTitle                 getAllByTitle
 getByTestId                getAllByTestId -->

second arg
{exact:false}

<!-- queryBy and queryAllBy -->

Returns the matching node for a query, and return null if no elements match
Useful for asserting an element that is not present
Throws an error if more than one match is found

queryAllBy
Returns an array of all matching nodes for a query, and return an empty array if no elements match

 <!-- findBy and findAllBy -->

findBy
Returns a Promise which resolves when an element is found which matches the given query
The promise is rejected if no element is found or if more than one element is found after a default timeout of 100ms

findAllBy
Returns a promise which resolves to an array of elements when any elements are found which match the given query
the promise is rejected if no elements are found after a default timeout of 1000ms

User Interactions

user event is a companion library for testing library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser
it is the recommended way to test user interactions with RTL

FireEvent vs User event

fire Event is a method from RTL which is used to dispatch DOM events
user event simulates full interactions, which may fire multiple events and do additional checks along the way
for ex : we can dispatch the change event on an input field using fire event

# Pointer

# select input

<!--
await userEvent.selectOption(screen.getByRole('listbox),[1,C])
expect(screen.getByRole('option',{name:"A"}).selected).toBe(true)
 -->

# file upload

<!--
const file = new File(['hello'], 'hello.png',{type:'image/png'})
const input = screen.getByLabelText(/upload file/i)
await userEvent.upload(input,file)
expect(input.files[0].toBe(file))
expect(input.files.item(0).toBe(file))
expect(input.files).toHaveLength(1)
 -->

# custom render function

https://www.youtube.com/watch?v=8FCP7fYICio&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=38

https://www.youtube.com/watch?v=eA7MEy8dTYY&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=39

# custom hook

describe("useCounter",()=>{
test("should render initial count",()=>{
const {result} = renderHook(useCounter,{initialProps:{initialCount:10}});
expect((result.current.count).toBe(0))
})
})

## act

describe("useCounter2",()=>{
test("should render initial count",()=>{
const {result} = renderHook(useCounter);
act(()=>result.current.decrement());
expect((result.current.count).toBe(0))
})
})

# mocking Http Requests
