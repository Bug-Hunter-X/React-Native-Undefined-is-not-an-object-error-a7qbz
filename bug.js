This error occurs when you try to use a component that is not defined or has not been imported correctly.  This is common when using third-party libraries or custom components.

```javascript
// Incorrect usage
<MyComponent/>

// Correct usage (assuming MyComponent is in './MyComponent')
import MyComponent from './MyComponent';
<MyComponent/>
```