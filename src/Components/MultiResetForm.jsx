import React, { useRef } from 'react';

const MultiResetForm = () => {
  const formRef = useRef({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    formRef.current[e.target.name] = e.target.value;
  };

  const handleReset = () => {
    formRef.current = {
      name: '',
      email: '',
      age: ''
    };
    // Force a re-render by updating the component state (optional).
    setForceUpdate(!forceUpdate);
  };

  // To re-render the form UI when the state changes
  const [forceUpdate, setForceUpdate] = React.useState(false);

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formRef.current.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formRef.current.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formRef.current.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <pre>{JSON.stringify(formRef.current, null, 2)}</pre>
    </div>
  );
};

export default MultiResetForm;
