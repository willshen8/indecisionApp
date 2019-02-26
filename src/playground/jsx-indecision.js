console.log('AppJS is running!');

//JXS -Javascript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) =>{
  e.preventDefault();

  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const user = {
  name: 'Will',
  age: 35,
  location: 'Melbourne'
};

function getLocation(location){
  if(location){
    return <p>Location: {location} </p>;
  }
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p> {app.subtitle} </p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={removeAll}>Remove All</button>
      <button onClick={onMakeDecision}> What should I do? </button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}> Option: {option} </li>
          })
        }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button> Add Option </button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
